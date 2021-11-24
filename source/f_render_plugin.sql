function f_render_plugin (
    p_dynamic_action in apex_plugin.t_dynamic_action,
    p_plugin         in apex_plugin.t_plugin)
    return apex_plugin.t_dynamic_action_render_result
is
    v_return apex_plugin.t_dynamic_action_render_result;
    v_region_data CLOB;
begin
    with region_data as 
    (
        select 
            region_id
            ,region_name
            ,NVL(static_id,'R'||region_id) as static_id
            ,template
            ,query_type_code
            ,replace(replace(replace(nvl(table_name,region_source),chr(39),'¨'),chr(10),' '),chr(13),' ') as source
            ,replace(replace(replace(where_clause,chr(39),'¨'),chr(10),' '),chr(13),' ') as where_clause
            ,source_type 
        from apex_application_page_regions
        where application_id = :APP_ID
        and page_id = :APP_PAGE_ID
        and source_type not in ('Breadcrumb')
        and template not in ('Hero')
    )
    , region_process_data as 
    (
        select 
            region_id 
            ,to_clob(process_name) as process_name
            ,to_clob(process_point) as process_point
            ,to_clob(process_type) as process_type
            ,to_clob(replace(replace(replace(process_source,chr(39),'¨'),chr(10),' '),chr(13),' ')) as process_source
            ,to_clob(when_button_pressed) as when_button_pressed
            from apex_application_page_proc
            where application_id = :APP_ID
            and page_id = :APP_PAGE_ID
            and region_id is not null
    )
    , basic_fields as 
    (
        select static_id, 'Region Name' as field_name, region_name as field_value, 1 as col_order from region_data
        union all
        select static_id, 'Static ID' as field_name, static_id as field_value, 2 as col_order from region_data
        union all
        select static_id, 'Template' as field_name, template as field_value, 3 as col_order from region_data
        union all
        select static_id, 'Query Type Code' as field_name, query_type_code as field_value, 4 as col_order from region_data
        union all
        select static_id, 'Source' as field_name, source as field_value, 5 as col_order from region_data
        union all
        select static_id, 'Where Clause' as field_name, where_clause as field_value, 6 as col_order from region_data
        union all
        select static_id, 'Source Type' as field_name, source_type as field_value, 7 as col_order from region_data
    )
    , process_fields as 
    (
        select region_id, process_name, 'Process Name' as field_name, process_name as field_value, 1 as col_order from region_process_data
        union all
        select region_id, process_name, 'Process Point' as field_name, process_point as field_value, 2 as col_order from region_process_data
        union all
        select region_id, process_name, 'Process Type' as field_name, process_type as field_value, 3 as col_order from region_process_data
        union all
        select region_id, process_name, 'Process Source' as field_name, process_source as field_value, 4 as col_order from region_process_data
        union all
        select region_id, process_name, 'When Button Pressed' as field_name, when_button_pressed as field_value, 5 as col_order from region_process_data
    )
    , processes as 
    (
        select json_object(
            'process_name' value to_char(d.process_name),
            'process_fields' VALUE json_arrayagg(
                json_object(
                    'field_name'   value b.field_name,
                    'field_value'  value b.field_value,
                    'field_order'  value b.col_order
                returning clob
                )
            returning clob
            )
        returning clob
        ) as process_json
        ,to_char(d.region_id) as region_id 
        from region_process_data d
        join process_fields b on b.region_id = d.region_id and to_char(b.process_name) = to_char(d.process_name)
        group by to_char(d.region_id), to_char(d.process_name)
    )
    select 
        json_object(
            'regions' value json_arrayagg(
                json_object(
                    'region_name' VALUE reg.region_name,
                    'static_id'   VALUE reg.static_id,
                    'basic_fields' VALUE json_arrayagg(
                        json_object(
                            'field_name'   value b.field_name,
                            'field_value'  value b.field_value,
                            'field_order'  value b.col_order
                        returning clob
                        )
                    returning clob
                    ),
                    'processes' VALUE (
                        SELECT
                            JSON_ARRAYAGG(process_json returning clob)
                        FROM processes p
                        WHERE p.region_id = reg.region_id
                        group by p.region_id
                            
                    )
                returning clob
                )
            returning clob
            )
        returning clob
        ) as json_data into v_region_data
    from region_data reg
    join basic_fields b on b.static_id = reg.static_id
    group by reg.region_name, reg.static_id, reg.region_id
    ;
    v_return.javascript_function := 'inspector.init('''||v_region_data||''')';
    return v_return;
end;

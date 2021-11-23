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
            region_name
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
    )
    select 
        json_object(
            'regions' value json_arrayagg(
                json_object(
                    'region_name' VALUE reg.region_name,
                    'static_id'   VALUE reg.static_id,
                    'template'    VALUE reg.template,
                    'query_type_code' VALUE reg.query_type_code,
                    'source'       VALUE reg.source,
                    'where_clause' VALUE reg.where_clause,
                    'source_type'  VALUE reg.source_type 
                returning clob
                )
            returning clob
            )
        returning clob
        ) as json_data into v_region_data
    from region_data reg
    ;
    v_return.javascript_function := 'Generator.init('''||v_region_data||''')';
    return v_return;
end;

/*
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
            region_name
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
    )
    , basic_fields as 
    (
        select static_id, 'Region Name' as field_name, region_name as field_value from region_data
        union all
        select static_id, 'Static ID' as field_name, static_id as field_value from region_data
        union all
        select static_id, 'Template' as field_name, template as field_value from region_data
        union all
        select static_id, 'Query Type Code' as field_name, query_type_code as field_value from region_data
        union all
        select static_id, 'Source' as field_name, source as field_value from region_data
        union all
        select static_id, 'Where Clause' as field_name, where_clause as field_value from region_data
        union all
        select static_id, 'Source Type' as field_name, source_type as field_value from region_data
    )
    select 
        json_object(
            'regions' value json_arrayagg(
                json_object(
                    'region_name' VALUE reg.region_name,
                    'static_id'   VALUE reg.static_id,
                    'basic_fields' VALUE json_arrayagg(
                        json_object(
                            'field_name' value b.field_name,
                            'field_value' value b.field_value
                        )
                    )
                returning clob
                )
            returning clob
            )
        returning clob
        ) as json_data into v_region_data
    from region_data reg
    join basic_fields b on b.static_id = reg.static_id
    group by reg.region_name, reg.static_id
    ;
    v_return.javascript_function := 'Generator.init('''||v_region_data||''')';
    return v_return;
end;
*/
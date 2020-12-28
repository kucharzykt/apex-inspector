function f_render_plugin (
    p_dynamic_action in apex_plugin.t_dynamic_action,
    p_plugin         in apex_plugin.t_plugin)
  return apex_plugin.t_dynamic_action_render_result
is
  v_return apex_plugin.t_dynamic_action_render_result;
  v_region_data VARCHAR2(4000 CHAR);
begin

for reg in (
   select 
 region_name,
 NVL(static_id,'R'||region_id) as static_id,
 query_type_code,
 nvl(table_name,region_source) as source,
 where_clause,
 source_type 
from apex_application_page_regions
where application_id = :APP_ID
and page_id = :APP_PAGE_ID
and source_type not in ('Breadcrumb')
--and static_id is not null

)
LOOP 
  if length(v_region_data) > 1
  THEN
    v_region_data := v_region_data 
    ||','||
    json_object(
     'type' VALUE 'region',
     'region_name' VALUE reg.region_name,
     'static_id' VALUE reg.static_id,
     'query_type_code' VALUE reg.query_type_code,
     'source' VALUE reg.source,
     'where_clause' VALUE reg.where_clause,
     'source_type' VALUE reg.source_type 
    );
  ELSE
    v_region_data := json_object(
     'type' VALUE 'region',
     'region_name' VALUE reg.region_name,
     'static_id' VALUE reg.static_id,
     'query_type_code' VALUE reg.query_type_code,
     'source' VALUE reg.source,
     'where_clause' VALUE reg.where_clause,
     'source_type' VALUE reg.source_type
    );
  END IF;
END LOOP;
  v_region_data := '{"region":['||v_region_data||']}';
  v_return.javascript_function := 'inspector.init('''||v_region_data||''')';
  return v_return;
end;
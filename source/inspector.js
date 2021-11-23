var inspector = {
    init: function (pi_data) {
        try {
            console.log('*******init');
            console.log(pi_data);
            //create html region with text fields from json object
            /*
            {"regions":[{"region_name":"Apex Inspector Demo","static_id":"R9176609736966920","template":"Hero","query_type_code":null,"source":null,"where_clause":null,"source_type":"HTML/Text"},{"region_name":"Countries","static_id":"R9184925740051801","template":"Interactive Report","query_type_code":"SQL","source":"select COUNTRY_ID,        NAME,        NATIONALITY,        COUNTRY_CODE,        ISO_ALPHA2,        CAPITAL,        POPULATION,        AREA_KM2,        REGION_ID,        SUB_REGION_ID,        INTERMEDIATE_REGION_ID,        ORGANIZATION_REGION_ID   from EBA_COUNTRIES","where_clause":null,"source_type":"Interactive Grid"}]}
             */
            var regions = (JSON.parse(pi_data)).regions;
            console.log('regions');
            console.log(regions);
            //LOOP REGIONS
            for (var i = 0; i < regions.length; i++) {
                var region = regions[i];
                console.log(region);
                //create html region with text fields from json object
                var region_name = region.region_name;
                var region_template = region.template;
                var region_query_type_code = region.query_type_code;
                var region_source = region.source;
                var region_where_clause = region.where_clause;
                var region_source_type = region.source_type;
                var region_html = `<div id="${region.static_id}"></div>`;
                region_html += '<div class="region_name">' + region_name + '</div>';
                region_html += '<div class="region_template">' + region_template + '</div>';
                region_html += '<div class="region_query_type_code">' + region_query_type_code + '</div>';
                region_html += '<div class="region_source">' + region_source + '</div>';
                region_html += '<div class="region_where_clause">' + region_where_clause + '</div>';
                region_html += '<div class="region_source_type">' + region_source_type + '</div>';
                region_html += '<div class="t-Form-fieldContainer t-Form-fieldContainer--floatingLabel apex-item-wrapper apex-item-wrapper--text-field js-show-label"id="P1_TEXT_FIELD_CONTAINER"><div class="t-Form-labelContainer"><label for="P1_TEXT_FIELD" id="P1_TEXT_FIELD_LABEL" class="t-Form-label">Text Field</label></div><div class="t-Form-inputContainer"><div class="t-Form-itemWrapper"><input type="text" id="P1_TEXT_FIELD" name="P1_TEXT_FIELD"class="text_field apex-item-text" value="Test Text 123" size="30"></div><spanid="P1_TEXT_FIELD_error_placeholder" class="a-Form-error"></span></div></div>';
                region_html += generateFields(region.region_name, region.source);
                region_html += '</div>';
                //add html region to page
                $('#'+region.static_id+'').append(region_html);
            }
        } catch (e) {
            console.log(e);
        }

    }
    
}
function generateFields(pi_field_name, pi_field_value) {
    try {
        var field_html = `
        <div class="t-Form-fieldContainer t-Form-fieldContainer--floatingLabel apex-item-wrapper apex-item-wrapper--text-field js-show-label"
            id="${pi_field_name}_CONTAINER">
            <div class="t-Form-labelContainer">
                <label for="${pi_field_name}" id="${pi_field_name}_LABEL" class="t-Form-label">Text Field</label>
            </div>
            <div class="t-Form-inputContainer">
                <div class="t-Form-itemWrapper"><input type="text" id="${pi_field_name}" name="${pi_field_name}"
                        class="text_field apex-item-text" value="${pi_field_value}" size="30"></div><span
                    id="${pi_field_name}_error_placeholder" class="a-Form-error"></span>
            </div>
        </div>`;

        return field_html;
    } catch (e) {
        console.log(e);
    }
}

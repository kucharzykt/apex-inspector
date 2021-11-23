var inspector = {
    init: function (pi_data) {
        try {
            //create html region with text fields from json object
            var regions = (JSON.parse(pi_data)).regions;
            //LOOP REGIONS
            for (var i = 0; i < regions.length; i++) {
                var region = regions[i];
                //Basic Region
                var basic_region_html = generateBasicRegion(region);
                //Main Region Body
                var regionInspectorBody = generateRegionInspectorBody(`inspector_body${region.static_id}`, region.region_name, basic_region_html);
                $('#'+region.static_id+'').append(regionInspectorBody);
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
                <label for="${pi_field_name}" id="${pi_field_name}_LABEL" class="t-Form-label">${pi_field_name}</label>
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
function generateBasicRegion(pi_region) {
    try {
        //Basic Fields Region
        var basic_fields = pi_region.basic_fields;
        basic_fields.sort(function (a, b) {
            return a.field_order - b.field_order;
        });
        var basic_fields_region_html = `<div id="basic_${pi_region.static_id}"></div>`;
        for (var j = 0; j < basic_fields.length; j++) {
            var field = basic_fields[j];
            basic_fields_region_html += generateFields(field.field_name, field.field_value);
        }
        basic_fields_region_html += '</div>';

        return basic_fields_region_html;
    } catch (e) {
        console.log(e);
    }
}
function generateRegionInspectorBody(pi_region_static_id,pi_region_name,pi_basic_region, pi_processes_region, pi_dynamic_a_region) {
    try {
        var field_html = `
        <div role="region" aria-label="${pi_region_name}"
            class="t-Region t-Region--hideShow t-Region--scrollBody lto${pi_region_static_id}_0 a-Collapsible js-apex-region is-collapsed"
            id="${pi_region_static_id}">
            <div class="t-Region-header">
                <div class="t-Region-headerItems t-Region-headerItems--controls">
                    <button
                        class="t-Button t-Button--icon t-Button--hideShow" type="button"
                        aria-labelledby="a_Collapsible1_${pi_region_static_id}_heading"
                        aria-controls="a_Collapsible1_${pi_region_static_id}_content" aria-expanded="false"
                        onClick="
                        if ($(this).parent().parent().parent().hasClass('is-expanded') == true){
                            $(this).parent().parent().parent().addClass('is-collapsed');
                            $(this).parent().parent().parent().removeClass('is-expanded');
                        }else{
                            $(this).parent().parent().parent().addClass('is-expanded');
                            $(this).parent().parent().parent().removeClass('is-collapsed');
                        }">
                        <span
                            class="a-Icon a-Collapsible-icon" aria-hidden="true">
                        </span>
                    </button>
                </div>
                <div class="t-Region-headerItems t-Region-headerItems--title">
                    <h2 class="t-Region-title a-Collapsible-heading" data-apex-heading=""
                        id="a_Collapsible1_${pi_region_static_id}_heading">${pi_region_name} Inspector</h2>
                </div>
            </div>
            <div class="t-Region-bodyWrap">
                <div class="t-Region-body a-Collapsible-content" id="a_Collapsible1_${pi_region_static_id}_content" aria-hidden="true">
                    ${pi_basic_region} ${pi_processes_region} ${pi_dynamic_a_region}
                </div>
            </div>
        </div>`;
        
        return field_html;
    } catch (e) {
        console.log(e);
    }
}

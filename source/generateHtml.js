var subRegionStyle = 'border: solid 1px rgb(200, 200, 200);border-radius: 5px;padding: 10px;';
var subRegionProcessStyle = 'border: solid 1px rgb(222, 222, 222);border-radius: 5px;padding: 5px;';
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
        var regionHeader = 'Basic Region Informations';
        //Basic Fields Region
        var basic_fields = pi_region.basic_fields;
        basic_fields.sort(function (a, b) {
            return a.field_order - b.field_order;
        });
        var basic_fields_region_html = `
        <div>
            <span style="padding-left: 20px;">${regionHeader}</span>
            <div id="basic_${pi_region.static_id}">
            </div>`;
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
function generateProcessesRegion(pi_region) {
    try {
        console.log(pi_region);
        var regionHeader = 'Region Processes';
        //Processes Region
        var processes_region_html = `
        <div>
            <span style="padding-left: 20px;">${regionHeader}</span>
            <div id="processes_${pi_region.static_id}">
            </div>`;
        for (var j = 0; j < pi_region.processes.length; j++) {
            var process = pi_region.processes[j];
            processes_region_html += generateProcess(process);
        }
        processes_region_html += '</div>';
        

        return processes_region_html;
    } catch (e) {
        console.log(e);
    }
}
function generateProcess(pi_process) {
    try {
        console.log(pi_process)
        var process_fields = pi_process.process_fields;
        process_fields.sort(function (a, b) {
            return a.field_order - b.field_order;
        });
        var process_html = `
        <div style="${subRegionProcessStyle}">
            <span style="padding-left: 20px;">${pi_process.process_name}</span>
            <div id="process_${pi_process.process_name}">
            </div>`;
        for (var j = 0; j < process_fields.length; j++) {
            var field = process_fields[j];
            process_html += generateFields(field.field_name, field.field_value);
        }
        process_html += '</div>';

        return process_html;
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
                        id="a_Collapsible1_${pi_region_static_id}_heading">🔎 ${pi_region_name} Inspector</h2>
                </div>
            </div>
            <div class="t-Region-bodyWrap">
                <div class="t-Region-body a-Collapsible-content" id="a_Collapsible1_${pi_region_static_id}_content" aria-hidden="true">
                    <div style="width: 50%; float: left;${subRegionStyle}">${pi_basic_region}</div> 
                    <div style="width: 50%; float: right;${subRegionStyle}">${pi_processes_region}</div>
                </div>
            </div>
        </div>`;

        return field_html;
    } catch (e) {
        console.log(e);
    }
}

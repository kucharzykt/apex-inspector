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
                //Processes Region
                var processes_region_html = generateProcessesRegion(region);
                //Main Region Body
                var regionInspectorBody = generateRegionInspectorBody(`inspector_body${region.static_id}`, region.region_name, basic_region_html, processes_region_html);
                $('#'+region.static_id+'').append(regionInspectorBody);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

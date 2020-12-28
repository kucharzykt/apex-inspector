var inspector = {
	init: function(pi_data) {
		console.log('*******init');
		console.log(pi_data);
		try {
			console.log('*******REGIONS GENERATION, REGIONS:')
			var regions = (JSON.parse(pi_data)).region;
			console.log(regions);
			//LOOP REGIONS
			for (var i = 0; i < regions.length; i++) {
				var pi_region = regions[i];
				console.log('generateRegion');
				console.log(pi_region);
				var region = $(`#${pi_region.static_id}`);
				console.log(region);
				//add button
				var rowcountbtn = document.createElement("BUTTON");
				rowcountbtn.innerHTML = "🔎Inspector";
				rowcountbtn.id = 'insbuton' + pi_region.static_id;
				rowcountbtn.type = "button";
				rowcountbtn.className = "rowcount-class";
				//rowcountbtn.style.position = "absolute";
				rowcountbtn.style.zIndex = "999";
				rowcountbtn.data = JSON.stringify(pi_region);
				rowcountbtn.onclick = function() {
					console.log('button_onclick');
					var regionFromButton = JSON.parse(this.data);
					console.log(regionFromButton);
					let div = document.createElement('div');
					console.log($(`#${'popupId'+regionFromButton.static_id}`).length);
					console.log($(`#${'popupId'+regionFromButton.static_id}`));
					if ($(`#${'popupId'+regionFromButton.static_id}`).length > 0) {
						console.log('mazu inner');
						var elem = document.getElementById(`${'popupId'+regionFromButton.static_id}`);
						elem.parentNode.removeChild(elem);

					} else {
						div.innerText = "Text";
						div.style.zIndex = "1999";
						//div.id = "divId";
						var elem = document.createElement('div');
						elem.innerHTML = '<div class="t-Region t-Region--accent15 t-Region--scrollBody lto19677617324855031425_0" id="' + 'popupId' + regionFromButton.static_id + '"> <div class="t-Region-header"> <div class="t-Region-headerItems t-Region-headerItems--title"> <span class="t-Region-headerIcon"><span class="t-Icon " aria-hidden="true"></span></span> <h2 class="t-Region-title" id="R19677617324855031425_heading">' + regionFromButton.region_name + '</h2> </div> <div class="t-Region-headerItems t-Region-headerItems--buttons"><span class="js-maximizeButtonContainer"></span></div> </div> <div class="t-Region-bodyWrap"> <div class="t-Region-buttons t-Region-buttons--top"> <div class="t-Region-buttons-left"></div> <div class="t-Region-buttons-right"></div> </div> <div class="t-Region-body"> <div class="container"> <div class="row"> <div class="col col-12 apex-col-auto"> <div class="t-Form-fieldContainer rel-col lto19677618118684031433_0 apex-item-wrapper apex-item-wrapper--text-field " id="REGION_NAME_CONTAINER"><div class="t-Form-labelContainer col col-2"> <label for="REGION_NAME" id="REGION_NAME_LABEL" class="t-Form-label">Region name</label> </div> <div class="t-Form-inputContainer col col-10"><div class="t-Form-itemWrapper"><input type="text" id="REGION_NAME" name="REGION_NAME" class="text_field apex-item-text" value="' + regionFromButton.region_name + '" size="30"></div><span id="REGION_NAME_error_placeholder" class="a-Form-error" data-template-id="12917025513327221582_ET"></span></div></div> </div> </div><div class="row"> <div class="col col-12 apex-col-auto"> <div class="t-Form-fieldContainer rel-col lto19677618576750031437_0 apex-item-wrapper apex-item-wrapper--text-field " id="SOURCE_TYPE_CONTAINER"><div class="t-Form-labelContainer col col-2"> <label for="SOURCE_TYPE" id="SOURCE_TYPE_LABEL" class="t-Form-label">Source type</label> </div> <div class="t-Form-inputContainer col col-10"><div class="t-Form-itemWrapper"><input type="text" id="SOURCE_TYPE" name="SOURCE_TYPE" class="text_field apex-item-text" value="' + regionFromButton.source_type + '" size="30"></div><span id="SOURCE_TYPE_error_placeholder" class="a-Form-error" data-template-id="12917025513327221582_ET"></span></div></div> </div> </div><div class="row"> <div class="col col-12 apex-col-auto"> <div class="t-Form-fieldContainer rel-col lto19677618400482031436_0 apex-item-wrapper apex-item-wrapper--text-field " id="STATIC_ID_CONTAINER"><div class="t-Form-labelContainer col col-2"> <label for="STATIC_ID" id="STATIC_ID_LABEL" class="t-Form-label">Static id</label> </div> <div class="t-Form-inputContainer col col-10"><div class="t-Form-itemWrapper"><input type="text" id="STATIC_ID" name="STATIC_ID" class="text_field apex-item-text" value="' + regionFromButton.static_id + '" size="30"></div><span id="STATIC_ID_error_placeholder" class="a-Form-error" data-template-id="12917025513327221582_ET"></span></div></div> </div> </div><div class="row"> <div class="col col-12 apex-col-auto"> <div class="t-Form-fieldContainer rel-col lto19677618395540031435_0 apex-item-wrapper apex-item-wrapper--text-field " id="QUERY_TYPE_CODE_CONTAINER"><div class="t-Form-labelContainer col col-2"> <label for="QUERY_TYPE_CODE" id="QUERY_TYPE_CODE_LABEL" class="t-Form-label">Query type code</label> </div> <div class="t-Form-inputContainer col col-10"><div class="t-Form-itemWrapper"><input type="text" id="QUERY_TYPE_CODE" name="QUERY_TYPE_CODE" class="text_field apex-item-text" value="' + regionFromButton.query_type_code + '" size="30"></div><span id="QUERY_TYPE_CODE_error_placeholder" class="a-Form-error" data-template-id="12917025513327221582_ET"></span></div></div> </div> </div><div class="row"> <div class="col col-12 apex-col-auto"> <div class="t-Form-fieldContainer rel-col lto19677618225626031434_0 apex-item-wrapper apex-item-wrapper--textarea " id="SOURCE_CONTAINER"><div class="t-Form-labelContainer col col-2"> <label for="SOURCE" id="SOURCE_LABEL" class="t-Form-label">Source</label> </div> <div class="t-Form-inputContainer col col-10"><div class="t-Form-itemWrapper"><div class="apex-item-group apex-item-group--textarea"><textarea name="SOURCE" rows="5" cols="30" id="SOURCE" class="textarea apex-item-textarea" data-resizable="true" style="resize: both;">' + regionFromButton.source + '</textarea></div></div><span id="SOURCE_error_placeholder" class="a-Form-error" data-template-id="12917025513327221582_ET"></span></div></div> </div> </div><div class="row"> <div class="col col-12 apex-col-auto"> <div class="t-Form-fieldContainer rel-col lto19677618619908031438_0 apex-item-wrapper apex-item-wrapper--text-field " id="WHERE_CLAUSE_CONTAINER"><div class="t-Form-labelContainer col col-2"> <label for="WHERE_CLAUSE" id="WHERE_CLAUSE_LABEL" class="t-Form-label">Where clause</label> </div> <div class="t-Form-inputContainer col col-10"><div class="t-Form-itemWrapper"><input type="text" id="WHERE_CLAUSE" name="WHERE_CLAUSE" class="text_field apex-item-text" value="' + regionFromButton.where_clause + '" size="30"></div><span id="WHERE_CLAUSE_error_placeholder" class="a-Form-error" data-template-id="12917025513327221582_ET"></span></div></div> </div> </div> </div> </div> <div class="t-Region-buttons t-Region-buttons--bottom"> <div class="t-Region-buttons-left"></div> <div class="t-Region-buttons-right"></div> </div> </div> </div>';
						var clickedButton = document.getElementById(`${'insbuton' + regionFromButton.static_id}`);
						clickedButton.appendChild(elem);
					}

				};
				region[0].prepend(rowcountbtn);
			}

		} catch (err) {
			console.log(err.message);

		}
	}
}
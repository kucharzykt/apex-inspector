var inspectorLibrary =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*Generator = (function() {

	var init = function(pi_data) {
		console.log('*******Generator INIT');
		console.log(pi_data);

		try {
			console.log('*******REGIONS GENERATION, REGIONS:')
			var regions = (JSON.parse(pi_data)).region;
			//console.log(regions);
			//LOOP REGIONS
			for (var i = 0; i < regions.length; i++) {
				Region.addRegion(regions[i]);
			}

		} catch (err) {
			console.log(err.message);
		}

	}
	return {
		init: init
	};
})();
*/
//NEW

/*import React from 'react';
import ReactDOM from 'react-dom';
import { renderToStaticMarkup } from "react-dom/server";
*/
function init(pi) {
  console.log(pi);
}

; //exports.init = init;

/*

function addRegion(pi_region) {
	console.log('******addRegion');
	console.log(pi_region);
	var region = $(`#${pi_region.static_id}`);
	//add button
	var inspectButton = createButton(pi_region);
	region[0].prepend(inspectButton);
}

function createButton(pi_region) {
	console.log('createButton start');
	var inspectButton = document.createElement("BUTTON");
	inspectButton.innerHTML = "🔎Inspector";
	inspectButton.id = 'insbuton' + pi_region.static_id;
	inspectButton.type = "button";
	inspectButton.style.width = "10%";
	inspectButton.style.zIndex = "999";
	inspectButton.data = JSON.stringify(pi_region);

	inspectButton.onclick = function() {
		console.log('button_onclick');
		var regionFromButton = JSON.parse(this.data);
		console.log(regionFromButton);
		let div = document.createElement('div');
		if ($(`#${'popupId'+regionFromButton.static_id}`).length > 0) {
			console.log('delete inner');
			var elem = document.getElementById(`${'popupId'+regionFromButton.static_id}`);
			elem.parentNode.removeChild(elem);
			var clickedButton = document.getElementById(`${'insbuton' + regionFromButton.static_id}`);
			$(clickedButton).css('width', '10%');
		} else {
			div.innerText = "Text";
			div.style.zIndex = "1999";
			var elem = document.createElement('div');
			elem.innerHTML = '<div class="t-Region t-Region--accent15 t-Region--scrollBody lto19677617324855031425_0" id="' + 'popupId' + regionFromButton.static_id + '"> <div class="t-Region-header"> <div class="t-Region-headerItems t-Region-headerItems--title"> <span class="t-Region-headerIcon"><span class="t-Icon " aria-hidden="true"></span></span> <h2 class="t-Region-title" id="R19677617324855031425_heading">' + regionFromButton.region_name + '</h2> </div> <div class="t-Region-headerItems t-Region-headerItems--buttons"><span class="js-maximizeButtonContainer"></span></div> </div> <div class="t-Region-bodyWrap"> <div class="t-Region-buttons t-Region-buttons--top"> <div class="t-Region-buttons-left"></div> <div class="t-Region-buttons-right"></div> </div> <div class="t-Region-body"> <div class="container"> <div class="row"> <div class="col col-12 apex-col-auto"> <div class="t-Form-fieldContainer rel-col lto19677618118684031433_0 apex-item-wrapper apex-item-wrapper--text-field " id="REGION_NAME_CONTAINER"><div class="t-Form-labelContainer col col-2"> <label for="REGION_NAME" id="REGION_NAME_LABEL" class="t-Form-label">Region name</label> </div> <div class="t-Form-inputContainer col col-10"><div class="t-Form-itemWrapper"><input type="text" id="REGION_NAME" name="REGION_NAME" class="text_field apex-item-text" value="' + regionFromButton.region_name + '" size="30"></div><span id="REGION_NAME_error_placeholder" class="a-Form-error" data-template-id="12917025513327221582_ET"></span></div></div> </div> </div><div class="row"> <div class="col col-12 apex-col-auto"> <div class="t-Form-fieldContainer rel-col lto19677618576750031437_0 apex-item-wrapper apex-item-wrapper--text-field " id="SOURCE_TYPE_CONTAINER"><div class="t-Form-labelContainer col col-2"> <label for="SOURCE_TYPE" id="SOURCE_TYPE_LABEL" class="t-Form-label">Source type</label> </div> <div class="t-Form-inputContainer col col-10"><div class="t-Form-itemWrapper"><input type="text" id="SOURCE_TYPE" name="SOURCE_TYPE" class="text_field apex-item-text" value="' + regionFromButton.source_type + '" size="30"></div><span id="SOURCE_TYPE_error_placeholder" class="a-Form-error" data-template-id="12917025513327221582_ET"></span></div></div> </div> </div><div class="row"> <div class="col col-12 apex-col-auto"> <div class="t-Form-fieldContainer rel-col lto19677618400482031436_0 apex-item-wrapper apex-item-wrapper--text-field " id="STATIC_ID_CONTAINER"><div class="t-Form-labelContainer col col-2"> <label for="STATIC_ID" id="STATIC_ID_LABEL" class="t-Form-label">Static id</label> </div> <div class="t-Form-inputContainer col col-10"><div class="t-Form-itemWrapper"><input type="text" id="STATIC_ID" name="STATIC_ID" class="text_field apex-item-text" value="' + regionFromButton.static_id + '" size="30"></div><span id="STATIC_ID_error_placeholder" class="a-Form-error" data-template-id="12917025513327221582_ET"></span></div></div> </div> </div><div class="row"> <div class="col col-12 apex-col-auto"> <div class="t-Form-fieldContainer rel-col lto19677618395540031435_0 apex-item-wrapper apex-item-wrapper--text-field " id="QUERY_TYPE_CODE_CONTAINER"><div class="t-Form-labelContainer col col-2"> <label for="QUERY_TYPE_CODE" id="QUERY_TYPE_CODE_LABEL" class="t-Form-label">Query type code</label> </div> <div class="t-Form-inputContainer col col-10"><div class="t-Form-itemWrapper"><input type="text" id="QUERY_TYPE_CODE" name="QUERY_TYPE_CODE" class="text_field apex-item-text" value="' + regionFromButton.query_type_code + '" size="30"></div><span id="QUERY_TYPE_CODE_error_placeholder" class="a-Form-error" data-template-id="12917025513327221582_ET"></span></div></div> </div> </div><div class="row"> <div class="col col-12 apex-col-auto"> <div class="t-Form-fieldContainer rel-col lto19677618225626031434_0 apex-item-wrapper apex-item-wrapper--textarea " id="SOURCE_CONTAINER"><div class="t-Form-labelContainer col col-2"> <label for="SOURCE" id="SOURCE_LABEL" class="t-Form-label">Source</label> </div> <div class="t-Form-inputContainer col col-10"><div class="t-Form-itemWrapper"><div class="apex-item-group apex-item-group--textarea"><textarea name="SOURCE" rows="5" cols="30" id="SOURCE" class="textarea apex-item-textarea" data-resizable="true" style="resize: both;">' + regionFromButton.source + '</textarea></div></div><span id="SOURCE_error_placeholder" class="a-Form-error" data-template-id="12917025513327221582_ET"></span></div></div> </div> </div><div class="row"> <div class="col col-12 apex-col-auto"> <div class="t-Form-fieldContainer rel-col lto19677618619908031438_0 apex-item-wrapper apex-item-wrapper--text-field " id="WHERE_CLAUSE_CONTAINER"><div class="t-Form-labelContainer col col-2"> <label for="WHERE_CLAUSE" id="WHERE_CLAUSE_LABEL" class="t-Form-label">Where clause</label> </div> <div class="t-Form-inputContainer col col-10"><div class="t-Form-itemWrapper"><input type="text" id="WHERE_CLAUSE" name="WHERE_CLAUSE" class="text_field apex-item-text" value="' + regionFromButton.where_clause + '" size="30"></div><span id="WHERE_CLAUSE_error_placeholder" class="a-Form-error" data-template-id="12917025513327221582_ET"></span></div></div> </div> </div> </div> </div> <div class="t-Region-buttons t-Region-buttons--bottom"> <div class="t-Region-buttons-left"></div> <div class="t-Region-buttons-right"></div> </div> </div> </div>';
			var clickedButton = document.getElementById(`${'insbuton' + regionFromButton.static_id}`);
			clickedButton.appendChild(elem);
			$(clickedButton).css('width', '80%');
		}

	}
	console.log('before return');
	return inspectButton;
}
/*
function RegionData(props) {
    return (
        <div id="region-data">
            <div class="item-parent">
                <label for="REGION_NAME" id="REGION_NAME_LABEL" class="item-div1 t-Form-label">Region name</label>
                <input type="text" id="REGION_NAME" name="REGION_NAME" class="item-div2 text_field apex-item-text"
                    value="Zamestnanci3" size="30"></input>
            </div>
            <div class="item-parent">
                <label for="SOURCE_TYPE" id="SOURCE_TYPE_LABEL" class="item-div1 t-Form-label">Source type</label>
                <input type="text" id="SOURCE_TYPE" name="SOURCE_TYPE" class="item-div2 text_field apex-item-text"
                    value="Interactive Grid" size="30"></input>
            </div>
            <div class="item-parent">
                <label for="STATIC_ID" id="STATIC_ID_LABEL" class="item-div1 t-Form-label">Static ID</label>
                <input type="text" id="STATIC_ID" name="STATIC_ID" class="item-div2 text_field apex-item-text"
                    value="zam3" size="30"></input>
            </div>
            <div class="item-parent">
                <label for="QUERY_TYPE_CODE" id="QUERY_TYPE_CODE_LABEL" class="item-div1 t-Form-label">Query type
                    code</label>
                <input type="text" id="QUERY_TYPE_CODE" name="QUERY_TYPE_CODE"
                    class="item-div2 text_field apex-item-text" value="SQL" size="30"></input>
            </div>
            <div class="item-parent">
                <label for="SOURCE" id="SOURCE_LABEL" class="item-div1 t-Form-label">Source</label>
                <div class="apex-item-group apex-item-group--textarea">
                    <textarea name="SOURCE" rows="5" cols="30" id="SOURCE" class="item-div2 textarea apex-item-textarea"
                        data-resizable="true" style="resize: both;">select * from emp2_basic_info where id is not null
                                </textarea>
                </div>
            </div>
            <div class="item-parent">
                <label for="WHERE_CLAUSE" id="WHERE_CLAUSE_LABEL" class="item-div1 t-Form-label">Where clause</label>
                <input type="text" id="WHERE_CLAUSE" name="WHERE_CLAUSE" class="item-div2 text_field apex-item-text" value="null" size="30"></input>
            </div>
        </div>
    );
  }

  function renderRegion() {
	   let html = renderToStaticMarkup(<RegionData />);

		return html;
	}
*/

/***/ })
/******/ ]);
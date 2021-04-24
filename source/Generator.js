Generator = (function() {

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
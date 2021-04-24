Generator = (function() {

	var init = function(pi_data) {
		console.log('*******Generator INIT');
		console.log(pi_data);
		RowCount.add(); 
	}
	return {
		init: init
	};
})(); 
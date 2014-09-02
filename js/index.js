(function($, window, document, undefined) {
	var index = {
		init: function() {
			this.slider();
		},

		slider: function() {
			$('#slider').nivoSlider({
    			controlNav: false,
    			pauseTime: 5000,
    			animSpeed: 800
		    });
		}
	}

	$(document).ready(function() {
		index.init();
	});
})(jQuery, window, document);
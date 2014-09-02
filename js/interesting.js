(function($, window, document, undefined) {
	var interesting = {
		init: function() {
			this.slider();
			this.checkBrowser();
		},

		slider: function() {
			var buttons 			= $('#timeline-wrapper .interesting'),
					slides_frame 	= $('#timeline-wrapper #slider-frame'),
					positions 		= new Array(),
					pos 					= 0,
					totalWidth 		= 0;

			$('#timeline-wrapper .slide').each(function (i) {
				/* The positions array contains each slide's commulutative offset from the left part of the container */
				positions[i] = totalWidth;
				totalWidth += 958;
			});

			buttons.on('click', function () {
				$(this).addClass('active').siblings().removeClass('active');
				pos = $(this).attr('name');
				/* Start the sliding animation */
				slides_frame.stop().animate({marginLeft:-positions[pos] + 'px'},450);

				var slide_height = $('.slide' + (parseInt(pos, 10) + 1)).height();
				slides_frame.height(slide_height);
			});
		},

		checkBrowser: function () {
			if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())) {
			    $('body').addClass('chrome');
		  	}
		}
	}

	$(document).ready(function() {
		interesting.init();
	});
})(jQuery, window, document);
(function($, window, document, undefined) {
	var common = {
		init: function() {
			this.page = $('#page').data('page');

			//Navigation menu
			$("ul.topnav li.li-wrapper").hover(function() {
        $(this).addClass('current');
        $('ul:first',this).css('visibility', 'visible');
	    },function () {
        $(this).removeClass("current");
        $('ul:first',this).css('visibility', 'hidden');
	    });

			// Set active item
	    $('.topnav .' + this.page).addClass('active');
		}
	}

	$(document).ready(function() {
		common.init();
	});
})(jQuery, window, document);
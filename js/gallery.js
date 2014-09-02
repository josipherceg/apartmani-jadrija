(function($, window, document, undefined) {
	var gallery = {
		init: function() {
			this.gallerySlider();
		},

		gallerySlider: function() {
			var self = this;
			self.totWidth = 0;
			self.carouselWidth = 0;
			self.positions = new Array();
			self.slides = $('#slides');
			self.menuList = $('#menu ul');
			self.menuItems = $('li.menuItem');
			self.pos = 0;
			self.section = 1;
			self.thumbCount = 0;
			self.offset = $('#menu').width() - (2 * $('.nav-arrows').width());
			self.visibleThumbNum = Math.round(self.offset / self.menuItems.width());
			self.flag = false;

			/* Traverse through all the slides and store their accumulative widths in totWidth */
			$('#slides .slide').each(function (i) {
				/* The positions array contains each slide's commulutative offset from the left part of the container */
				self.positions[i]= self.totWidth;
				self.totWidth += $(this).width();

				if (!$(this).width()) {
					alert("Please, fill in width & height for all your images!");
					return false;
				}
			});

			/* Traverse through all the carousel thumbnails and store their accumulative widths in carouselWidth */
			$('#menu li').each(function (i) {
				self.thumbCount++;
				self.carouselWidth += $(this).width();
			});

			/* Change the cotnainer div's width to the exact width of all the slides combined */
			self.slides.width(self.totWidth);
			self.slides.height(self.slides.data('height'));

			/* Calculate carousel list size */
			self.menuList.width($('span.left').width() + self.carouselWidth + 2);
			$('span.left').addClass('nav-disabled');

			self.bindEvents();

			/* On page load, mark the first thumbnail as active */
			$('#menu ul li.menuItem:first').addClass('act').siblings().addClass('inact');

			// Enabling auto-advance.
			/*self.current = 1;
			var changeEvery = 10,
				itvl = setInterval(function(){self.autoAdvance()},changeEvery*1000);*/
		},

		bindEvents: function() {
			var self = this;

			/* On a thumbnail click */
			$('#menu ul li a').click(function (e, keepScroll) {
				var slide;
				self.menuItems.removeClass('act').addClass('inact');
				$(this).parent().addClass('act');
				
				self.pos = $(this).parent().prevAll('.menuItem').length;

				//Adjust image container height
				slide = $('.slide.' + (self.pos + 1).toString());
				self.slides.height($('.first img').height());
				/* Start the sliding animation */
				self.slides.stop().animate({marginLeft:-self.positions[self.pos]+'px'},450);

				/* Prevent the default action of the link */
				e.preventDefault();
				
				// Stopping the auto-advance if an icon has been clicked:
				//if(!keepScroll) clearInterval(itvl);
			});

			/* On the navigation arrow click */
			$('a', self.slides).on('click', function (e) {
				var activeThumb,
					slide;

				e.preventDefault();

				if (this.id === 'next') {
					if (self.pos === self.menuItems.length - 1) {
						self.pos = 0;
						self.flag = true;
						$('.nav-arrows.left').click();
					} else {
						if (self.pos === 14) {
							$('.nav-arrows.right').click();
							self.pos --;
						}
						self.pos ++;
					}
				} else if (this.id === 'prev') {
					if (self.pos === 0) {
						self.pos = self.menuItems.length - 1;
						self.flag = true;
						$('.nav-arrows.right').click();
					} else {
						if (self.pos === 15) {
							$('.nav-arrows.left').click();
							self.pos ++;
						}
						self.pos --;
					}
				}
				//Adjust image container height
				slide = $('.slide.' + (self.pos + 1).toString());
				self.slides.height($('img', slide).height());
				/* Start the sliding animation */
				self.slides.stop().animate({marginLeft:-self.positions[self.pos]+'px'},450);
				activeThumb = self.pos + 1;
				$('li.menuItem.act').removeClass('act');
				$('li.menuItem[name="' + activeThumb.toString() + '"]').addClass('act')

				// Stopping the auto-advance if an icon has been clicked:
				//clearInterval(itvl);
			});

			$('.nav-arrows').on('click', function () {
				if (!$(this).hasClass('nav-disabled')) {
					if ($(this).hasClass('right')) {
						self.section++;
						self.menuList.animate({left : '-=' + self.offset + 'px'}, 500);

						if (self.flag) {
							var list_length = $('li.menuItem').length;
							$('li.menuItem[name="' + list_length + '"] a').click();
							self.flag = false;
						} else {
							$('li.menuItem[name="16"] a').click();
						}
					} else {
						self.section--;
						self.menuList.animate({left : '+=' + self.offset + 'px'}, 500);

						if (self.flag) {
							$('li.menuItem[name="1"] a').click();
							self.flag = false;
						} else {
							$('li.menuItem[name="15"] a').click();
						}
					}
					$(this).addClass('nav-disabled').siblings('span').removeClass('nav-disabled');
				}
			});
		},

		autoAdvance: function() {
			var self = this;
			if (self.current === -1) {
				return false;
			}

			// [true] will be passed as the keepScroll parameter of the click function on line 28
			$('#menu ul li a').eq(self.current%$('#menu ul li a').length).trigger('click',[true]);
			self.current ++;
		}
	}

	$(document).ready(function() {
		gallery.init();
	});
})(jQuery, window, document);
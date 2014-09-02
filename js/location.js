(function($, window, document, undefined) {
	var location = {
		init: function() {
			this.addressInput = $('#gmap-form input');
			this.mapWrapper = $("#gmap-wrapper");
			this.validation_label = $('#validation-label');
			this.gmaps();
			this.bindEvents();
		},

		gmaps: function() {
			var self = this;
			self.current = {};  // current click event (used to save as start / end position)
		  	self.current.latLng = [43.7280, 15.84105];

			// INITIALIZE GOOGLE MAP
			this.mapWrapper.gmap3({
			  	map:{
			    	options:{
			      		center: this.current.latLng,
			      		zoom: 12
			    	},
			    	events:{
			      		click: function(map, event){
			        		self.current = event;
			        		self.addMarker(false);
			      		}
			    	}
			  	},
			  	// add direction renderer to configure options (else, automatically created with default options)
			  	directionsrenderer:{
			    	divId:"directions",
			    	options:{
			      		preserveViewport: true,
			      		markerOptions:{
			        		visible: false
			      		}
			    	}
			  	}
			});

			//Add first marker
			self.addMarker(true, this.address);
		},

		updateMarker: function(marker, isM1) {
			if (isM1){
		    	this.m1 = marker;
		  	} else {
		    	this.m2 = marker;
		  	}
		  	this.updateDirections();
		},

		// add marker and manage which one it is (A, B)
		addMarker: function(isM1, address){
		  	// clear previous marker if set
		  	var self = this,
		  		clear = {name:"marker"};
		  	if (isM1 && self.m1) {
		    	clear.tag = "from";
		    	this.mapWrapper.gmap3({clear:clear});
		  	} else if (!isM1 && self.m2){
		    	clear.tag = "to";
		    	this.mapWrapper.gmap3({clear:clear});
		  	}

		  	if (address) {
		  		this.mapWrapper.gmap3({
	            	getlatlng:{
	              		address:  address,
	              		callback: function(results){
	              			//If wrong address
	                		if ( !results ) {
	                			self.validation_label.show();
	                			return;
	                		} else {
	                			self.validation_label.hide();
		                		$(this).gmap3({
		                  			marker:{
		                    			latLng:results[0].geometry.location,
		                    			map:{
	                     			 		center: true
	                    				},
	                    				options:{
								        	draggable: isM1 ? false : true,
								        	icon:new google.maps.MarkerImage("images/icon_green" + (isM1 ? "A" : "B") + ".png")
								      	},
								      	tag: (isM1 ? "from" : "to"),
								      	events: {
								        	dragend: function(marker){
								          	self.updateMarker(marker, isM1);
								        	}
								      	},
								      	callback: function(marker){
								        	self.updateMarker(marker, isM1);
								      	}
		                  			}
		                		});
	                		}
	              		}
	            	}
	          	});
		  	} else {
		  		// add marker and store it
			  	this.mapWrapper.gmap3({
			    	marker:{
				      	latLng: self.current.latLng,
				      	options:{
				        	draggable: isM1 ? false : true,
				        	icon:new google.maps.MarkerImage("images/icon_green" + (isM1 ? "A" : "B") + ".png")
				      	},
				      	tag: (isM1 ? "from" : "to"),
				      	events: {
				        	dragend: function(marker){
				          		self.updateMarker(marker, isM1);
				        	}
				      	},
				      	callback: function(marker){
				        	self.updateMarker(marker, isM1);
				      	}
			    	}
			  	});
		  	}
		},

		// function called to update direction is m1 and m2 are set
		updateDirections: function(){
			var self = this;
		  	if (!(self.m1 && self.m2)){
		    	return;
		  	}
		  	this.mapWrapper.gmap3({
		    	getroute:{
		      		options:{
		        		origin:self.m1.getPosition(),
		        		destination:self.m2.getPosition(),
		        		travelMode: google.maps.DirectionsTravelMode.DRIVING
		      		},
		      		callback: function(results){
		        		if (!results) return;
		        		self.mapWrapper.gmap3({get:"directionrenderer"}).setDirections(results);
		      		}
		    	}
		  	});
		},

		bindEvents: function() {
			var self = this;
			$('#submit-address').on('click', function() {
				var value = self.addressInput.val();
				if (!value || !value.length) {
					self.validation_label.show();
				} else {
					self.validation_label.hide();
					self.addMarker(false, value);
				}
			});

			//Submit address on press 'Enter' key
			$('#address-input').keypress(function (e) {
				if (e.keyCode == 13){
            		$('#submit-address').click();
      			}
			});

			$('#contactform').on('submit', self.submitForm);
		},

		submitForm: function(data) {
			var form = data.target,
				error = false,
				submitButton;

			data.preventDefault();

			$('input.inputField, textarea', form).each(function () {
				if (location.performValidation($(this)) === false) {
					error = true;
				}	
			});

			if (!error) {
				submitButton = $('.submitButton');
				submitButton.attr('disabled', 'disabled').addClass('sending');
				var params = $(form).serialize();
				$.ajax({
					type: "POST",
					url: "contact-form-handler.php",
					data: params
				})
				.done(function () {
					location.resetForm($(form));
					$('.success-label').show();
				})
    			.fail(function () {
    				location.resetForm($(form));
    				$('.error-label').show();
    			})
    			.always(function () {
					submitButton.removeAttr('disabled').removeClass('sending');
    			});
			}
		},

		performValidation: function(element){
			var self = this,
				$ELEMENT = $(element),
				isValid = true,
				name = element[0].name,
				value = $ELEMENT.val(),
				emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);

			if(value == '' || value.replace(/\s/g,'').length == 0) {
				isValid = false;
			}
			if($ELEMENT.hasClass('email') && !emailRegex.test(value)) {
				isValid = false;
			}

			var method = isValid ? 'addClass' : 'removeClass';
			$('#valid_message_' + name)[method]('hidden');

			return isValid;
		},

		resetForm: function (form) {
			$('input.inputField, textarea', form).each(function () {
				$(this).val('');	
			});
		}
	}

	$(document).ready(function() {
		location.init();
	});
})(jQuery, window, document)
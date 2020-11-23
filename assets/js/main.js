(function ($) {
	"use strict";

	// loader function
	var clPreloader = function () {
		$(window).on("load", function () {
			// will first fade out the loading animation
			$("#loader").fadeOut("slow", function () {
				// will fade out the whole DIV that covers the website.
				$("#preloader").delay(300).fadeOut("slow");
			});
		});
	};

	// init the defined functions
	(function ssInit() {
		clPreloader();
	})();
})(jQuery);

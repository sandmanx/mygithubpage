
var sitewidth = 1000,
		siteheight = 800;

var rangeToRange = function(oldVal, oldMax, oldMin, newMax, newMin){
	return ( ( ( oldVal - oldMin ) * ( newMax - newMin ) ) / ( oldMax - oldMin ) ) + newMin;
};

	// Animates the Spider for the halloween landing page

	var $spider = $('#spider'),
		spiderWidth = $spider.width(),
		spiderHeight = $spider.height();

	var ps = function(x, y){

		var values = {
			x: rangeToRange(x, 100, 0, sitewidth + spiderWidth, 0),
			y: rangeToRange(y, 100, 0, siteheight + spiderHeight, 0)
		};

		return values;

	};

	var spiderAnimate = function(){

		TweenMax
			.to($spider, 8, {
				bezier: {
					type: 'soft',
					values: [
						ps(0, 10),
						ps(20, 30),
						ps(60, -10)
					],
					autoRotate: true
				},
				ease: Power1.easeInOut,
				force3D: true
			});

		TweenMax
			.to($spider, 8, {
				bezier: {
					type: 'soft',
					values: [
						ps(0, 40),
						ps(110, 40)
					],
					autoRotate: true
				},
				ease: Power1.easeInOut,
				delay: 7,
				force3D: true,
				onComplete: function(){

					TweenMax
						.set($spider, {
							x: 0,
							y: 0
						});

					setTimeout(spiderAnimate, 2000);

				}
			});

	};

	spiderAnimate();

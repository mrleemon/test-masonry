import 'lightgallery.js';
import 'lightgallery.js/dist/css/lightgallery.css';

document.addEventListener('DOMContentLoaded', function (e) {

	document.querySelectorAll('.wp-block-occ-exhibitpress-masonry').forEach(function (item) {

		var settings = JSON.parse(item.dataset.settings);

		var exhibit = item.querySelector('.exhibit-items');
		imagesLoaded(item, function () {
			var msnry = new Masonry(exhibit, {
				itemSelector: '.exhibit-item',
				columnWidth: '.grid-sizer',
				percentPosition: true,
				gutter: parseInt(settings.gap),
			});
		});

		// Add fade-in animation.
		exhibit.querySelectorAll('.exhibit-item').forEach(function (item, index) {
			item.style.animationDelay = 0.1 * (1 + index) + 's';
		});

	});

	document.querySelectorAll('.wp-block-occ-exhibitpress-masonry').forEach(function (item) {
		
		var settings = JSON.parse(item.dataset.settings);

		var exhibit = item.querySelector('.exhibit-items');
		lightGallery(exhibit, {
			selector: 'a[data-rel^=collection]',
			addClass: settings.lightbox_background,
			mode: 'lg-fade',
			preload: 4,
			counter: false,
			download: false,
			youtubePlayerParams: {
				autoplay: 0
			},
			vimeoPlayerParams: {
				autoplay: 0
			}
		});

	});

});
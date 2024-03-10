(function () {

	document.addEventListener('DOMContentLoaded', function (e) {

		document.querySelectorAll('.exhibits .exhibit').forEach(function (item, index) {
			item.style.animationDelay = 0.1 * (1 + index) + 's';
		});

		document.querySelectorAll('.layout-horizontal .exhibit-items .exhibit-item, .layout-vertical .exhibit-items .exhibit-item, .layout-grid .exhibit-items .exhibit-item, .layout-masonry .exhibit-items .exhibit-item').forEach(function (item, index) {
			item.style.animationDelay = 0.1 * (1 + index) + 's';
		});

	});

})();

(function () {

	document.addEventListener('DOMContentLoaded', function (e) {
		
		if (document.body.classList.contains('layout-horizontal')) {
			document.documentElement.addEventListener('wheel', function (e) {
				var width = window.innerWidth;
				if (width > 954) {
					// Just on desktop
					e.preventDefault();
					e.stopPropagation();
					if (Math.abs(e.deltaY) >= Math.abs(e.deltaX)) {
						this.scrollLeft += (e.deltaY * 10);
					} else {
						this.scrollLeft -= (e.deltaX * 10);
					}
				}
			}, { passive: false });
		}

	});

})();

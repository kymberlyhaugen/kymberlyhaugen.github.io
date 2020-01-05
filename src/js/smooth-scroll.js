import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.polyfills.js';

export function createSmoothScroll() {
    var scroll = new SmoothScroll('a[href*="#"]', {
        header: '.sticky-header',
        speed: 750,
	    speedAsDuration: true,
        offset: 25
    });
}

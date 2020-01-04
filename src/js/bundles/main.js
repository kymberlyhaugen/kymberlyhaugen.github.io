// Change class for JS
var mainElement = document.documentElement;
mainElement.classList.remove('no-js');
mainElement.classList.add('js');


// Sticky Header
import {createSticky} from '../sticky-header';

    // Create sticky nav header
    var header = document.getElementById('sticky-header');
    createSticky(header);



// Toggle Logo
import {toggleLogo} from '../logo-show';

    // Toggle logo in header
    var headerLogo = document.getElementById('header-logo');
    toggleLogo(headerLogo);



// Animate items
import {animateItems} from '../animate-items';

    // Toggle logo in header
    var animItems = document.querySelectorAll('[data-animation]');
    animateItems(animItems);


// Smooth Scroll
import {createSmoothScroll} from '../smooth-scroll';
createSmoothScroll();
import './waypoints.module';

export function createSticky(stickyItem) {

    var waypoint = new Waypoint({
        element: document.getElementById('sticky-header__wrapper'),
        handler: function (direction) {

            if (direction === 'down') {
                stickyItem.classList.add('is-stuck');
            }
            if (direction === 'up') {
                stickyItem.classList.remove('is-stuck');
            }
        }
    });
    
}
import './waypoints.module';

export function toggleLogo(headerLogo) {

    var waypoint = new Waypoint({
        element: document.getElementById('header-name'),
        handler: function (direction) {

            if (direction === 'down') {
                headerLogo.classList.add('is-visible');
            }
            if (direction === 'up') {
                headerLogo.classList.remove('is-visible');
            }
        }
    });

}
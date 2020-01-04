import './waypoints.module';

export function animateItems(animItems) {

    for (let i = 0; i < animItems.length; i++) {
        var inview = new Waypoint.Inview({
            element: animItems[i],
            enter: function (direction) {
                animItems[i].classList.add(animItems[i].dataset.animation);
            }
        });
    }

}
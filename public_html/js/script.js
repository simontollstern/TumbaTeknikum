function initMap() {
    if (Modernizr.geolocation) {
        console.log("Webläsaren har stöd för geolocation")
        navigator.geolocation.getCurrentPosition(loadMap);
    }
}

function loadMap(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude + ":" + longitude);

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: longitude},
        zoom: 15
    });

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: latitude, lng: longitude},
    });
    marker.addListener('click', toggleBounce);
}
function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

//AIzaSyATSBqMTFTp81fj3k7pWLEa-Ok5m2rTmJY
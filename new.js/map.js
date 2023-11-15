function initMap() {
    var unitedCenterLocation = { lat: 41.8807, lng: -87.6742 };
    var mapOptions = {
        center: unitedCenterLocation,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    var unitedCenterMap = new google.maps.Map(document.getElementById('map-container'), mapOptions);

    var marker = new google.maps.Marker({
        position: unitedCenterLocation,
        map: unitedCenterMap,
        animation: google.maps.Animation.BOUNCE,
    });

    var contentString = '<h1>United Center</h1><p>Home of the Chicago Bulls.</p>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    google.maps.event.addListener(marker, 'mouseover', function () {
        infowindow.open(unitedCenterMap, marker);
    });
}


google.maps.event.addDomListener(window, 'load', initMap);

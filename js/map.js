function initMap() {
    var mapStyles = [{
        elementType: 'geometry.fill',
        stylers: [{
            visibility: 'on'
        }]
    }, {
        featureType: 'landscape.natural.landcover',
        elementType: 'geometry.fill',
        stylers: [{
            visibility: 'on'
        }, ]
    }];
    var mapOptions = {
        zoom: 12,
        center: {
            lat: 49.693720,
            lng: 21.765920
        },
        styles: mapStyles,
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
};
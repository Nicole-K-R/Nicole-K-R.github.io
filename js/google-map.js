
var google;

function init() {
    var myLatlng = new google.maps.LatLng(43.4723, -80.5449);
    
    var mapOptions = {
        zoom: 6,
        center: myLatlng,
        scrollwheel: false,
        styles: [{"featureType": "all","elementType": "geometry.fill","stylers": [{"weight": "2.00"}]},{"featureType": "all","elementType": "geometry.stroke","stylers": [{"color": "#9c9c9c"}]},{"featureType": "all","elementType": "labels.text","stylers": [{"visibility": "on"}]},{"featureType": "landscape","elementType": "all","stylers": [{"color": "#f2f2f2"}]},{"featureType": "landscape","elementType": "geometry.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "landscape.man_made","elementType": "geometry.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "road","elementType": "all","stylers": [{"saturation": -100},{"lightness": 45}]},{"featureType": "road","elementType": "geometry.fill","stylers": [{"color": "#eeeeee"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#7b7b7b"}]},{"featureType": "road","elementType": "labels.text.stroke","stylers": [{"color": "#ffffff"}]},{"featureType": "road.highway","elementType": "all","stylers": [{"visibility": "simplified"}]},{"featureType": "road.arterial","elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "transit","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "water","elementType": "all","stylers": [{"color": "#46bcec"},{"visibility": "on"}]},{"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#c8d7d4"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#070707"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#ffffff"}]}]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var addresses = ['Waterloo, Ontario'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png'
            });
        });
    }
}
google.maps.event.addDomListener(window, 'load', init);
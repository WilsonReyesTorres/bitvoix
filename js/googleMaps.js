//GEOLOCALISATION   

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var map, infoWindow;

function initMap() {

    let pos;

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -73.569175,
            lng: 45.500813
        },
        zoom: 14
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Vous êtes ici');
            infoWindow.open(map);
            map.setCenter(pos);
            /////
            $.ajax({
                method: "POST",
                url: "serveur/phpXmlMaps.php",
                data: {
                    lat: pos.lat,
                    lng: pos.lng
                },
                dataType: 'xml',
                success: function (xml) {
                    const apiKey = 'AIzaSyAkbWdMgGs624sL4rwDFjyat-ImNwsMnrk';
                    var markers = xml.documentElement.getElementsByTagName('marker');
                    Array.prototype.forEach.call(markers, function (markerElem) {
                        var id = markerElem.getAttribute('id');
                        var name = markerElem.getAttribute('name');
                        var address = markerElem.getAttribute('address');
                        var lati = markerElem.getAttribute('lat');
                        var long = markerElem.getAttribute('lng');
                        //var type = markerElem.getAttribute('type');
                        var point = new google.maps.LatLng(
                            parseFloat(markerElem.getAttribute('lat')),
                            parseFloat(markerElem.getAttribute('lng')));

                        var infowincontent = document.createElement('div');
                        var strong = document.createElement('strong');
                        strong.textContent = name
                        infowincontent.appendChild(strong);
                        infowincontent.appendChild(document.createElement('br'));

                        var text = document.createElement('text');
                        text.textContent = address
                        infowincontent.appendChild(text);
                        infowincontent.appendChild(document.createElement('br'));

                        var img = document.createElement('img');
                        img.setAttribute("src", "https://maps.googleapis.com/maps/api/streetview?size=350x120&location="+lati+","+long+"&key="+apiKey);
                        img.setAttribute("alt", "image");

                        infowincontent.appendChild(img);



                        var marker = new google.maps.Marker({
                            map: map,
                            position: point,
                        });
                        marker.addListener('click', function () {
                            infoWindow.setContent(infowincontent);
                            infoWindow.open(map, marker);
                        });
                    });
                },
                fail: function () {
                    alert("Vous avez un GROS problème");
                }
            });




        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }




}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

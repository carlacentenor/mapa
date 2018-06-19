function initMap() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(-12.11582, -77.03244),
        mapTypeId: 'terrain'
    };

    var map = new google.maps.Map(document.getElementById('map'),
        mapOptions);
    
    var bermudaTriangle = new google.maps.Polygon({
        paths: [
            new google.maps.LatLng(-12.10692, -77.03282),
            new google.maps.LatLng(-12.10634, -77.02806),
            new google.maps.LatLng(-12.11557, -77.02714),
            new google.maps.LatLng(-12.11582, -77.03244),
        ],
        strokeColor: '#FF0000'

    });
    bermudaTriangle.setMap(map);
    var button = document.getElementById('search');

    button.addEventListener('click', function () {
        var text =$('#address').val();
        
$.ajax({
	url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(text)},Peru&key=AIzaSyA7YnCgF_fr5JpSoRsZZ5C9_YvooKa62Jc`,
	success: function(respuesta) {
        // ubicacion a validar
    var point = new google.maps.LatLng(respuesta.results[0].geometry.location.lat, respuesta.results[0].geometry.location.lng);

    var marker = new google.maps.Marker({
        position: point,
        map: map,

    });
    marker.setMap(map);    
        if (google.maps.geometry.poly.containsLocation(point, bermudaTriangle)) {
            console.log('esta dentro de los limites');
        }
        else
            console.log('No se encuentra dentro de los limites')

	},
	error: function() {
        console.log("No se ha podido obtener la información");
    }
});
        

    });

}



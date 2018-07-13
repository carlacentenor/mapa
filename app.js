var input = document.getElementById('address');
function initMap() {
   
    inputAddress();
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(-12.11582, -77.03244),
        mapTypeId: 'terrain'
    };

    var map = new google.maps.Map(document.getElementById('map'),
        mapOptions);
    
    var bermudaTriangle = new google.maps.Polygon({
        paths: [
            new google.maps.LatLng(-12.06518, -77.04526),
            new google.maps.LatLng(-12.07513, -77.05382),
            new google.maps.LatLng(-12.07261, -77.05709),
            new google.maps.LatLng(-12.07205, -77.05864),
            new google.maps.LatLng(-12.07154, -77.06069),
            new google.maps.LatLng(-12.07165, -77.06146),
            new google.maps.LatLng(-12.07261, -77.06166),
            new google.maps.LatLng(-12.07297, -77.062),
            new google.maps.LatLng(-12.07305, -77.06201),
            new google.maps.LatLng(-12.08127, -77.06646),
            new google.maps.LatLng(-12.08304, -77.06724),
            new google.maps.LatLng(-12.08413, -77.06484),
            new google.maps.LatLng(-12.0854, -77.06433),
            new google.maps.LatLng(-12.08657, -77.06289),
            new google.maps.LatLng(-12.08669, -77.06229),
            new google.maps.LatLng(-12.08802, -77.06032),
            new google.maps.LatLng(-12.09326, -77.05293),
            new google.maps.LatLng(-12.09529, -77.05432),
            new google.maps.LatLng(-12.09797, -77.05565),
            new google.maps.LatLng(-12.09915, -77.05296),
            new google.maps.LatLng(-12.09885, -77.0497),
            new google.maps.LatLng(-12.0984, -77.04907),
            new google.maps.LatLng(-12.09964, -77.04301),
            new google.maps.LatLng(-12.09872, -77.04187),
            new google.maps.LatLng(-12.09543, -77.04005),
            new google.maps.LatLng(-12.0934, -77.04032),
            new google.maps.LatLng(-12.09374, -77.0439),
            new google.maps.LatLng(-12.08309, -77.04493),
            new google.maps.LatLng(-12.08324, -77.04369),
            new google.maps.LatLng(-12.08288, -77.04189),
            new google.maps.LatLng(-12.07976, -77.04166),
            new google.maps.LatLng(-12.07975, -77.04247),
            new google.maps.LatLng(-12.07677, -77.04207),
            new google.maps.LatLng(-12.07448, -77.04197),
            new google.maps.LatLng(-12.0691, -77.03963),
            new google.maps.LatLng(-12.06508, -77.03904),
            new google.maps.LatLng(-12.06508, -77.03904),
            new google.maps.LatLng(-12.06518, -77.04526)





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


function inputAddress(){
    let autocompleteorigin = new google.maps.places.Autocomplete(input);
}
function initMap(){
    var coord = {lat:-6.788255 ,lng:-79.850652};
    var map= new google.maps.Map(document.getElementById('map'),{
        zoom:14,
        center:coord,
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })

    // Agregar el buscador de lugares
            var input = document.getElementById('places-search');
            var searchBox = new google.maps.places.SearchBox(input);

            map.addListener('bounds_changed', function () {
                searchBox.setBounds(map.getBounds());
            });

            searchBox.addListener('places_changed', function () {
                var places = searchBox.getPlaces();

                if (places.length === 0) {
                    return;
                }

                // Mover el mapa al lugar seleccionado
                var bounds = new google.maps.LatLngBounds();
                places.forEach(function (place) {
                    if (!place.geometry) {
                        console.log("El lugar seleccionado no tiene geometría.");
                        return;
                    }

                    if (place.geometry.viewport) {
                        bounds.union(place.geometry.viewport);
                    } else {
                        bounds.extend(place.geometry.location);
                    }
                });

                map.fitBounds(bounds);
            });
}

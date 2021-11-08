import L from 'leaflet';

var setIcon = L.icon({
    iconUrl: 'http://www.waterhousepeoria.com/wp-content/uploads/leaflet-maps-marker-icons/movierental.png',
});

var cityIcon = L.icon({
    iconUrl: 'http://www.waterhousepeoria.com/wp-content/uploads/leaflet-maps-marker-icons/bigcity.png',
});


export { cityIcon, setIcon };
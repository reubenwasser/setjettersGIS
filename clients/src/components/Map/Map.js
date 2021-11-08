import './Map.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import MovieSets from './Layers/MovieSets';
import Cities from './Layers/Cities';


function Map() {

  return (
    <div className="Map">
      <MapContainer center={[52.52437, 13.41053]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <MovieSets />
        <Cities />
      </MapContainer>
    </div>
  );
}

export default Map;

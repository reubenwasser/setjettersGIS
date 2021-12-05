import './Map.css';
import "leaflet/dist/leaflet.css";
import React, {useState} from "react";
import { MapContainer} from 'react-leaflet';
import Layers from './Layers/Layers';
import Legend from './Legend/Legend';



function Map() {
  const [map, setMap] = useState(null);

  return (
    <div className="Map">
      <MapContainer 
        center={[52.52437, 13.41053]} 
        zoom={13}
        whenCreated={setMap}
      >
        <Layers />
        <Legend map={map}/>
      </MapContainer>
    </div>
  );
}

export default Map;

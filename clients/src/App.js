import './App.css';
import './components/Map.css';
import React, {useState, useEffect} from "react";
import Axios from "axios";
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

// import Map from './components/Map.js';

function App() {
  const [movieLocationsList, setMovieLocations] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setMovieLocations(response.data);
      console.log(response.data)
    })
  }, [])

  return (
    <div className="App">
      <MapContainer center={[52.52437, 13.41053]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      {movieLocationsList.map((val) => (
        <Marker
        // key = {val.name} 
        position = {[val.lat, val.lng]}>

        </Marker>      
      ))}
      </MapContainer>

    </div>
  );
}

export default App;

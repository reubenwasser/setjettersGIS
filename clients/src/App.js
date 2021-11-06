import './App.css';
import './components/Map.css';
import React, {useState, useEffect} from "react";
import Axios from "axios";
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { greenIcon } from './components/Icon';

// import Map from './components/Map.js';

function App() {
  const [movieLocationsList, setMovieLocations] = useState([]);
  const [citiesLocationsList, setCitiesLocations] = useState([]);
  const [setName] = useState("");

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get/locations').then((response) => {
      setMovieLocations(response.data);
      console.log(response.data)
    })
  }, [])

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get/cities').then((response) => {
      setCitiesLocations(response.data);
      console.log(response.data)
    })
  }, [])

  return (
    <div className="App">
      <div className="Map">
      <MapContainer center={[52.52437, 13.41053]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      {movieLocationsList.map((val) => (
        <Marker
        // key = {val.name} 
        position = {[val.lat, val.lng]}>
          <Popup>
            {val.name}
          </Popup>
        </Marker>
      ))}
      {citiesLocationsList.map((val) => (
        <Marker icon={greenIcon}
        // key = {val.name} 
        position = {[val.lat, val.lng]}>
          <Popup>
            {val.name}
          </Popup>
        </Marker>
      ))}
      </MapContainer>
      </div>
      <div className="Form">
      <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default App;

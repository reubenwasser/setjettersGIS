import React, {useState, useEffect} from "react";
import Axios from "axios";
import { Marker, Popup } from 'react-leaflet';
import { setIcon } from './Icons';

require('react-leaflet-markercluster/dist/styles.min.css'); 


function MovieSets() {
  const [movieLocationsList, setMovieLocations] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get/locations').then((response) => {
      setMovieLocations(response.data);
      console.log(response.data)
    })
  }, [])

  return (
      
      movieLocationsList.map((val) => (
        <Marker icon={setIcon}
        // key = {val.name} 
        position = {[val.lat, val.lng]}>
          <Popup>
            {val.name}
          </Popup>
        </Marker>
      ))
  );
}

export default MovieSets;

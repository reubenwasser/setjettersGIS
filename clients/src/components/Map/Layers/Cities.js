import React, {useState, useEffect} from "react";
import Axios from "axios";
import { Marker, Popup } from 'react-leaflet';
import { cityIcon } from './Icons';


function Cities() {
  const [movieLocationsList, setMovieLocations] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get/cities').then((response) => {
      setMovieLocations(response.data);
      console.log(response.data)
    })
  }, [])

  return (
      movieLocationsList.map((val) => (
        <Marker icon={cityIcon}
        // key = {val.name} 
        position = {[val.lat, val.lng]}>
          <Popup>
            {val.name}
          </Popup>
        </Marker>
      ))
  );
}

export default Cities;

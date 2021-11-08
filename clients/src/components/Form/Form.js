import './Form.css';
import React, {useState, useEffect} from "react";
import {DropdownButton, Dropdown} from 'react-bootstrap'
import Axios from "axios";

function Form() {
  const [movieLocationsList, setMovieLocations] = useState([]);
  const [citiesLocationsList, setCitiesLocations] = useState([]);

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
    <div className="Form">
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        </DropdownButton>
    </div>
  );
}

export default Form;

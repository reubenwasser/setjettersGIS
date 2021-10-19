import React, { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import { useEffect } from 'react';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 52.52437, lng: 13.41053 },
      zoom: 12,
    }
  }
  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      console.log(response);
    })
  }, [])
  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <MapContainer center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      </MapContainer>
    );
  }
}

export default MapView;

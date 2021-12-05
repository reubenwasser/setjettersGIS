import React from 'react';
import { TileLayer, LayersControl, LayerGroup, FeatureGroup, useMap, useMapEvent} from 'react-leaflet';
import MovieSets from './MovieSets';
import Cities from './Cities';
import Businesses from './Businesses'
import OSMForm from '../OSM/OSMForm';
import MarkerClusterGroup from 'react-leaflet-markercluster';



function Layers() {

    const [OSMSearch, setOSMSearch] = React.useState([]);
    const [mapBounds, setMapBounds] = React.useState(useMap().getBounds());

    const map = useMapEvent('move', () => {
      setMapBounds(map.getBounds());
    });

    const onSearchChange = (key, value) => {
      setOSMSearch([key, value]);
    }

  return (
    <LayersControl position="topright" collapsed="False">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Black and White">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="Movie Sets">
            <LayerGroup>
                <MarkerClusterGroup>
                    <MovieSets />
                </MarkerClusterGroup>
            </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Cities">
            <LayerGroup>
                <Cities />
            </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Nearby Businesses">
        <FeatureGroup pathOptions={{ color: 'purple' }}>
                <OSMForm handleSearchChange={onSearchChange}/>
                <MarkerClusterGroup>
                    <Businesses searchParams={OSMSearch} mapBounds={mapBounds}/>
                </MarkerClusterGroup>
            </FeatureGroup>
        </LayersControl.Overlay>
    </LayersControl>
  );
}

export default Layers;

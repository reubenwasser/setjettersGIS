import { TileLayer, LayersControl, LayerGroup} from 'react-leaflet';
import MovieSets from './MovieSets';
import Cities from './Cities';
import MarkerClusterGroup from 'react-leaflet-markercluster';



function Layers() {

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
    </LayersControl>
  );
}

export default Layers;

import { useEffect } from "react";
import L from "leaflet";
import "./Legend.css";

function Legend({ map }) {
  console.log(map);
  useEffect(() => {
    if (map) {
      const legend = L.control({ position: "bottomright" });

      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "info legend");
        div.innerHTML =
          "<h4>Legend</h4>" +
          "<img src=http://www.waterhousepeoria.com/wp-content/uploads/leaflet-maps-marker-icons/movierental.png alt=Movie Sets style=width:20px;height:20px;> <b>Movie Sets</b>" +
          "<br>" +
          "<img src=http://www.waterhousepeoria.com/wp-content/uploads/leaflet-maps-marker-icons/bigcity.png alt=Cities style=width:20px;height:20px;> <b>Cities</b>";
        return div;
      };

      legend.addTo(map);
    }
  }, [map]);
  return null;
}

export default Legend;

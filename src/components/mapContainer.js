import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { compose, withProps } from "recompose";
import MapStores from './mapStores';


const MapContainer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="map-container"style={{ height: `100%`, width: "70%", float: "right" }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 19.4326, lng: -99.1332 }}
  >
    <MapStores
    fx={props.showStoreInfo}
    />
  </GoogleMap>
)

export default MapContainer;

// AIzaSyCPXHVT3nPdAZbs4wMGm241DOlPOPfNn7s



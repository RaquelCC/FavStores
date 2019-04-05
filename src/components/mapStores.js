import React from 'react';
import stores from '../store_directory.json';
import { Marker } from "react-google-maps";


function MapStores(props) {
    const showStores = stores.map((element, i) => {
        return (
            <Marker
                key={i}
                position={{ lat: element.Coordinates.lat, lng: element.Coordinates.lng }}
                title={element.Name}
                onClick={() => props.fx(element)}
            />
        )
    })

    return showStores;
}

export default MapStores;
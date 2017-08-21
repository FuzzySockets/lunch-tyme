import React from 'react';
import { Marker, GoogleMap, withGoogleMap } from "react-google-maps";

export const MapWidget = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={15}
    defaultCenter={props.center}
    center={props.center}
    onClick={props.onMapClick}>

    {props.markers.map((marker, i) => (
      <Marker key={i} {...marker}/>
    ))}

  </GoogleMap>
));

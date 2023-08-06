import React from "react";
// import {GoogleMapReact, GoogleMap, Marker } from 'google-map-react';
// import GoogleMap from 'google-map-react';
import GoogleMapReact from 'google-map-react'
import Marker from 'google-map-react'
import GoogleMap from 'google-map-react'
import { useState } from "react";
// import { google } from 'googleapis';

// const AnyReactComponent = ({ text, lat, lng }) => <div>{text}</div>;


// const MapWithMarker = () => {
//   const [latitude, setLatitude] = useState(0);
//   const [longitude, setLongitude] = useState(0);

//   return (
//     <GoogleMap
//       zoom={10}
//       center={[latitude, longitude]}
//     >
//       {/* <Marker
//         position={[latitude, longitude]}
//         onClick={onMarkerClick}
//       /> */}
//     </GoogleMap>
//   );
// };

// export default MapWithMarker;




export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 32.0853,
      lng: 34.7818
    },
    zoom: 14
  };

  const [latitude, setLatitude] = useState(32.0853);
  const [longitude, setLongitude] = useState(34.7818);

  const onMarkerClick = () => {
    alert(`Marker clicked at ${latitude}, ${longitude}`);
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDeDHVwi9LvNkqFIzLLC9dBE9AzpBPOD-s" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        // center={[latitude, longitude]}
        onChange={(changeVal)=>{setLatitude(changeVal.center.lat); setLongitude(changeVal.center.lng)}}
      >

        <div lat={32.0953} lng={34.7818} ><img src="mapMarker.png" alt="shopske" width={20}/></div>
        <div lat={32.0893} lng={34.7914} ><img src="mapMarker.png" alt="shopske" width={20}/></div>
        <div lat={32.0653} lng={34.7818} ><img src="mapMarkerYellow.png" alt="shopske" width={20}/></div>
        <div lat={32.0729} lng={34.7718} ><img src="mapMarkerYellow.png" alt="shopske" width={20}/></div>
        <div lat={32.0853} lng={34.7918} ><img src="mapMarkerGreen.png" alt="shopske" width={20}/></div>

        {/* <Marker position={[32.0953, 34.7818]} onClick={onMarkerClick}></Marker> */}
        
      </GoogleMapReact>
      {/* <GoogleMap  zoom={1}
      center={[latitude, longitude]}>
         <Marker
        position={[latitude, longitude]}
        // onClick={onMarkerClick}
      />
      </GoogleMap> */}
    </div>
  );
}


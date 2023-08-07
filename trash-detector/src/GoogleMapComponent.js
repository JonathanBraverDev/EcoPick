import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Popup } from "./components/Popup.js";
const GoogleMapComponent = (props) => {

    // const pinBackground = new PinElement({
    //     background: '#FBBC04',
    // });

    let markersList = [
        {lat:32.0953, lng:34.7818},
        {lat:32.0893, lng:34.7914},
        {lat:32.0653, lng:34.7818},
        {lat:32.0729, lng:34.7718},
        {lat:32.0853, lng:34.7918}
    ]
    let [markers, setMarkers] = useState(markersList);
    let [popUpVisible, setPopUpVisible] = useState(false);
    const mapStyles = {
        width: '100%',
        height: '100%'
    };

    let onMarkerDragEnd = (coord, index, markers) => {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
        markers[index] = { lat, lng };
        setMarkers(markers);
    }

    let myMarkers = markers && Object.entries(markers).map(([key, val]) => (
        <Marker key={key} id={key} position={{
            lat: val.lat,
            lng: val.lng
        }}
            onClick={() => setPopUpVisible(true)}
            draggable={false}
            onDragend={(t, map, coord) => onMarkerDragEnd(coord, key, markers)}
            onMouseover={() => console.log("hover")}
        />
    ))
    return (
        <>
            <div>
                <div className="row d-flex justify-content-center text-center">
                    
                    <Map
                        google={props.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={
                            {
                                lat: 32.0853,
                                lng: 34.7818
                            }
                        }
                    >
                        {myMarkers}
                    { popUpVisible &&  <Popup  
                            // isOpen={popUpVisible}
                            onClose={()=> {setPopUpVisible(false)}}
                            title="Example Popup"
                            content="This is a simple and pretty popup component." >
                            </Popup> }
                    </Map>
                </div>
            </div>
        </>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDeDHVwi9LvNkqFIzLLC9dBE9AzpBPOD-s'
})(GoogleMapComponent);
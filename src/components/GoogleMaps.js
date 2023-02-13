import React from 'react';

import { GoogleMap, useJsApiLoader ,Marker } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 33.859186,
  lng: 10.979714
};

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 33.859186,
  lng: 10.979714,
}
function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyANwmF7pwcckqwAloki1cMFymZqnhtXqdg"
  })
  const [map, setMap] = React.useState(null)

  
return (
    isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
       <Marker position={center} />
      </GoogleMap>
  ) : <>  </>
        
  )
}

export default GoogleMaps
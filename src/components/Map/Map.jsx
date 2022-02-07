import React from 'react';

import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';


import useStyles from './style.js';

const Map = ({setCoordinates, setBounds, coordinates}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)')



  const onChangeMapClick = (e) => {
    setCoordinates({lat: e.center.lat, lng: e.center.lng})
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw})
    //console.log(e)
  }

  const onChildClickMapClick = () => {
    console.log('onchile clicked for map')
  }

  return (
      <div className={classes.mapContainer}>
        <GoogleMapReact 
        bootstrapURLKeys={{key: 'AIzaSyAjovLnTtLWNrdXSuUkw2_fruVt8vYOBmM'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => onChangeMapClick(e)}
        onChildClick={onChildClickMapClick}
        >

        </GoogleMapReact>
      </div>
  )
};

export default Map;

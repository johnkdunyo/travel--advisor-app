import React, {useEffect, useState} from "react";

import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import { getPlacesData } from "./api";




function App() {

  const [places, setPlaces] = useState('');
  const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
      setCoordinates({lat:latitude, lng:longitude})
    })

  }, [])

  useEffect(() => {
    //console.log( coordinates, bounds)
    getPlacesData(bounds?.sw, bounds?.ne)
      .then((data)=>{
        setPlaces(data)
        console.log(places)
      }
      )
  
  
  }, [coordinates, bounds, places]);

  console.log( places)
  




  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%'}} >
        <Grid item xs={12} md={4}>
          <List  places={places}/>
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
           />
        </Grid>
      
      </Grid>
    </React.Fragment>
  );
}

export default App;

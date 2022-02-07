import React, {useState} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './style.js';

const List = () => {
  
  const classes = useStyles();

  const [ type, setType] = useState('restaurants');
  const [rating, setRating] = useState(0);

  const places = [
    {id: 1, name: 'Cool place'},
    {id: 2, name: 'Best Beer'},
    {id: 3, name: 'Best Pub'}
  ];




  return (
      <div className={classes.container}>
        <Typography variant='h4'>
          Restaurants, Hotels, Attractions
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select 
            value={type}
            onChange={(e) => setType(e.target.value) }
            >
              <MenuItem value='restaurants'>Restaurants</MenuItem>
              <MenuItem value='hotels'>Hotels</MenuItem>
              <MenuItem value='attractions'>Attractions</MenuItem>
            </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel>Rating</InputLabel>
          <Select 
            value={rating}
            onChange={(e) => setRating(e.target.value) }
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3 stars</MenuItem>
              <MenuItem value={4}>Above 4 stars</MenuItem>
            </Select>
        </FormControl>

        <Grid container spacing={3} className={classes.list}>
          {places?.map((place) => (
            <Grid item key={place.id} xs={12}>
              <PlaceDetails place = {place} />
            </Grid>
          ))};
        </Grid>

      </div>
  )
};

export default List;

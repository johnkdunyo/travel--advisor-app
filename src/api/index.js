import axios from 'axios';

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
 
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '7a19de882amshe1a9f00633d9d8bp1b38c0jsnb5a70c41d488'
  }
};



export const getPlacesData = async (sw, ne) => {
  console.log(sw, ne)
    try {
        const {data : { data}} = await axios.get(url, 
          {
            params: {
              bl_latitude: '11.847676',
              tr_latitude: '12.838442',
              bl_longitude:'109.095887',
              tr_longitude: '109.149359',
           
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '7a19de882amshe1a9f00633d9d8bp1b38c0jsnb5a70c41d488'
            }
          }
          );
          console.log(data)
        return data;

    }
    catch (error) {
        console.log(error)

    };
}



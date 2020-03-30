<template>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>{{ pageTitle }}</title>
  </head>
  <body>
  <HeaderPage v-bind:header="header" />
  <div class="main-content">
  <p>Use this site to get weather!</p>
      <form>
         <input placeholder="Location" v-model="location"> 
         <button @click.prevent="getLatLon()">Search</button>
      </form>
      <p id="message-1">{{place_name}}</p>
      <p id="message-2">{{forecast}}</p>
   </div>
  <FooterPage v-bind:author="author" />
  </body>
</html>
</template>

<script>
import HeaderPage from './common/HeaderPage';
import FooterPage from './common/FooterPage';
import axios from 'axios';

export default {
  name: 'IndexPage',
  data () {
    return {
      pageTitle: 'Climate App',
      header: 'My Climate App',
      author: 'AJ',
      location: '',
      place_name: 'From JavaScript',
      latitude: '',
      longitude: '',
      forecast: ''
    }
  },
  components: {
    HeaderPage, FooterPage
  },
  methods: {
    getLatLon(){
      const uri1 = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(this.location) + ".json?access_token=pk.eyJ1IjoicGhhbnRvbXNnIiwiYSI6ImNqdzJ6ZjI2azB6MTI0OXBzaW1kYmgxcHMifQ.9YJDs0DSdGN7BI8JStjnZA&limit=1";
      this.place_name = 'Loading...';
      this.forecast = '';
      axios.get(uri1)
        .then(response => {
          if(response.data.features.length===0){
            this.place_name = 'Geocode: Invalid location. Please check your inputs.';
          }
          else{
            this.placename = response.data.features[0].place_name;
            this.longitude = response.data.features[0].center[0];
            this.latitude = response.data.features[0].center[1];

            const uri2 = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/46e136bad797b1ff8efdc3dc78642ef9/" + this.latitude + "," + this.longitude + "?units=si";
            axios.get(uri2)
            .then(response => {
              this.summary = response.data.daily.data[0].summary;
              this.temparature = response.data.currently.temperature;
              this.precipProbability = response.data.currently.precipProbability;
              this.windspeed = response.data.currently.windSpeed;
              this.place_name = this.placename;
              this.forecast = this.summary + " The temperature is " + this.temparature + "'C with a " + this.precipProbability + "% chance of rain. Wind speed is "+this.windspeed+" kmph."
              
            })
            .catch(error => {
              this.place_name = 'Enable to connect DarkSky';
            });
          }
          
        })
        .catch(error => {
          this.place_name = 'Enable to connect Geocoder';
        });
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

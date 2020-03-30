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
      <p>{{message}}</p>
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
      pageTitle: 'Help Page',
      header: 'Help Page',
      author: 'AJ',
      message: 'This is the help message that i want to display in the screen'
    }
  },
  components: {
    HeaderPage, FooterPage
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

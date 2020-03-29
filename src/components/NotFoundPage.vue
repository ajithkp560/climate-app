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
  name: 'NotFoundPage',
  data () {
    return {
      pageTitle: '404 Not Found',
      header: '404 Not Found',
      author: 'AJITH KP',
      message: 'Page is Not Found'
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

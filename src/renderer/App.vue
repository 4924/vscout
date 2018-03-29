<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

  export default {
    name: 'vscout',
    components: { Navbar }
  }
</script>

<style>
  /* CSS */
</style>

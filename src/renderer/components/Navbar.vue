<template>
  <div id="navwrap">
    <main>
      <div class="top">
        <span class="navtitle" @click="goto('/')">
          Main
        </span>
        <span class="navtitle" @click="goto('/matches')">
          Matches
        </span>
        <span class="navtitle" @click="goto('/teams')">
          Teams
        </span>
        <span class="navtitle" @click="goto('/reader')">
          QR Codes
        </span>
        <span class="navtitle" @click="goto('/matches')">
          Needed
        </span>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    components: {},
    methods: {
      goto(link) {
      this.$router.push(link)  
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  body { font-family: 'Source Sans Pro', sans-serif; }

  #navwrap {
    width: 100%;
    height: 20%;
    background-color: green;
  }

  .top {
    display: flex;
    flex-direction: row;
  }

  .navtitle {
    color: red;
    font-size: 20px;
    font-weight: bold;
    margin: 1%;
    margin-left: 3%;
    margin-right: 3%;
    cursor: pointer;
  }
</style>

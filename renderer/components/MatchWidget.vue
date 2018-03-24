<template>
  <div id="matchwwrap">
    <main>
    <h2 id="match">{{matchnumber}}</h2>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'match-widget',
    components: {},
    props: ['matchnumber'],
    methods: {
      goto(link) {
        this.$router.push(link)
      }
    }
  }
</script>

<style>
  #match {
    cursor: pointer;
    margin: 5%;
  }
</style>

<template>
  <div id="teamwwrap">
    <main>
    <h2 id="team" @click="goto('/team:20')">{{teamnumber}}</h2>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'team-widget',
    components: {},
    props: ['teamnumber'],
    methods: {
      goto(link) {
        this.$router.push(link)
      }
    }
  }
</script>

<style>
  #team {
    cursor: pointer;
    margin: 5%;
  }
</style>

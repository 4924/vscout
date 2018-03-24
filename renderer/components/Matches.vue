<template>
  <div id="matchwrap">
    <main>
      <div class="matchlist">
        <match-widget :matchnumber='1'></match-widget>
        <match-widget :matchnumber='2'></match-widget>
      </div>
    </main>
  </div>
</template>

<script>
import MatchWidget from './MatchWidget';

  export default {
    name: 'match-list',
    components: { MatchWidget },
  }
</script>

<style>
  .matchlist {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 10px;
    grid-template-rows: repeat(4, 1fr);
  }
</style>

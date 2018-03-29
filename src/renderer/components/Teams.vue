<template>
  <div id="teamwrap">
    <main>
      <div class="teamlist">
        <team-widget :teamnumber='34'></team-widget>
        <team-widget :teamnumber='399'></team-widget>
      </div>
    </main>
  </div>
</template>

<script>
import TeamWidget from './TeamWidget';

  export default {
    name: 'team-list',
    components: { TeamWidget },
  }
</script>

<style>
  .teamlist {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 10px;
    grid-template-rows: repeat(4, 1fr);
  }
<

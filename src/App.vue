<template>
  <div id='app'>
    <header>
      <h1>TalkDoser</h1>
      <span>Conversation entre {{ peopleList }}</span>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>Footer</footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'getPeople'
    ]),
    peopleList () {
      return Object.keys(this.getPeople).join(', ')
    }
  },
  created () {
    this.$store.dispatch('getTalkData')
  }
}
</script>

<style>
/*#7f9eb2*/
/*#77919d*/

body {
  background-color: #0d3446;
  color: #d8dfe2;
  font-size: 1rem;
  font-family: 'Hind', sans-serif;
}

header {
  background-color: #fff;
  color: #0d3446;
  grid-area: header;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}

.container {
  grid-template-columns: 50px;
  grid-template-rows: auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
}
</style>

<template>
  <div id='app'>
    <header>
      <h1>TalkDoser</h1>
      <!-- <span>Conversation entre {{ peopleList }}</span> -->
    </header>

    <main-nav></main-nav>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav'
// import { mapGetters } from 'vuex'

export default {
  name: 'app',
  created () {
    this.$store.dispatch('getTalkData')
  },
  components: {
    MainNav
  }
}
</script>

<style>
html,
body,
#app {
  margin: 0;
  min-height: 100vh;
  padding: 0;
  width: 100vw;
}

#app {
  color: #d8dfe2;
  display: grid;
  font-family: 'Hind', sans-serif;
  font-size: 1rem;
  grid-template-rows: 100px auto;
  grid-template-columns: minmax(150px, 1fr) 9fr;
  grid-template-areas: 'header header'
                       'nav main';
}

header {
  background-color: #fff;
  color: #0d3446;
  grid-area: header;
}

.main-nav-component {
  grid-area: nav;
}

main {
  background-color: #003355;
  grid-area: main;
}
</style>

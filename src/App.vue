<template>
  <div id='app'>
    <main-header></main-header>

    <main-nav></main-nav>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainNav from '@/components/MainNav'
// import { mapGetters } from 'vuex'

export default {
  name: 'app',
  created () {
    this.$store.dispatch('getTalkData')
  },
  components: {
    MainHeader,
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
  background-color: #003355;
  color: #fff;
  display: grid;
  font-family: 'Hind', sans-serif;
  font-size: 1rem;
  grid-template-rows: 100px auto;
  grid-template-columns: minmax(150px, 1fr) 9fr;
  grid-template-areas: 'header header'
                       'nav main';
}

.main-header {
  grid-area: header;
}

.main-nav-component {
  grid-area: nav;
}

main {
  grid-area: main;
}
</style>

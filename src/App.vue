<template>
  <div id='app'>
    <main-header></main-header>

    <main-nav></main-nav>

    <main>
      <!-- <router-view></router-view> -->
      <week-talk-distribution :chart-data='weekTalkDistributionData' :height='100' :options="{ legend: { display: false } }"></week-talk-distribution>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MainHeader from '@/components/MainHeader'
import MainNav from '@/components/MainNav'
import WeekTalkDistribution from '@/components/WeekTalkDistribution'

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'days'
    ]),
    weekTalkDistributionData () {
      return {
        labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [
              this.days['Monday'],
              this.days['Tuesday'],
              this.days['Wednesday'],
              this.days['Thursday'],
              this.days['Friday'],
              this.days['Saturday'],
              this.days['Sunday']
            ]
          }
        ]
      }
    }
  },
  created () {
    this.$store.dispatch('getTalkData')
  },
  components: {
    MainHeader,
    MainNav,
    WeekTalkDistribution
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

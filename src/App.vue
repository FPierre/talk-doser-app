<template>
  <div id='app'>
    <main-header></main-header>

    <main>
      <!-- <router-view></router-view> -->

      <h2>Mots écrits</h2>
      <p>{{ talkWordsCount }}</p>

      <h2>Distribution des conversations dans la semaine</h2>
      <week-talk-distribution :chart-data='weekTalkDistributionData'></week-talk-distribution>

      <h2>Distribution des conversations par personne</h2>
      <people-talk-distribution :chart-data='peopleTalkDistributionData'></people-talk-distribution>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MainHeader from '@/components/MainHeader'
import PeopleTalkDistribution from '@/components/PeopleTalkDistribution'
import WeekTalkDistribution from '@/components/WeekTalkDistribution'

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'days',
      'talkWordsCount',
      'peoplePseudo',
      'pronouncedWords'
    ]),
    peopleTalkDistributionData () {
      return {
        labels: this.peoplePseudo,
        datasets: [
          {
            data: this.pronouncedWords
          }
        ]
      }
    },
    weekTalkDistributionData () {
      return {
        labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
        datasets: [
          {
            label: 'Week talk distribution',
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
    PeopleTalkDistribution,
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
  background-color: #263238; /* blue-grey darken-4 */
  color: #f5f5f5; /* grey lighten-4 */
  display: grid;
  font-family: 'Hind', sans-serif;
  font-size: 1rem;
  grid-template-rows: 100px auto;
  /*grid-template-columns: minmax(150px, 1fr) 9fr;*/
  grid-template-areas: 'header'
                       'main';
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

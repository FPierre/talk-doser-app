<template>
  <div class='main-header'>
    <header>
      <h1>TalkDoser</h1>
      <span>Conversation entre {{ displayConcernedPeople }}</span>
    </header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'concernedPeople'
    ]),
    displayConcernedPeople () {
      return this.concernedPeople.join(', ')
    }
  }
}
</script>

<style scoped>
.main-header-component {

}

h1,
span {
  color: #ff6a38;
}
</style>

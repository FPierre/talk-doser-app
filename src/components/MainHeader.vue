<template>
  <div class='main-header'>
    <header>
      <h1>TalkDoser</h1>
      <span>Conversation entre {{ concernedPeople }}</span>
    </header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: mapGetters([
    'concernedPeople'
  ])
}
</script>

<style scoped>
.main-header-component {
  background-color: #fff;
  color: #0d3446;
}

h1,
span {
  color: #ff6a38;
}
</style>

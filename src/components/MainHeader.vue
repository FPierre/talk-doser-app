<template>
  <div class='main-header'>
    <header>
      <h1>TalkDoser</h1>
      <span>Conversation entre {{ displaypeoplePseudo }}</span>
    </header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'peoplePseudo'
    ]),
    displaypeoplePseudo () {
      return this.peoplePseudo.join(', ')
    }
  }
}
</script>

<style scoped>
.main-header-component {

}
</style>

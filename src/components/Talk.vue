<template>
  <div class='talk-component'>
    <h2>Conversation</h2>
    <ol id='talk'>
      <li v-for='{ line } in talk'>
        {{ line }}
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'talk'
    ])
  }
}
</script>

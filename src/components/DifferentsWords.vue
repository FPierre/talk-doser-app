<template>
  <div class='differents-words-component'>
    <h2>Nombre de mots différents trouvés</h2>
    <ol id='different-words'>
      <li v-for='(data, word) in words'>
        {{ word }} ({{ data.count }} fois)
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    words: 'getWords'
  })
}
</script>

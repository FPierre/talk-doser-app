<template>
  <div class='differents-words-component'>
    <h2>Nombre de mots différents trouvés</h2>
    <ol id='different-words'>
      <li v-for='{ word, count, people } in words'>
        {{ word }} ({{ count }}x)

        <span v-for='{ pseudo, line_numbers, count } in people'
              class='word'
              :data-line-number='line_numbers'
              :data-pseudo='pseudo'>
          {{ pseudo }} ({{ count }}x)
        </span>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'words'
    ])
  }
}
</script>

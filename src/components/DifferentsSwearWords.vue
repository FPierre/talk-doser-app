<template>
  <div class='differents-swear-words-component'>
    <ol>
      <li v-for='{ word, count, people } in swearWords'>
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
  computed: mapGetters(['swearWords'])
}
</script>

<style scoped>
</style>

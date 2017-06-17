<template>
  <div class='main-nav-component'>
    <nav>
      <router-link :to="{ name: 'Talk' }">Talk</router-link>
      <router-link :to="{ name: 'DifferentsWords' }">Differents Words</router-link>
    </nav>
  </div>
</template>

<style scoped>
.main-nav-component {
  background-color: #003355;
}

a {
  color: #fff;
  text-decoration: none;
}
</style>

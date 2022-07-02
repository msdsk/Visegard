<template>
  <div class="grid">
    <div v-for="country in countries">
      <img class="flag" :src="`/img/${country.id}.svg`" alt="">
      <h2 class="country-title">{{ country.id }}</h2>
      <p class="country-name">{{ country.name }}</p>
      <p class="country-type">{{ country.type }}</p>
    </div>
  </div>
</template>

<script>
import countries from './countries.csv'
export default {
  data() {
    return {
      countries: countries
    }
  }
}
</script>

<style>
body {
  background: #f0ece6;
  font-family: "Test Geograph";
}

.grid {
  display: grid;
  gap: 2em 1.5em;
  grid-template-columns: repeat(5, 1fr);
}

.country-title {
  font-size: 1.8em;
  margin: .5em 0 0;
  text-transform: uppercase;
}

/* .country-name {
  opacity: .5
} */

.country-type {
  font-size: .75em;
  margin-top: .3em;
  opacity: .5
}

p {
  margin: 0;
}
</style>

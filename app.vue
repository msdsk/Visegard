<template>
  <h1>Flags of Europe</h1>
  <div class="grid">
    <div v-for="country in countries">
      <img class="country-flag" :src="`/img/${country.id}.svg`" alt="">
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
@font-face {
  font-family: "Test Geograph";
  src: url("/font/test-geograph-regular.woff2") format("woff2");
}

@font-face {
  font-family: "Test Geograph";
  src: url("/font/test-geograph-bold.woff2") format("woff2");
  font-weight: bold;
}


body {
  font-family: "Test Geograph";
  font-size: .96vw;
}

h1 {
  font-size: 5em;
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

.country-flag {
  background: rgb(47, 47, 50);
  padding: .15em;
}

.country-type {
  font-size: .85em;
  margin-top: .3em;
  opacity: .5
}

p {
  margin: 0;
}
</style>

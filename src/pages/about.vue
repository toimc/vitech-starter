<template>
  <div class="about">
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router/auto'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>

<script setup lang="ts">
import ProgressSpinner from 'primevue/progressspinner'
</script>

<template>
  <ProgressSpinner
    class="loader"
  />
</template>

<style lang="scss" scoped>
@use '/assets/styles/colors';

.loader {
  --p-progressspinner-color-one: #{colors.$soft-beige};
  --p-progressspinner-color-two: #{colors.$soft-brown};
  --p-progressspinner-color-three: #{colors.$soft-green};
  --p-progressspinner-color-four: #{colors.$soft-green};
}
</style>

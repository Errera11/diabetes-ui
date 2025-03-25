<script setup lang="ts">
import Footer from '~/layouts/footer.vue'
import Header from '~/layouts/header.vue'
</script>

<template>
  <div class="pageContent">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@use 'assets/styles/media';

.pageContent {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>

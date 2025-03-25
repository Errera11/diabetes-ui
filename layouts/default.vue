<script setup lang="ts">
import Footer from '~/layouts/footer.vue'
import Header from '~/layouts/header.vue'
</script>

<template>
  <div class="pageContent">
    <Header />
    <main class="pageContent__main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@use 'assets/styles/media';

.pageContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 100%;

  &__main {
    flex: 1 0 100%;
    margin-top: 150px;
    height: 100%;

    @include media.media-tablet {
      margin-top: 75px;
    }
  }
}
</style>

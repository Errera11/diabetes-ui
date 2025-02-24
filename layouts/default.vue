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

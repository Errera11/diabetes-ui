<script setup lang="ts">
import Footer from '~/layouts/footer.vue'
import Header from '~/layouts/header.vue'
import { withoutLayoutRoutes } from '~/utils/routes'

const route = useRoute()
const isWithoutLayoutPage = computed(() => {
  if (!route.fullPath) return false
  return withoutLayoutRoutes.some(r => route.fullPath.includes(r))
})
</script>

<template>
  <div class="pageContent">
    <Header v-if="!isWithoutLayoutPage" />
    <slot />
    <Footer v-if="!isWithoutLayoutPage" />
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

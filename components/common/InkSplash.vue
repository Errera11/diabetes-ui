<script lang="ts" setup>
import { ref } from 'vue'

const isVisible = ref(true)

onMounted(() => setTimeout(() => isVisible.value = false, 3000))
</script>

<template>
  <teleport to="body">
    <div v-if="isVisible" class="splash" />
  </teleport>
</template>

<style lang="scss" scoped>
.splash {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;

  mask-image: url('/gif/ink.gif');
  mask-size: cover;
  mask-position: center;
}
</style>

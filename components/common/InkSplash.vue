<script lang="ts" setup>
import { ref } from 'vue'

const input = useTemplateRef<HTMLDivElement>('splash')
const isVisible = ref(true)

onMounted(() => {
  const imagePath = '/gif/ink.gif'
  const img = new Image()

  img.onload = () => {
    setTimeout(() => {
      input.value!.style.maskImage = `url(${imagePath})`
      input.value!.style.webkitMaskImage = `url(${imagePath})`
    })

    // setTimeout(() => isVisible.value = false, 4000)
  }

  img.src = imagePath
})
</script>

<template>
  <teleport to="body">
    <div v-if="isVisible" ref="splash" class="splash" />
  </teleport>
</template>

<style lang="scss" scoped>
@use 'assets/styles/colors';

.splash {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: colors.$light center center no-repeat;

  mask-size: cover;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-image: none;
}
</style>

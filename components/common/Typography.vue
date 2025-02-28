<script setup lang="ts">
interface IProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'span'
  color: 'light' | 'dark'
}

defineProps<IProps>()
</script>

<template>
  <component :is="variant" :class="color">
    <slot />
  </component>
</template>

<style lang="scss">
  @use "assets/styles/colors";

  h1 {
    font-size: 60px;
  }
  h2 {
    font-size: 40px;
  }
  h3 {
    font-size: 28px;
  }
  h4 {
    font-size: 20px;
  }
  span {
    font-size: 16px;
  }

  .light {
    color: colors.$light;
  }

  .dark {
    color: colors.$primary;
  }
</style>

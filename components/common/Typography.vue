<script setup lang="ts">
interface IProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'sub'
  color?: 'light' | 'dark'
  weight?: number
}

defineProps<IProps>()
</script>

<template>
  <component
    :is="variant" :class="color || 'dark'" :style="{
      'font-weight': weight,
    }"
  >
    <slot />
  </component>
</template>

<style lang="scss">
  @use 'assets/styles/colors';

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

sub {
  font-size: 14px;
  font-weight: 300;
}

.light {
  color: colors.$light;
}

.dark {
  color: colors.$primary;
}
</style>

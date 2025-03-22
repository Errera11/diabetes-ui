<script setup lang="ts">
interface IProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'sub'
  color?: 'light' | 'dark'
  weight?: number | string
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
@use 'assets/styles/media';

h1 {
  font-size: 60px;

  @include media.media-tablet {
    font-size: 45px;
  }
}
h2 {
  font-size: 40px;

  @include media.media-tablet {
    font-size: 30px;
  }
}
h3 {
  font-size: 28px;

  @include media.media-tablet {
    font-size: 20px;
  }
}
h4 {
  font-size: 20px;

  @include media.media-tablet {
    font-size: 15px;
  }
}
span {
  font-size: 16px;

  @include media.media-tablet {
    font-size: 14px;
  }
}

sub {
  font-size: 14px;
  font-weight: 300;

  @include media.media-tablet {
    font-size: 12px;
  }
}

.light {
  color: colors.$light;
}

.dark {
  color: colors.$primary;
}
</style>

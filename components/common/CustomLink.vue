<script setup lang="ts">
import Typography from '~/components/common/Typography.vue'

interface IProps {
  link: string
}

defineProps<IProps>()
</script>

<template>
  <NuxtLink :to="link" class="customLink">
    <Typography variant="span">
      <slot />
    </Typography>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@use 'assets/styles/colors';

.customLink {
  cursor: pointer;
  transition: color 0.4s;
  text-decoration: none;
  text-underline: none;

  &:active {
    color: colors.$light-brown;
  }
}
</style>

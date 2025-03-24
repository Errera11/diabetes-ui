<script setup lang="ts">
import CustomLink from '~/components/common/CustomLink.vue'

interface IProps {
  label: string
  link: string
}
defineProps<IProps>()
</script>

<template>
  <CustomLink :link="link">
    {{ label }}
  </CustomLink>
</template>

<style lang="scss" scoped>
@use 'assets/styles/colors';

.linkButton {
  color: colors.$primary;
  border: colors.$primary;
  font-family: 'Montserrat', 'sans-serif';
  font-weight: 500 !important;
}
</style>

<script setup lang="ts">
interface IProps {
  label: string
  link: string
}
defineProps<IProps>()
</script>

<template>
  <Button
    variant="link" :label="label" :href="link" :pt="{
      label: {
        class: 'linkButton',
      },
    }"
    c
  />
</template>

<style lang="scss">
@use "assets/styles/colors";

.linkButton {
    color: colors.$primary;
    border: colors.$primary;
    font-family: 'Montserrat', 'sans-serif';
    font-weight: 500 !important;
  }
</style>

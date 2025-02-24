<script setup lang="ts">
interface IProps {
  label: string
  link: string
}
defineProps<IProps>()
</script>

<template>
  <Button
    variant="link" :label="label" :href="link" rel="noopener" :pt="{
      label: {
        class: 'linkButton',
      },
    }"
    c
  />
</template>

<style>
  .linkButton {
    color: rgb(56, 56, 56);
    border: rgb(56, 56, 56);
    font-family: 'Montserrat', 'sans-serif';
    font-weight: 500 !important;
  }
</style>

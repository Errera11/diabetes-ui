<script setup lang="ts">
import CustomAccordion from '~/components/common/Form/CustomAccordion.vue'

const items = [
  { label: 'hey', content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent' },
  { label: 'hey', content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent' },
  { label: 'hey', content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent' },
  { label: 'hey', content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent' },
]
</script>

<template>
  <CustomAccordion :items="items" />
</template>

<style lang="scss" scoped>
</style>

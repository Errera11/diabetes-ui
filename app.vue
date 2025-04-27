<script lang="ts" setup>
import { useCurrentUserQuery } from '~/composables/useCurrentUserQuery'

useHead({
  title: 'Diabetes',
  meta: [
    { name: 'Main page', content: 'This app maintained with courage to help people discover diabetes at an early stage' },
  ],
})

useCurrentUserQuery()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

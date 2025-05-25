<script lang="ts" setup>
import CustomProgressSpinner from '~/components/common/CustomProgressSpinner.vue'
import { useCurrentUserQuery } from '~/composables/useCurrentUserQuery'

useHead({
  title: 'Diabetes',
  meta: [
    { name: 'Main page', content: 'This app maintained with courage to help people discover diabetes at an early stage' },
  ],
})

const { isPending } = useCurrentUserQuery()
</script>

<template>
  <NuxtLayout>
    <div v-if="isPending" class="spinner">
      <CustomProgressSpinner />
    </div>
    <NuxtPage v-else />
  </NuxtLayout>
</template>

<style scoped lang="scss">
.spinner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

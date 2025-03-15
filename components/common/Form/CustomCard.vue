<script setup lang="ts">
interface IProps {
  title: string
  description: string
}

defineProps<IProps>()
</script>

<template>
  <Card class="customCard">
    <template #title>
      <span class="title">{{ title }} <span class="pi pi-info-circle" /></span>
    </template>
    <template #content>
      <p>
        {{ description }}
      </p>
    </template>
  </Card>
</template>

<style lang="scss" scoped>
.customCard {
  border-radius: 20px;
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>

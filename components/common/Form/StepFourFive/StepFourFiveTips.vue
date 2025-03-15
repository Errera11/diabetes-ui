<script setup lang="ts">
import CustomCard from '~/components/common/Form/CustomCard.vue'

const items = {
  card: { title: 'Физическая активность', description: 'Недостаток физической активности значительно повышает вероятность развития диабета. Регулярные физические упражнения помогают контролировать уровень сахара в крови и поддерживать нормальный вес, улучшая чувствительность клеток к инсулину.' },
}
</script>

<template>
  <CustomCard :title="items.card.title" :description="items.card.description" />
</template>

<style lang="scss" scoped>
</style>

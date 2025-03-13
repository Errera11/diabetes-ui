<script setup lang="ts">
import CustomCard from '~/components/common/Form/CustomCard.vue'

const items = {
  card: {
    title: 'Почему эти данные важны?',
    description: 'Знание вашего артериального давления, уровня холестерина и состояния сердечно-сосудистой системы помогает точнее оценить состояние вашего здоровья и предложить эффективные рекомендации для улучшения самочувствия.',
  },
}
</script>

<template>
  <CustomCard :title="items.card.title" :description="items.card.description" />
</template>

<style lang="scss" scoped>

</style>

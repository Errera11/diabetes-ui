<script setup lang="ts">
const items = {
  card: {
    title: 'Почему эти данные важны?',
    description: 'Знание вашего артериального давления, уровня холестерина и состояния сердечно-сосудистой системы помогает точнее оценить состояние вашего здоровья и предложить эффективные рекомендации для улучшения самочувствия.',
  },
}
</script>

<template>
  <Card>
    <template #title>
      {{ items.card.title }}
    </template>
    <template #content>
      <p>
        {{ items.card.description }}
      </p>
    </template>
  </Card>
</template>

<style lang="scss" scoped>
</style>

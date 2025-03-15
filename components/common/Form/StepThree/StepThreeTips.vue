<script setup lang="ts">
import CustomAccordion from '~/components/common/Form/CustomAccordion.vue'
import CustomCard from '~/components/common/Form/CustomCard.vue'

const items = {
  card: { title: 'Физическое состояние', description: 'Недомогание — это общее ощущение плохого самочувствия, которое может проявляться в различных формах, таких как усталость, головная боль, головокружение, слабость, сухость во рту и другие симптомы. При диабете недомогание может быть связано с различными состояниями, как в случае с гипергликемией (высоким уровнем сахара в крови), так и с гипогликемией (низким уровнем сахара в крови).' },
  accordion: { label: 'Стресс и диабет', content: 'Стресс может влиять на уровень сахара в крови. В стрессовых ситуациях организм вырабатывает гормоны, такие как кортизол, которые могут повысить уровень сахара в крови. Это может вызывать дополнительные симптомы, такие как усталость и головную боль.' },
}
</script>

<template>
  <CustomCard :title="items.card.title" :description="items.card.description" />

  <CustomAccordion :items="[items.accordion]" />
</template>

<style lang="scss" scoped>
</style>

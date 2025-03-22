<script setup lang='ts'>
import Typography from '~/components/common/Typography.vue'

const blocks = [
  {
    header: 'Профилактика диабета',
    description: 'Основой профилактики является здоровый образ жизни: сбалансированное питание, физическая активность и регулярные медицинские осмотры.',
  },
  {
    header: 'Роль питания',
    description: 'Правильное питание — ключевой фактор в предотвращении диабета. Употребление продуктов с низким гликемическим индексом помогает контролировать уровень сахара в крови.',
  },
  {
    header: 'Физическая активность',
    description: 'Регулярные физические нагрузки помогают снизить вес, улучшить чувствительность клеток к инсулину и поддерживать нормальный уровень сахара в крови.',
  },

  {
    header: 'Контроль веса',
    description: 'Поддержание здорового веса способствует снижению риска развития диабета. Ожирение и избыточный вес — это прямые факторы, способствующие заболеванию.',
  },
  {
    header: 'Раннее выявление',
    description: 'Регулярные медицинские осмотры и тесты на уровень сахара в крови помогают своевременно выявить диабет или его предрасположенность.',
  },
  {
    header: 'Стресс и диабет',
    description: 'Постоянный стресс повышает уровень сахара в крови, что может привести к развитию диабета. Научитесь управлять стрессом с помощью медитации или расслабляющих упражнений.',
  },
]
</script>

<template>
  <div>
    <div class="infoBlock">
      <div class="infoBlock__table">
        <ul class="infoBlock__list">
          <li v-for="item in blocks" :key="item.header" class="infoBlock__listItem">
            <Typography variant="h4" color="dark">
              {{ item.header }}
            </Typography>
            <Typography variant="span" color="dark">
              {{ item.description }}
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'assets/styles/media';

.infoBlock {
  background: url('https://static.wixstatic.com/media/74f558_cd2f85e90b1943d99eff2be092a09b73~mv2.jpeg/v1/fill/w_980,h_822,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/74f558_cd2f85e90b1943d99eff2be092a09b73~mv2.jpeg')
    center center no-repeat fixed;
  background-size: cover;
  padding: 70px 0;
  overflow: clip;
  width: 100%;

  &__table {
    padding: 15px 20px;
    background: white;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1px;
    background: black;
    border: 1px solid black;
    max-width: 100%;

    @include media.media-laptop {
      grid-template-columns: 1fr 1fr;
    }

    @include media.media-tablet {
      grid-template-columns: 1fr;
    }
  }

  &__listItem {
    background: white;
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>

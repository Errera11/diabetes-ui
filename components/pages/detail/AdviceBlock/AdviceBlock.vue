<script lang="ts" setup>
import Typography from '~/components/common/Typography.vue'

const props = defineProps<IProps>()

const currentCase = computed(() => props.result.indexOf(Math.max(...props.result)))

interface IProps {
  result: [number, number, number]
}
const cases = [
  {
    title: 'Поздравляем! Ваши показатели находятся в пределах нормы.',
    description: 'На основе введенных данных, ваш риск развития диабета на данный момент минимален. Однако, важно продолжать следить за своим здоровьем, соблюдать сбалансированное питание и регулярно проходить медицинские осмотры.',
    advices: ['Сохраняйте здоровый образ жизни.', 'Регулярно проверяйте уровень сахара в крови, особенно если у вас есть семейная история диабета.', 'Умеренная физическая активность и сбалансированное питание помогут сохранить здоровье.'],
  },
  {
    title: 'Ваши показатели указывают на предиабет — промежуточное состояние между нормой и диабетом.',
    description: 'Предиабет означает, что ваш уровень сахара в крови выше нормы, но еще не достигает уровня, необходимого для диагноза диабет. Это состояние требует изменений в образе жизни, чтобы предотвратить развитие диабета.',
    advices: ['Обратитесь к врачу для проведения дополнительных анализов.', 'Внесите изменения в свой образ жизни: сбалансированное питание, физическая активность, снижение массы тела.', 'Регулярно проверяйте уровень сахара в крови.'],
  },
  {
    title: 'К сожалению, на основе введенных данных, вы находитесь в зоне риска для диагностики диабета.',
    description: 'Ваши результаты могут указывать на наличие диабета. Рекомендуется немедленно обратиться к врачу для дальнейших анализов и постановки диагноза.',
    advices: [
      'Срочно проконсультируйтесь с врачом.',
      'Следуйте рекомендациям медицинского специалиста для контроля уровня сахара в крови.',
      'Важно вовремя начать лечение, чтобы минимизировать риски для здоровья.',
    ],
  },
]

const title = computed(() => cases[currentCase.value]?.title)
const description = computed(() => cases[currentCase.value]?.description)
const advices = computed(() => cases[currentCase.value]?.advices)
</script>

<template>
  <div class="adviceBlock">
    <Typography variant="h3">
      {{ title }}
    </Typography>

    <Typography variant="span">
      {{ description }}
    </Typography>

    <div>
      <Typography variant="span" weight="800">
        Рекомендации:<br><br>
      </Typography>
      <div>
        <ul class="adviceBlock__list">
          <li v-for="advice in advices" :key="advice">
            <span class="pi pi-bolt" />{{ advice }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.adviceBlock {
  background: white;
  border-radius: 10px;
  padding: 30px;
  text-align: justify;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>

<script setup lang="ts">
import { useField } from 'vee-validate'

import RadioGroup from '~/components/common/Form/RadioGroup.vue'
import Typography from '~/components/common/Typography.vue'
import { stepFiveInputs } from '~/utils/validation/form-validation'

const options = [
  {
    value: '5',
    image: '/img/person.webp',
    label: 'Отличное',
  },
  {
    value: '12',
    image: '/img/headache.webp',
    label: 'Очень хорошее',
  },
  {
    value: '18',
    image: '/img/leg-pain.webp',
    label: 'Хорошее',
  },
  {
    value: '24',
    image: '/img/person-w-cold.webp',
    label: 'Удовлетворительное',
  },
  {
    value: '30',
    image: '/img/hurt-leg.webp',
    label: 'Плохое',
  },
]

const { value, errorMessage } = useField<string>(stepFiveInputs.genHealth)
</script>

<template>
  <div class="stepFive">
    <Typography variant="h3">
      Общее состояние здоровья
    </Typography>

    <Typography variant="sub">
      Как бы Вы оценили своё общее состояние здоровья по шкале от 1 до 5, где 1 — отличное, 2 — очень хорошее, 3 — хорошее, 4 — удовлетворительное, 5 — плохое?
    </Typography>

    <RadioGroup v-model="value" :options="options" :is-error="!!errorMessage" :error-message="errorMessage" />
  </div>
</template>

<style lang="scss" scoped>
.stepFive {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>

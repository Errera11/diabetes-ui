<script setup lang="ts">
import { useField } from 'vee-validate'

import RadioGroup from '~/components/common/Form/RadioGroup.vue'
import Typography from '~/components/common/Typography.vue'
import { stepFiveInputs } from '~/utils/validation/form-validation'
import { stepFiveQuestions } from '../../questions'

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
      {{ stepFiveQuestions.physHealthCheck }}
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

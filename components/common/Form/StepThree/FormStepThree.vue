<script setup lang="ts">
import { useField } from 'vee-validate'

import RadioGroupClassic from '~/components/common/Form/RadioGroupClassic.vue'
import Typography from '~/components/common/Typography.vue'
import { stepThreeInputs } from '~/utils/validation/form-validation'

const options = [
  {
    value: '5',
    label: 'До 5',
  },
  {
    value: '10',
    label: 'До 12',
  },
  {
    value: '15',
    label: 'До 18',
  },
  {
    value: '20',
    label: 'До 24',
  },
  {
    value: '25',
    label: 'До 30',
  },
  {
    value: '30',
    label: 'До 30',
  },
]

const { value, errorMessage } = useField<string>(stepThreeInputs.physHealth)
</script>

<template>
  <div class="stepThree">
    <Typography variant="h3">
      Физические показатели
    </Typography>

    <Typography variant="sub">
      Оцените своё физическое состояние за последние 30 дней: сколько дней вы ощущали недомогание, плохое самочувствие, обострения хронических заболеваний или вовсе перенесли травмы?
    </Typography>

    <RadioGroupClassic v-model="value" :options="options" :error-message="errorMessage" :is-error="!!errorMessage" :custom-sub="[5, 15, 25, 30]" />
  </div>
</template>

<style lang="scss" scoped>
.stepThree {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>

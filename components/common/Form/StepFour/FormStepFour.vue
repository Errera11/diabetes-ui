<script setup lang="ts">
import { useField } from 'vee-validate'

import RadioGroup from '~/components/common/Form/RadioGroup.vue'
import Typography from '~/components/common/Typography.vue'
import { stepFourInputs } from '~/utils/validation/form-validation'

const options = [
  {
    value: '5',
    image: '/img/popcorn.webp',
    label: 'Нет',
  },
  {
    value: '12',
    image: '/img/park-jog.webp',
    label: 'Да',
  },
]

const { value, errorMessage } = useField<string>(stepFourInputs.physActivity)
</script>

<template>
  <div class="stepFour">
    <Typography variant="h3">
      Физическая активность
    </Typography>

    <Typography variant="sub">
      Помимо работы, занимались ли вы физической активностью минимум 3-4 раза в неделю в течение последнего месяца?
    </Typography>

    <RadioGroup v-model="value" :options="options" :error-message="errorMessage" :is-error="!!errorMessage" />
  </div>
</template>

<style lang="scss" scoped>
.stepFour {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>

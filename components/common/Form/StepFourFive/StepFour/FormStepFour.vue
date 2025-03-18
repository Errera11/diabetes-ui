<script setup lang="ts">
import { useField } from 'vee-validate'

import RadioGroup from '~/components/common/Form/RadioGroup.vue'
import Typography from '~/components/common/Typography.vue'
import { stepFourInputs } from '~/utils/validation/form-validation'
import { stepFourQuestions } from '../../questions'

const options = [
  {
    value: false,
    image: '/img/popcorn.webp',
    label: 'Нет',
  },
  {
    value: true,
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
      {{ stepFourQuestions.physActivity }}
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

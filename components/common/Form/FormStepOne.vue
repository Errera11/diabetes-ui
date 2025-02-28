<script setup lang="ts">
import DatePicker from 'primevue/datepicker'
import FloatLabel from 'primevue/floatlabel'
import InputMask from 'primevue/inputmask'
import InputNumber from 'primevue/inputtext'
import { useField } from 'vee-validate'

import { stepOneInputs } from '~/utils/validation/form-validation'

const { value, errorMessage } = useField<string>(stepOneInputs.bloodPressure)
const { value: birthdate, errorMessage: bdError } = useField<Date>(stepOneInputs.birthdate)
const { value: height, errorMessage: heightError } = useField<string>(stepOneInputs.height)
</script>

<template>
  <div class="formStepOne">
    <FloatLabel variant="on">
      <InputNumber id="bloodPressure" v-model="value" :invalid="!!errorMessage" />
      <label for="bloodPressure">Давление</label>
    </FloatLabel>
    <Message v-if="errorMessage" severity="error" variant="simple" size="small">
      {{ errorMessage }}
    </Message>
    <FloatLabel>
      <InputMask id="height" v-model="height" mask="*.**м" auto-clear fluid />
      <label for="height">Рост</label>
    </FloatLabel>

    <FloatLabel variant="on">
      <DatePicker id="birthdate" v-model="birthdate" />
      <label for="birthdate">Ваша дата рождения</label>
    </FloatLabel>
  </div>
</template>

<style lang="scss" scoped>
.formStepOne {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>

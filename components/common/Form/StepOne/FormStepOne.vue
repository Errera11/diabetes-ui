<script setup lang="ts">
import { useField } from 'vee-validate'

import CustomDatePicker from '~/components/common/Inputs/CustomDatePicker.vue'
import CustomInput from '~/components/common/Inputs/CustomInput.vue'
import { stepOneInputs } from '~/utils/validation/form-validation'

const { value, errorMessage } = useField<string>(stepOneInputs.bloodPressure)
const { value: birthdate, errorMessage: bdError } = useField<Date>(stepOneInputs.birthdate)
const { value: height, errorMessage: heightError } = useField<string>(stepOneInputs.height)
</script>

<template>
  <div class="formStepOne">
    <CustomDatePicker v-model="birthdate" label="Ваша дата рождения" :error-message="bdError" />

    <CustomInput id="bloodPressure" v-model="value" label="Давление" :error-message="errorMessage" />

    <CustomInput id="height" v-model="height" label="Рост" mask="*.**м" :error-message="heightError" />
  </div>
</template>

<style lang="scss" scoped>
.formStepOne {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>

<script setup lang="ts">
import { useField } from 'vee-validate'

import { stepOneQuesitons } from '~/components/common/Form/questions'
import CustomDatePicker from '~/components/common/Inputs/CustomDatePicker.vue'
import CustomInput from '~/components/common/Inputs/CustomInput.vue'
import Typography from '~/components/common/Typography.vue'
import { stepOneInputs } from '~/utils/validation/form-validation'

const { value: birthdate, errorMessage: bdError } = useField<Date>(stepOneInputs.birthdate)
const { value: height, errorMessage: heightError } = useField<string>(stepOneInputs.height)
const { value: weight, errorMessage: weightError } = useField<string>(stepOneInputs.weight)
</script>

<template>
  <div class="formStepOne">
    <Typography variant="h3">
      Ваши персональные данные
    </Typography>

    <Typography variant="sub">
      Пожалуйста, заполните информацию, чтобы мы могли могли произвести точные вычисления
    </Typography>

    <CustomDatePicker v-model="birthdate" :label="stepOneQuesitons.birthdate" :error-message="bdError" />

    <div>
      <Divider class="formStepOne__divider" />

      <Typography variant="span" :weight="600" class="formStepOne__subtitile">
        Ваши антропометрические данные
      </Typography>

      <div class="formStepOne__buttonGroup">
        <CustomInput id="height" v-model="height" class="formStepOne__buttonGroupButton" :label="stepOneQuesitons.height" mask="*.** м" :error-message="heightError" />

        <CustomInput id="height" v-model="weight" class="formStepOne__buttonGroupButton" :label="stepOneQuesitons.weight" mask="99?9 кг" :error-message="weightError" />
      </div>
    </div>

    <div />
  </div>
</template>

<style lang="scss" scoped>
.formStepOne {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__subtitile {
    display: block;
    margin-bottom: 20px;
  }

  &__divider {
    margin-top: 0;
  }

  &__buttonGroup {
    display: flex;
    gap: 30px;
  }

  &__buttonGroupButton {
    flex: 1;
  }
}
</style>

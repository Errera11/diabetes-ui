<script setup lang="ts">
import { useField } from 'vee-validate'

import CustomSelectButton from '~/components/common/Form/CustomSelectButton.vue'
import CustomInput from '~/components/common/Inputs/CustomInput.vue'
import Typography from '~/components/common/Typography.vue'
import { stepTwoInputs } from '~/utils/validation/form-validation.js'

const { value, errorMessage } = useField<string>(stepTwoInputs.bloodPressure)
const { value: cholLevel, errorMessage: cholError } = useField<string>(stepTwoInputs.cholLevel)
const { value: diffWalk, errorMessage: walkError } = useField<boolean>(stepTwoInputs.diffWalk)
const { value: heartDisease, errorMessage: heartError } = useField<boolean>(stepTwoInputs.heartDisease)
</script>

<template>
  <div class="formStepTwo">
    <Typography variant="h3">
      Показатели здоровья
    </Typography>

    <Typography variant="sub">
      Информация о вашем артериальном давлении, холестерине и состоянии сердечно-сосудистой системы поможет лучше понять ваше самочувствие
    </Typography>

    <CustomInput id="height" v-model="cholLevel" mask="*.** ммоль/л" label="Уровень холестерина" :error-message="cholError" />

    <CustomInput id="bloodPressure" v-model="value" label="Давление" :error-message="errorMessage" />

    <CustomSelectButton v-model="heartDisease" label="Имеются ли у вас проблемы с сердцем?" :options="[{ name: 'Да', value: true }, { name: 'Нет', value: false }]" :error-message="heartError" label-description="йойо" />

    <CustomSelectButton v-model="diffWalk" label="Испытваете ли вы трудности во время ходьбы?" :options="[{ name: 'Да', value: true }, { name: 'Нет', value: false }]" :error-message="walkError" />
  </div>
</template>

<style lang="scss" scoped>
.formStepTwo {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>

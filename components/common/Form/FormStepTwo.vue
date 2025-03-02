<script setup lang="ts">
import { useField } from 'vee-validate'

import CustomSelectButton from '~/components/common/Form/CustomSelectButton.vue'
import CustomInput from '~/components/common/Inputs/CustomInput.vue'
import { stepTwoInputs } from '~/utils/validation/form-validation.js'

const { value: cholLevel, errorMessage: cholError } = useField<string>(stepTwoInputs.cholLevel)
const { value: diffWalk, errorMessage: walkError } = useField<boolean>(stepTwoInputs.diffWalk)
const { value: heartDisease, errorMessage: heartError } = useField<boolean>(stepTwoInputs.heartDisease)
</script>

<template>
  <div>
    <CustomInput id="height" v-model="cholLevel" mask="*.** ммоль/л" label="Уровень холестерина" :error-message="cholError" />

    <CustomSelectButton v-model="heartDisease" label="Имеются ли у вас проблемы с сердцем?" :options="[{ name: 'Да', value: true }, { name: 'Нет', value: false }]" :error-message="heartError" />

    <CustomSelectButton v-model="diffWalk" label="Испытваете ли вы трудности во время ходьбы?" :options="[{ name: 'Да', value: true }, { name: 'Нет', value: false }]" :error-message="walkError" />
  </div>
</template>

<style lang="scss" scoped>

</style>

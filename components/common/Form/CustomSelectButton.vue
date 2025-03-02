<script setup lang="ts">
import SelectButton from 'primevue/selectbutton'
import { defineModel } from 'vue'

import CustomErrorMessage from '~/components/common/Form/CustomErrorMessage.vue'

defineProps<IProps>()
const model = defineModel<boolean>()
interface IProps {
  options: { name: string, value: string | boolean }[]
  errorMessage: string | undefined
  label: string
}
</script>

<template>
  <div>
    <label>{{ label }}</label>

    <SelectButton v-model="model" :options="options" option-value="value" option-label="name" :invalid="!!errorMessage" />

    <CustomErrorMessage :error-message="errorMessage" />
  </div>
</template>

<style lang="scss" scoped>

</style>

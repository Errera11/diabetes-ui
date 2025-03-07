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
  <div class="customSelect">
    <label class="customSelect__label">{{ label }}</label>

    <SelectButton class="selectButton" v-model="model" :options="options" option-value="value" option-label="name" :invalid="!!errorMessage" />

    <CustomErrorMessage :error-message="errorMessage" class="customSelect__controls"/>
  </div>
</template>

<style lang="scss" scoped>
.customSelect {
  display: flex;
  flex-direction: column;

  &__label {
    margin-bottom: 8px;
  }
}

.selectButton {
  display: flex;
  --p-selectbutton-border-radius: 8px;

  & > * {
    flex: 1 0;
  }
}
</style>

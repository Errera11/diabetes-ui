<script setup lang="ts">
import SelectButton from 'primevue/selectbutton'
import { defineModel } from 'vue'

import CustomErrorMessage from '~/components/common/Form/CustomErrorMessage.vue'

interface IProps {
  options: { name: string, value: string | boolean }[]
  errorMessage: string | undefined
  label: string
  labelDescription?: string
}
defineProps<IProps>()
const model = defineModel<boolean>()
</script>

<template>
  <div class="customSelect">
    <span class="customSelect__labelWrapper">
      <label class="customSelect__label">{{ label }}</label>

      <span v-if="labelDescription" v-tooltip.top="labelDescription" class="pi pi-question-circle" style="cursor: pointer" />
    </span>

    <SelectButton v-model="model" class="selectButton" :options="options" option-value="value" option-label="name" :invalid="!!errorMessage" />

    <CustomErrorMessage :error-message="errorMessage" class="customSelect__controls" />
  </div>
</template>

<style lang="scss" scoped>
@use '/assets/styles/colors';

.customSelect {
  --p-togglebutton-checked-color: #{colors.$light};
  --p-togglebutton-checked-background: #{colors.$brown};
  display: flex;
  flex-direction: column;

  &__labelWrapper {
    display: flex;
    align-items: center;
    gap: 10px;
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

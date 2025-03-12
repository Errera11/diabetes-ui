<script setup lang="ts">
import { defineProps } from 'vue'

import CustomErrorMessage from '~/components/common/Form/CustomErrorMessage.vue'

interface IProps {
  id: string
  errorMessage?: string
  label?: string
  mask?: string
}

defineProps<IProps>()

const model = defineModel<string>()
</script>

<template>
  <div>
    <FloatLabel variant="on">
      <InputText
        v-if="!mask"
        :id="id"
        v-model="model"
        :invalid="!!errorMessage"
        class="customInput"
        fluid
      />

      <InputMask
        v-if="!!mask"
        :id="id"
        v-model="model"
        :mask="mask"
        :invalid="!!errorMessage"
        class="customInput"
        fluid
      />

      <label :for="id" class="label">{{ label }}</label>
    </FloatLabel>

    <CustomErrorMessage :error-message="errorMessage" />
  </div>
</template>

<style lang="scss" scoped>
@use 'assets/styles/colors';

.customInput {
  transition: all 0.2s;
  //border: 1px solid colors.$primary !important;
  border-radius: 8px;
  --p-inputtext-focus-ring-color: colors.$primary;
  height: 45px;
  width: 100%;
}

.label {
  --p-floatlabel-focus-color: colors.$primary;
}

.errorMessage {
  margin-top: 5px;
  --p-message-text-sm-font-size: 12px;
}
</style>

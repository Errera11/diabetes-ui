<script setup lang="ts">
import { defineProps } from 'vue'
import CustomErrorMessage from '~/components/common/Form/CustomErrorMessage.vue'

interface IProps {
  id: string
  errorMessage?: string
  label?: string
  mask?: string
  type?: 'text' | 'password'
}

defineProps<IProps>()

const model = defineModel<string>()
</script>

<template>
  <div>
    <FloatLabel variant="on">
      <InputText
        v-if="!mask"
        v-model="model"
        :invalid="!!errorMessage"
        class="customInput"
        fluid
        :type="type"
      />

      <InputMask
        :id="id"
        v-if="!!mask"
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
  border-radius: 8px;
  height: 45px;
  width: 100%;
  --p-inputtext-hover-border-color: #{colors.$light-brown};
  --p-inputtext-focus-border-color: #{colors.$brown};
  --p-inputtext-focus-ring-color: #{colors.$brown};
  --p-inputtext-focus-ring-shadow: none;
}

.label {
  --p-floatlabel-focus-color: #{colors.$primary};
}

.errorMessage {
  margin-top: 5px;
  --p-message-text-sm-font-size: 12px;
}
</style>

<script setup lang="ts">
import DatePicker from 'primevue/datepicker'
import FloatLabel from 'primevue/floatlabel'
import { defineProps } from 'vue'

interface IProps {
  errorMessage?: string
  label?: string
}
defineProps<IProps>()
const model = defineModel<Date>()
</script>

<template>
  <div>
    <InputGroup>
      <InputGroupAddon><span class="pi pi-calendar" /></InputGroupAddon>
      <FloatLabel variant="on">
        <DatePicker id="birthdate" v-model="model" class="customPicker" input-class="customPicker" :invalid="!!errorMessage" />
        <label for="birthdate" class="label">{{ label }}</label>
      </FloatLabel>
    </InputGroup>

    <Message v-if="errorMessage" severity="error" variant="simple" size="small" class="errorMessage">
      {{ errorMessage }}
    </Message>
  </div>
</template>

<style lang="scss" scoped>
@use 'assets/styles/colors';

.customPicker {
  --p-inputtext-focus-ring-color: colors.$primary !important;
  height: 45px;
  width: 100%;
  --p-inputtext-border-radius: 8px;
}

.label {
  --p-floatlabel-focus-color: colors.$primary;
}

.errorMessage {
  margin-top: 5px;
  --p-message-text-sm-font-size: 12px;
}
</style>

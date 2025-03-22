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
        <DatePicker id="birthdate" v-model="model" panel-class="pickerPanel" class="customPicker" :invalid="!!errorMessage" :max-date="new Date(new Date().setFullYear(new Date().getFullYear() - 18))" date-format="dd/mm/yy" />
        <label for="birthdate" class="label">{{ label }}</label>
      </FloatLabel>
    </InputGroup>

    <Message v-if="errorMessage" severity="error" variant="simple" size="small" class="errorMessage">
      {{ errorMessage }}
    </Message>
  </div>
</template>

<style lang="scss">
@use '/assets/styles/colors';

.pickerPanel {
  --p-datepicker-date-selected-background: #{colors.$brown};
  --p-datepicker-month-selected-background: #{colors.$brown};
  --p-datepicker-year-selected-background: #{colors.$brown};
}
</style>

<style lang="scss" scoped>
@use '/assets/styles/colors';

.customPicker {
  --p-inputtext-hover-border-color: #{colors.$brown};
  --p-inputtext-focus-border-color: #{colors.$brown};
  --p-inputtext-focus-ring-color: #{colors.$brown};
  --p-inputtext-focus-ring-shadow: none;
}

.label {
  --p-floatlabel-focus-color: colors.$primary;
}

.errorMessage {
  margin-top: 5px;
  --p-message-text-sm-font-size: 12px;
}
</style>

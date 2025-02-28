<script setup lang="ts">
import Button from 'primevue/button'
import { Form, useForm } from 'vee-validate'

import FormStepOne from '~/components/common/Form/FormStepOne.vue'
import FormLayout from '~/components/common/Form/layouts/FormLayout.vue'
import { stepOneSchema } from '~/utils/validation/form-validation'

const { currentStep, nextStep, prevStep } = useSteps({ totalSteps: 3 })

const currentValidationSchema = computed(() => {
  switch (currentStep.value) {
    case 1:
      return stepOneSchema
    default:
      return {}
  }
})

const { errors } = useForm()

function onSubmit(values) {
  console.log('Submitted with', values)
  console.log('errors', errors)

  if (!Object.keys(errors.value).length)
    nextStep()
}
</script>

<template>
  <FormLayout>
    <template #content>
      <Form :validation-schema="currentValidationSchema" :keep-values="true" @submit="onSubmit">
        <Transition>
          <FormStepOne v-show="currentStep === 1" />
        </Transition>

        <Button label="шмык" type="button" @click="prevStep" />
        <Button label="тык" type="submit" />
      </Form>
    </template>
  </FormLayout>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

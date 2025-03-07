<script setup lang="ts">
import { Form, useForm } from 'vee-validate'

import FormStepTwo from '~/components/common/Form/FormStepTwo.vue'
import FormLayout from '~/components/common/Form/layouts/FormLayout.vue'
import FormStepOne from '~/components/common/Form/StepOne/FormStepOne.vue'
import StepOneTips from '~/components/common/Form/StepOne/StepOneTips.vue'
import { stepFiveSchema, stepFourSchema, stepOneSchema, stepSixSchema, stepThreeSchema, stepTwoSchema } from '~/utils/validation/form-validation'

const { currentStep, nextStep, prevStep } = useSteps({ totalSteps: 6 })
provide('CURRENT_STEP', currentStep)

const currentValidationSchema = computed(() => {
  switch (currentStep.value) {
    case 1:
      return stepOneSchema
    case 2:
      return stepTwoSchema
    case 3:
      return stepThreeSchema
    case 4:
      return stepFourSchema
    case 5:
      return stepFiveSchema
    case 6:
      return stepSixSchema
    default:
      return {}
  }
})

const { errors, values } = useForm()

function onSubmit(values) {
  console.log('Submitted with', values)
  console.log('errors', errors)
  console.log('STEP', currentStep.value)
  if (!Object.keys(errors.value).length)
    nextStep()
}
</script>

<template>
  <div class="formContainer">
    <FormLayout :on-back="prevStep">
      <template #content>
        <Form id="form" :validation-schema="currentValidationSchema" :keep-values="true" style="position: relative" @submit="onSubmit">
          <Transition tag="div" component="div">
            <FormStepOne v-if="currentStep === 1" />
            <FormStepTwo v-else-if="currentStep === 2" />
          </Transition>
        </Form>
      </template>

      <template #tips>
        <div class="formContainer__tips">
          <Transition name="tips" style="position: absolute; width: 100%">
            <StepOneTips v-if="currentStep === 1" />
          </Transition>
        </div>
      </template>
    </FormLayout>
  </div>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
  position: static;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  position: absolute;
}

.tips-enter-active,
.tips-leave-active,
.tips-enter-to,
.tips-leave-from {
  transform: translateY(0);
  transition: all .2s ease-in-out;
  opacity: 1;
}

.tips-enter-from,
.tips-leave-to {
  transform: translateY(20px);
  transition: all 0.2s ease-in-out;
  opacity: 0;
}

.formContainer {
  background: rgba(139, 115, 85, 0.45);
  position: relative;

  &__tips {
    max-width: 100%;
  }

  &__controlBtns {
    margin-top: 40px;
  }
}
</style>

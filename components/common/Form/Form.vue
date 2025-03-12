<script setup lang="ts">
import type { IForm } from '~/utils/validation/form-validation'

import { useMutation } from '@tanstack/vue-query'
import { Form, useForm } from 'vee-validate'
import FormLayout from '~/components/common/Form/layouts/FormLayout.vue'
import FormStepFive from '~/components/common/Form/StepFive/FormStepFive.vue'
import FormStepFour from '~/components/common/Form/StepFour/FormStepFour.vue'
import FormStepOne from '~/components/common/Form/StepOne/FormStepOne.vue'
import StepOneTips from '~/components/common/Form/StepOne/StepOneTips.vue'
import FormStepThree from '~/components/common/Form/StepThree/FormStepThree.vue'
import FormStepTwo from '~/components/common/Form/StepTwo/FormStepTwo.vue'
import StepTwoTips from '~/components/common/Form/StepTwo/StepTwoTips.vue'
import { useSteps } from '~/composables/useSteps'
import {
  stepFiveSchema,
  stepFourSchema,
  stepOneSchema,
  stepThreeSchema,
  stepTwoSchema,
} from '~/utils/validation/form-validation'

const totalSteps = 5
const { currentStep, nextStep, prevStep, isLastStep } = useSteps({ totalSteps })
const formRef = useTemplateRef<HTMLElement | undefined>('form')
provide('CURRENT_STEP', currentStep)
provide('TOTAL_STEPS', totalSteps)

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
    default:
      return {}
  }
})

const { errors } = useForm<IForm>()
const config = useRuntimeConfig()
const { mutate, isPending } = useMutation({ mutationFn: async (data: IForm) => {
  const res = await fetch(`${config.public.MODEL_API_URL}/predict/`, {
    body: JSON.stringify({
      data,
    }),
    method: 'POST',
  })
  // console.log('res', res)

  return res
} })

let formVals: IForm = { } as IForm
function onSubmit(values: any) {
  formRef.value?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
  })
  // console.log('formVals', formVals)
  formVals = {
    ...formVals,
    ...values,
  }
  if (isLastStep.value) {
    // console.log('beforeMutate', {
    //   ...formVals,
    //   cholLevel: String(Number.parseFloat(formVals.cholLevel)),
    //   height: String(Number.parseFloat(formVals.height)),
    //   diffWalk: String(formVals.diffWalk ? 1 : 0),
    //   heartDisease: String(formVals.heartDisease ? 1 : 0),
    //   birthdate: new Date(formVals.birthdate).toISOString(),
    // })
    mutate({
      ...formVals,
      cholLevel: String(Number.parseFloat(formVals.cholLevel)),
      height: String(Number.parseInt(formVals.height)),
      diffWalk: String(formVals.diffWalk ? 1 : 0),
      heartDisease: String(formVals.heartDisease ? 1 : 0),
      birthdate: new Date(formVals.birthdate).toISOString(),
      weight: String(Number.parseFloat(formVals.weight)),
    })
    return
  }

  if (!Object.keys(errors.value).length)
    nextStep()
}
</script>

<template>
  <div ref="form" class="formContainer">
    <FormLayout :on-back="prevStep">
      <template #content>
        <Form id="form" :validation-schema="currentValidationSchema" :keep-values="true" style="position: relative" @submit="onSubmit">
          <Transition tag="div" component="div">
            <FormStepOne v-if="currentStep === 1" />
            <FormStepTwo v-else-if="currentStep === 2" />
            <FormStepThree v-else-if="currentStep === 3" />
            <FormStepFour v-else-if="currentStep === 4" />
            <FormStepFive v-else-if="currentStep === 5" />
          </Transition>
        </Form>
      </template>

      <template #tips>
        <Transition name="tips" style="width: 100%;">
          <StepOneTips v-if="currentStep === 1" />
          <StepTwoTips v-else-if="currentStep === 2" />
        </Transition>
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
  transition: all 0.2s ease-in-out;
  opacity: 1;
  position: static;
}

.tips-enter-from,
.tips-leave-to {
  transform: translateY(20px);
  transition: all 0.2s ease-in-out;
  opacity: 0;
  position: absolute;
}

.formContainer {
  position: relative;

  &__tips {
    max-width: 100%;
  }

  &__controlBtns {
    margin-top: 40px;
  }
}
</style>

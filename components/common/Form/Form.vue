<script setup lang="ts">
import type { IForm } from '~/utils/validation/form-validation'
import { Form, useForm } from 'vee-validate'
import { usePostForm } from '~/api/usePostForm'
import FormLayout from '~/components/common/Form/layouts/FormLayout.vue'
import FormStepFinal from '~/components/common/Form/StepFinal/FormStepFinal.vue'
import FormStepFourFive from '~/components/common/Form/StepFourFive/FormStepFourFive.vue'
import StepFourFiveTips from '~/components/common/Form/StepFourFive/StepFourFiveTips.vue'
import FormStepOne from '~/components/common/Form/StepOne/FormStepOne.vue'
import StepOneTips from '~/components/common/Form/StepOne/StepOneTips.vue'
import FormStepThree from '~/components/common/Form/StepThree/FormStepThree.vue'
import StepThreeTips from '~/components/common/Form/StepThree/StepThreeTips.vue'
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

const totalSteps = 6
const { currentStep, nextStep, prevStep } = useSteps({ totalSteps })
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

const store = useFormStore()
const { errors } = useForm<IForm>()

const { mutateAsync } = usePostForm()
let formVals: IForm = { } as IForm
function onSubmit(values: any) {
  formRef.value?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
  })

  formVals = {
    ...formVals,
    ...values,
  }
  if (currentStep.value === 5) {
    mutateAsync({
      ...formVals,
      cholLevel: String(Number.parseFloat(formVals.cholLevel)),
      height: String(Number.parseInt(formVals.height)),
      diffWalk: String(formVals.diffWalk ? 1 : 0),
      heartDisease: String(formVals.heartDisease ? 1 : 0),
      birthdate: new Date(formVals.birthdate).toISOString(),
      weight: String(Number.parseFloat(formVals.weight)),
      bloodPressure: String(Number.parseFloat(formVals.bloodPressure)),
    }).then((data) => {
      nextStep()

      store.setFormResult({
        result: data.prediction[0],
      })
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
            <FormStepFourFive v-else-if="[4, 5].includes(currentStep)" />
            <FormStepFinal v-else-if="currentStep === 6" />
          </Transition>
        </Form>
      </template>

      <template #tips>
        <Transition name="tips" style="width: 100%;">
          <StepOneTips v-if="currentStep === 1" />
          <StepTwoTips v-else-if="currentStep === 2" />
          <StepThreeTips v-else-if="currentStep === 3" />
          <StepFourFiveTips v-else-if="[4, 5].includes(currentStep!)" />
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
  transition: all 0.3s ease-in-out;
  opacity: 1;
  position: static;
}

.tips-enter-from,
.tips-leave-to {
  transform: translateY(80px);
  transition: all 0.5s ease-in-out;
  opacity: 0;
  position: absolute;
}

.formContainer {
  position: relative;
  min-height: 900px;

  &__tips {
    max-width: 100%;
  }

  &__controlBtns {
    margin-top: 40px;
  }
}
</style>

<script setup lang="ts">
import type { Ref } from 'vue'
import Button from 'primevue/button'
import ProgressSpinner from 'primevue/progressspinner'
import BackArrow from 'public/icons/back-arrow.svg'
import { computed, defineProps } from 'vue'

import Stepper from '~/components/common/Form/Stepper/Stepper.vue'
import Typography from '~/components/common/Typography.vue'
import { useFormStore } from '~/stores/formStore'

interface IProps {
  onBack: () => void
}
defineProps<IProps>()

const currentStep = inject<Ref<number>>('CURRENT_STEP')
const totalSteps = inject<number>('TOTAL_STEPS')
const isLastStep = inject<number>('IS_LAST_STEP')

const computedCurStep = computed(() => {
  if (currentStep?.value === 4 || currentStep?.value === 5) {
    return 4
  }
  return currentStep?.value
})

const store = useFormStore()
</script>

<template>
  <div class="formLayout">
    <Typography variant="h2" color="dark" class="formLayout__header">
      Расчет риска диабета
    </Typography>

    <div class="formLayout__content">
      <div class="formLayout__tips">
        <slot name="tips">
          here is tips
        </slot>
      </div>
      <div class="formLayout__formWrapper">
        <div v-if="store.isPending" class="formLayout__pendingState">
          <ProgressSpinner
            class="formLayout__loader"
          />
        </div>

        <Button
          v-if="currentStep!
            > 1" type="button" variant="text" class="formLayout__backBtn" @click="onBack"
        >
          <BackArrow />
          <span>Назад</span>
        </Button>

        <Stepper class="formLayout__stepper" :current-step="computedCurStep!" :total-steps="totalSteps! - 2" />

        <div class="formLayout__form">
          <slot name="content" />
        </div>

        <div class="formLayout__controlBtns">
          <Button v-if="!isLastStep" :loading="store.isPending" class="formLayout__nextBtn" label="Продолжить" type="submit" fluid form="form" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '/assets/styles/colors';
@use '/assets/styles/media';

.formLayout {
  padding: 100px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 35px;
  position: relative;

  @include media.media-tablet {
    padding: 100px 0;
  }

  &__stepper {
    margin-bottom: 15px;
  }

  &__controlBtns {
    width: 100% !important;
    margin-top: 20px;
  }

  &__backBtn {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    transition: all 0.2s;
    color: grey;
    background: none !important;
    --p-button-text-primary-color: #{colors.$primary};
    z-index: 10;
  }

  &__header {
    align-self: center;
  }

  &__content {
    display: flex;
    align-items: start;
    flex-direction: row;
    gap: 50px;
    width: 100%;
    position: relative;

    @include media.media-tablet {
      flex-direction: column;
    }
  }

  &__formWrapper {
    padding: 40px 35px;
    background: white;
    border-radius: 20px;
    flex: 1 0;
    position: relative;
    max-width: 60%;

    @include media.media-tablet {
      max-width: 100%;
    }
  }

  &__form {
    position: relative;
  }

  &__tips {
    flex: 1 0;
    max-width: 40%;
    width: 100%;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @include media.media-tablet {
      max-width: 100%;
      position: static;
    }
  }

  &__pendingState {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(250, 243, 224, 0.7);
    z-index: 111;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__loader {
    --p-progressspinner-color-one: #{colors.$soft-beige};
    --p-progressspinner-color-two: #{colors.$soft-brown};
    --p-progressspinner-color-three: #{colors.$soft-green};
    --p-progressspinner-color-four: #{colors.$soft-green};
  }
}
</style>

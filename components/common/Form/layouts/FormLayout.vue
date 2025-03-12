<script setup lang="ts">
import Button from 'primevue/button'
import BackArrow from 'public/icons/back-arrow.svg'
import { defineProps } from 'vue'

import Stepper from '~/components/common/Form/Stepper/Stepper.vue'
import Typography from '~/components/common/Typography.vue'

interface IProps {
  onBack: () => void
}
defineProps<IProps>()

const currentStep = inject<number>('CURRENT_STEP')
const totalSteps = inject<number>('TOTAL_STEPS')
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
        <Button v-if="currentStep > 1" label="шмык" type="button" variant="text" class="formLayout__backBtn" @click="onBack">
          <BackArrow />
          <span>Назад</span>
        </Button>

        <Stepper class="formLayout__stepper" :current-step="currentStep!" :total-steps="totalSteps!" />

        <div class="formLayout__form">
          <slot name="content" />
        </div>

        <div class="formLayout__controlBtns">
          <Button label="тык" type="submit" rounded fluid form="form" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use 'assets/styles/colors';

.formLayout {
  padding: 100px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 35px;
  position: relative;

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
    --p-button-text-primary-color: colors.$primary;
    z-index: 10;
  }

  &__header {
    align-self: center;
  }

  &__content {
    display: flex;
    align-items: start;
    gap: 50px;
    width: 100%;
    position: relative;
  }

  &__formWrapper {
    padding: 40px 35px;
    background: white;
    border-radius: 20px;
    flex: 1 0;
    position: relative;
    max-width: 60%;
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
  }
}
</style>

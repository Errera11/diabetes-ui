<script setup lang="ts">
import FormStepFive from '~/components/common/Form/StepFourFive/StepFive/FormStepFive.vue'
import FormStepFour from '~/components/common/Form/StepFourFive/StepFour/FormStepFour.vue'

const currentStep = inject<number>('CURRENT_STEP')
</script>

<template>
  <div class="finalStepsWrapper">
    <div class="finalStepsWrapper__bullets">
      <div
        class="finalStepsWrapper__bulletsItem" :class="{
          finalStepsWrapper__bulletsItem_active: currentStep === 4,
        }"
      />

      <div
        class="finalStepsWrapper__bulletsItem" :class="{
          finalStepsWrapper__bulletsItem_active: currentStep === 5,
        }"
      />
    </div>

    <Transition :name="currentStep === 5 ? 'finalStepsLeft' : 'finalStepsRight'">
      <FormStepFour v-if="currentStep === 4" />

      <FormStepFive v-else-if="currentStep === 5" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
@use '/assets/styles/colors';

.finalStepsWrapper {
  width: 100%;
  position: relative;
  padding: 5px;
  overflow: hidden;

  &__bullets {
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: center;
    margin-bottom: 15px;
  }

  &__bulletsItem {
    height: 3px;
    width: 25px;
    border-radius: 8px;
    background: colors.$light-brown;
    transition: all 1s;

    &_active {
      background: colors.$brown;
      width: 50px;
    }
  }
}

.finalStepsLeft-enter-active,
.finalStepsLeft-leave-active,
.finalStepsLeft-enter-to,
.finalStepsLeft-leave-from {
  position: static;
  transform: translateX(0);
  transition: all 0.35s ease-in-out;
  opacity: 1;
}

.finalStepsLeft-enter-from,
.finalStepsLeft-leave-to {
  position: absolute;
  transform: translateX(500px);
  opacity: 0;
}

.finalStepsRight-enter-active,
.finalStepsRight-leave-active,
.finalStepsRight-enter-to,
.finalStepsRight-leave-from {
  position: static;
  transform: translateX(0);
  transition: all 0.35s ease-in-out;
  opacity: 1;
}

.finalStepsRight-enter-from,
.finalStepsRight-leave-to {
  position: absolute;
  transform: translateX(-500px);
  opacity: 0;
}
</style>

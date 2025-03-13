<script setup lang="ts">
interface IProps {
  totalSteps: number
  currentStep: number
}

defineProps<IProps>()
</script>

<template>
  <div class="stepper">
    <div v-for="item in totalSteps" :key="item" class="stepper__item" :class="{ stepper_active: item < currentStep }" :style="{ width: `calc(100% / ${totalSteps})` }">
      <div class="stepper__bar" />

      <sub class="stepper__sub">{{ `Шаг ${item}` }}</sub>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.stepper {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;

  &__item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: relative;
  }

  &__bar {
    height: 4px;
    border-radius: 8px;
    background: black;
    width: 100%;
  }

  &__sub {
    font-weight: 300;
  }

  &__sub,
  &__bar {
    opacity: 0.2;
    transition: opacity 0.2s linear;
  }

  &_active {
    .stepper__bar,
    .stepper__sub {
      opacity: 1;
    }
  }
}
</style>

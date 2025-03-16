<script setup lang="ts">
import CustomErrorMessage from '~/components/common/Form/CustomErrorMessage.vue'

interface IProps {
  options: { value: string, label: string }[]
  isError: boolean
  errorMessage: string | undefined
  customSub: number[]
}

const { options } = defineProps<IProps>()

const length = options.length
const lowerLevelPivot = Math.ceil(length / 3)
const higherLevelPivot = Math.ceil(2 * length / 3)
const subtitle = [1, lowerLevelPivot, higherLevelPivot, length]

const model = defineModel<number | string>()
</script>

<template>
  <div class="radio-group">
    <div class="radio-group__btns">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="radio-item"
      >
        <input
          :id="option.value"
          v-model="model"
          name="myrad"
          type="radio"
          :value="option.value"
          class="radio-input"
        >

        <label
          tabindex="0"
          :for="option.value" class="radio-label" :class="{
            'radio-label_lowerLevel': lowerLevelPivot <= index && index < higherLevelPivot,
            'radio-label_higherLevel': higherLevelPivot <= index,
          }"
        />
      </div>
    </div>

    <div class="radio-group__sub">
      <span v-for="(item, idx) of customSub || subtitle" :key="item" class="radio-group__sub">
        <sub>{{ item }}</sub>
        <sub v-if="idx !== (customSub || subtitle).length - 1 ">-</sub>
      </span>
    </div>

    <CustomErrorMessage :error-message="errorMessage" />
  </div>
</template>

<style lang="scss" scoped>
$checkbox-color-1: rgba(192, 161, 76, 1);
$checkbox-color-2: rgba(163, 138, 69, 1);
$checkbox-color-3: rgba(123, 104, 50, 1);

.radio-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  &__btns {
    display: flex;
    gap: 10px;
    flex-wrap: nowrap;
    height: 55px;
    justify-content: center;
  }

  &__sub {
    display: flex;
    justify-content: center;
    gap: 40px;
  }
}

.radio-input {
  display: none;
}

.radio-item {
  display: flex;
  width: 45px;
  height: 45px;
}

.radio-label {
  display: flex;
  flex: 1 0;
  border-radius: 50%;
  border: 3px solid $checkbox-color-1;
  cursor: pointer;

  &__header {
    width: 100%;
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.radio-input:checked + .radio-label {
  background: $checkbox-color-1;
}

.radio-input:checked + .radio-label_lowerLevel {
  background: $checkbox-color-2;
}

.radio-input:checked + .radio-label_higherLevel {
  background: $checkbox-color-3;
}

.radio-label_lowerLevel {
  border-color: $checkbox-color-2;
}

.radio-label_higherLevel {
  border-color: $checkbox-color-3;
}
</style>

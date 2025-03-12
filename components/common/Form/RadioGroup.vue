<script setup lang="ts">
import CustomErrorMessage from '~/components/common/Form/CustomErrorMessage.vue'

interface IProps {
  options: { value: string, image: string, label: string }[]
  errorMessage: string | undefined
  isError: boolean
}

defineProps<IProps>()

const model = defineModel<number | string>()
</script>

<template>
  <div class="radio-group-wrapper">
    <div class="radio-group">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="radio-item"
      >
        <div v-if="model === option.value" class="radio-item__check">
          <span class="pi pi-check-circle radio-item__checkIcon" style="color: #007bff" />
        </div>

        <input
          :id="option.value"
          v-model="model"
          name="myrad"
          type="radio"
          :value="option.value"
          class="radio-input"
        >
        <label :for="option.value" class="radio-label">
          <div class="radio-label__header">
            <span>{{ option.label }}</span>
          </div>

          <div class="radio-image__wrapper">
            <img :src="option.image" alt="image" class="radio-image">
          </div>
        </label>
      </div>
    </div>

    <CustomErrorMessage
      :error-message="errorMessage"
    />
  </div>
</template>

<style lang="scss" scoped>
.radio-item {
  position: relative;

  &__check {
    z-index: 1;
    position: absolute;
    top: -6px;
    right: 12px;
    background-color: white;
  }
}

.radio-group-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.radio-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px 20px;
}

.radio-input {
  display: none;
}

.radio-label {
  cursor: pointer;
  text-align: center;
  position: relative;
  flex: 1 0 150px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
  margin: -2px;
  border: 2px solid transparent;
  border-radius: 10px;

  &__header {
    padding: 0 15px;
  }
}

.radio-image__wrapper {
  position: relative;
  height: 150px;
  width: 100%;
}

.radio-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.radio-input:checked + .radio-label {
  border-color: #007bff;
  transition: border-color 0.2s ease;
}
</style>

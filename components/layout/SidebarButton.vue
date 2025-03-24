<script setup lang="ts">
interface IProps {
  isActive: boolean
}
interface IEmits {
  onclick: () => void
}

defineProps<IProps>()
defineEmits<IEmits>()
</script>

<template>
  <button class="sidebarButton" :class="{ sidebarButton_active: isActive }" @click="$emit('onclick')">
    <div />
    <div />
    <div />
  </button>
</template>

<style lang="scss" scoped>
@use 'assets/styles/colors';

.sidebarButton {
  display: flex;
  flex-direction: column;
  gap: 4px;
  outline: none;
  background: none;
  border: none;
  cursor: pointer;

  & > div {
    width: 30px;
    height: 3px;
    background: colors.$primary;
    border-radius: 8px;
    transition:
      transform 0.3s ease-in-out,
      opacity 0.3s ease-in-out,
      width 0.3s ease-in-out;

    &:nth-child(1) {
      transform-origin: left top;
    }
    &:nth-child(2) {
      transform-origin: center center;
      opacity: 1;
    }
    &:nth-child(3) {
      transform-origin: left bottom;
    }
  }

  &_active {
    div:nth-child(1) {
      transform: rotate(30deg);
    }
    div:nth-child(2) {
      transform: rotate(-35deg);
      opacity: 0;
    }
    div:nth-child(3) {
      transform: rotate(-30deg);
    }
  }
}
</style>

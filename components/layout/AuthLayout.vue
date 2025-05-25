<script setup lang="ts">
</script>

<template>
  <div class="auth-layout">
    <div class="auth-layout__left-side-container">
      <div class="auth-layout__left-side">
        <slot name="left-side" />
      </div>
    </div>

    <div class="auth-layout__right-side-container">
      <div class="auth-layout__right-side">
        <slot name="header" />

        <div class="auth-layout__body">
          <slot name="body" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/colors.scss';
@use '@/assets/styles/media.scss';

.auth-layout {
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  min-height: 500px;

  @include media.media-tablet {
    flex-direction: column-reverse;
    margin: 20px;
  }

  &__left-side {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1 0;
    padding: 50px 30px;
    text-align: center;
  }

  &__right-side {
    padding: 50px 30px;
    flex: 1 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }

  &__left-side-container {
    display: flex;
    flex: 1 0;
    align-items: center;
    background: colors.$brown;
  }

  &__right-side-container {
    display: flex;
    flex: 1 0;
    align-items: center;
    background: white;
  }
}
</style>

<script setup lang="ts">
import Button from 'primevue/button'
import BackArrow from 'public/icons/back-arrow.svg'
import { defineProps } from 'vue'

import Typography from '~/components/common/Typography.vue'

interface IProps {
  onBack: () => void
}
defineProps<IProps>()

const currentStep = inject<number>('CURRENT_STEP')
</script>

<template>
  <div class="formLayout">
    <Typography variant="h2" color="dark" class="formLayout__header">
      Заголовок
    </Typography>

    <div class="formLayout__content">
      <div class="formLayout__tips">
        <slot name="tips">
          here is tips
        </slot>
      </div>
      <div class="formLayout__formWrapper">
        <div class="formLayout__form">
          <slot name="content" />
        </div>

        <div class="formLayout__controlBtns">
          <Button label="тык" type="submit" rounded fluid form="form" />
        </div>
      </div>
    </div>

    <Button v-if="currentStep > 1" label="шмык" type="button" variant="text" class="formLayout__backBtn" @click="onBack">
      <BackArrow />
      <span>Назад</span>
    </Button>
  </div>
</template>

<style lang="scss" scoped>
  @use 'assets/styles/colors';

  .formLayout {
    padding: 100px 90px;

    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
    gap: 35px;
    position: relative;

    &__controlBtns {
      width: 100% !important;
      margin-top: 20px;
    }

    &__backBtn {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      transition: all .2s;
      color: grey;
      background: none !important;
      --p-button-text-primary-color: colors.$primary;
    }

    &__header {
      align-self: start;
    }

    &__content {
      display: flex;
      gap: 50px;
      width: 100%;
      position: relative;
    }

    &__formWrapper {
      padding: 40px 100px;
      background: white;
      border-radius: 20px;
      flex: 1 0 60%;
      min-height: 40px;
    }

    &__form {
      min-height: 400px;
      position: relative;
    }

    &__tips {
      flex: 1 0 40%;
      max-width: 40%;
      width: 100%;
      position: relative;
    }
  }
</style>

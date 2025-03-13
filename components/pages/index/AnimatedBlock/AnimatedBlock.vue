<script setup lang="ts">
import Button from 'primevue/button'
import Arrow from 'public/icons/arrow.svg'

import Typography from '~/components/common/Typography.vue'

function onHerBtnClick() {
  const form = document.querySelector('#form')

  if (form) {
    form.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
  }
}
</script>

<template>
  <div>
    <div class="animatedBlock">
      <div class="animatedBlock__content">
        <Typography variant="h1" color="light">
          Предупредите осложнения диабета
        </Typography>

        <Typography variant="h4" color="light">
          Современные технологии и проверенные методы для контроля диабета
        </Typography>
      </div>

      <div class="animatedBlock__navigation">
        <Button class="animatedBlock__navigationButton" label="Попробовать" severity="primary" @click="onHerBtnClick" />

        <Arrow class="animatedBlock__arrow" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use 'assets/styles/colors';

.animatedBlock {
  width: 100%;
  height: max(700px);
  background: url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjFyMTF3eG83b2ZuYXR2cXppNDBiZ3FqcmNwZjNmdmhidHR0YWRvNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/321wKleotdr4puJIvk/giphy.gif')
    no-repeat center center fixed;
  background-size: cover;
  position: relative;

  &__content {
    padding: 30px 0;
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 290px;
    position: relative;
    gap: 30px;
    text-align: center;
  }

  &__navigation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    position: absolute;
    bottom: 10px;
  }

  &__arrow {
    bottom: 0;
    width: 25px !important;
    height: auto !important;
    transform: rotate(180deg);
    animation: bounce 2s infinite;

    path {
      stroke: colors.$light !important;
    }
  }

  .p-button {
    background: colors.$light;
    color: colors.$primary;
    border: none !important;
    outline: none;
    transition: all 0.2s;
    border-radius: 10px;

    --p-button-primary-hover-background: colors.$primary;
    --p-button-primary-active-background: none;
  }

  @keyframes bounce {
    from,
    to {
      transform: scale(1, 1) rotate(180deg);
    }
    25% {
      transform: scale(0.9, 1.1) rotate(180deg);
    }
    50% {
      transform: scale(1.1, 0.9) rotate(180deg);
    }
    75% {
      transform: scale(0.95, 1.05) rotate(180deg);
    }
  }
}
</style>

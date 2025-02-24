<script setup lang="ts">
// import '~/assets/styles/index.scss'
import LinkButton from '~/components/common/LinkButton.vue'

const links = [
  {
    label: 'Главная',
    link: '/',
  },
  {
    label: 'Подробнее',
    link: '/',
  },
  {
    label: 'Здоровье',
    link: '/',
  },
  {
    label: 'Здоровье',
    link: '/',
  },
]
</script>

<template>
  <header class="header">
    <div class="header__content largeContainer">
      <img class="header__logo" src="~/public/img/logo/logo.png" alt="logo">
      <ul class="header__links">
        <li v-for="item in links" :key="item.label">
          <LinkButton :link="item.link" :label="item.label" />
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    position: fixed;
    width: 100%;
    &__content {
      padding: 15px 0;
      display: flex;
      flex-direction: column;
      gap: 25px;
      align-items: center;
    }

    &__links {
      display: flex;
    }

    &__logo {
      height: 40px;
    }
  }
</style>

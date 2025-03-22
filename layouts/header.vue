<script setup lang="ts">
import LinkButton from '../components/common/LinkButton.vue'

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

const isHeaderVisible = ref(true)
let prevScroll = 0
function onScroll() {
  const scroll = window.scrollY
  if (prevScroll > scroll && window.scrollY < 1000) {
    isHeaderVisible.value = true
  }
  else if (scroll > 200) {
    isHeaderVisible.value = false
  }

  prevScroll = scroll
}
onMounted(() => {
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="header" :class="{ header_visible: isHeaderVisible }">
    <div class="header__content largeContainer">
      <img class="header__logo" src="/public/img/logo/logo.png" alt="logo">
      <ul class="header__links">
        <li v-for="item in links" :key="item.label">
          <LinkButton :link="item.link" :label="item.label" />
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @use '/assets/styles/media';

.header {
  position: fixed;
  width: 100%;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9);
  top: -200px;
  transition: top 0.3s ease-in-out;
  z-index: 100;

  &_visible {
    top: 0;
  }

  &__content {
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
  }

  &__links {
    display: flex;
    gap: 25px;

    @include media.media-tablet {
      gap: 5px;
    }
  }

  &__logo {
    height: 40px;
  }
}
</style>

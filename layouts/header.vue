<script setup lang="ts">
import { links } from '@/assets/header-links'
import MobileSidebar from '~/components/layout/MobileSidebar.vue'
import SidebarButton from '~/components/layout/SidebarButton.vue'
import { useMedia } from '~/composables/useMedia'
import LinkButton from '../components/common/LinkButton.vue'

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

const { isTablet } = useMedia()
const isMobileSidebar = ref(false)
</script>

<template>
  <header class="header" :class="{ header_visible: isHeaderVisible }">
    <div class="header__content largeContainer">
      <img class="header__logo" src="/public/img/logo/logo.png" alt="logo">

      <ul v-if="!isTablet" class="header__links">
        <li v-for="item in links" :key="item.label">
          <LinkButton :link="item.link" :label="item.label" />
        </li>
      </ul>

      <div class="header__sidebarBtn">
        <SidebarButton v-if="isTablet" :is-active="isMobileSidebar" @click="isMobileSidebar = !isMobileSidebar" />
      </div>
    </div>

    <MobileSidebar :is-open="isMobileSidebar" @onclose="isMobileSidebar = false" />
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

  &__sidebarBtn {
    position: absolute;
    z-index: 310;
    top: 35px;
    right: 25px;
  }

  &_visible {
    top: 0;
  }

  &__content {
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;

    @include media.media-tablet {
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      padding: 15px 20px;
    }
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

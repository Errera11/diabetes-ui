<script setup lang="ts">
import { links } from '@/assets/header-links'
import MobileSidebar from '~/components/layout/MobileSidebar.vue'
import SidebarButton from '~/components/layout/SidebarButton.vue'
import UserBadge from '~/components/layout/UserBadge.vue'
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

const isMobileSidebar = ref(false)
function toggleSidebar() {
  isMobileSidebar.value = !isMobileSidebar.value

  if (isMobileSidebar.value) {
    document.body.style.touchAction = 'none'
    document.body.style.overflow = 'hidden'
  }
  else {
    document.body.style.touchAction = ''
    document.body.style.overflow = ''
  }
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

      <div class="header__sidebarBtn">
        <SidebarButton :is-active="isMobileSidebar" @onclick="toggleSidebar" />
      </div>

      <div class="header__userbadge">
        <UserBadge />
      </div>
    </div>

    <MobileSidebar :is-open="isMobileSidebar" @onclose="toggleSidebar" />
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
    display: none;

    @include media.media-tablet {
      display: block;
    }
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
    justify-content: center;
    position: relative;

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
      display: none;
    }
  }

  &__logo {
    height: 40px;
  }

  &__userbadge {
    position: absolute;
    top: 50%;
    right: 25px;
    display: block;

    @include media.media-tablet {
      display: none;
    }
  }
}
</style>

<script lang="ts" setup>
import { links } from 'assets/header-links'
import CustomLink from '~/components/common/CustomLink.vue'

const props = defineProps<IProps>()
defineEmits<IEmtis>()

interface IEmtis {
  onclose: () => void
}
interface IProps {
  isOpen: boolean
}
</script>

<template>
  <teleport to="header">
    <Transition name="side">
      <nav v-if="isOpen" class="mobileSidebar">
        <div class="mobileSidebar__links">
          <ul class="mobileSidebar__linksList">
            <li v-for="item in links" :key="item.label">
              <CustomLink :link="item.link">
                {{ item.label }}
              </CustomLink>
            </li>
          </ul>
        </div>
      </nav>
    </Transition>

    <Transition name="overlay">
      <div v-if="isOpen" class="overlay" @click="$emit('onclose')" />
    </Transition>
  </teleport>
</template>

<style lang="scss" scoped>
@use 'assets/styles/colors';

.mobileSidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 80%;
  z-index: 300;
  background-color: colors.$light;

  &__links {
    margin-top: 200px;
    margin-left: 40px;
  }

  &__linksList {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

.overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 299;
  background-color: colors.$light;
  opacity: 0.5;
}

.overlay-enter-active,
.overlay-leave-active,
.overlay-enter-to,
.overlay-leave-from {
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.side-enter-active,
.side-leave-active,
.side-enter-to,
.side-leave-from {
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
}

.side-enter-from,
.side-leave-to {
  transform: translateX(300px);
}
</style>

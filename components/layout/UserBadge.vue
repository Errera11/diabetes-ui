<script setup lang="ts">
import Popover from 'primevue/popover'
import { ref } from 'vue'
import LinkButton from '~/components/common/LinkButton.vue'
import Typography from '~/components/common/Typography.vue'

import DoorIcon from '~/public/icons/door.svg'
import UserIcon from '~/public/icons/user.svg'
import {useLogoutMutation} from "~/composables/useUserLogoutMutation";

const user = useUserStore()

const badgeOptions = [{
  label: 'Профиль',
  link: 'profile',
}, {
  label: 'Личный кабинет',
  link: 'me',
}]

const popover = ref()
function toggle(event) {
  popover.value.toggle(event)
}

function onClick() {
  popover.value.hide()
}

const { mutate, isPending } = useLogoutMutation()
</script>

<template>
  <div class="user-badge">
    <div v-if="user.isAuth" class="user-badge__content" @click="toggle">
      <Popover ref="popover">
        <div class="user-badge__links" @click="onClick">
          <LinkButton v-for="item in badgeOptions" :label="item.label" :link="item.link" />
          <Button @click.stop="() => mutate()" severity="secondary" :loading="isPending">Выйти</Button>
        </div>
      </Popover>

      <Typography variant="span">
        {{ user.username }}
      </Typography>

      <UserIcon class="user-badge__user-icon" />
    </div>

    <div v-else class="user-badge__content">
      <LinkButton label="Войти" link="/signin" />

      <DoorIcon />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-badge {
  display: flex;

  &__links {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

  &__user-icon {
    height: 20px;
    width: 20px;
  }
}
</style>

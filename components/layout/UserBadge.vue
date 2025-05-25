<script setup lang="ts">
import { badgeOptions } from 'assets/header-links'
import Popover from 'primevue/popover'
import { ref } from 'vue'
import LinkButton from '~/components/common/LinkButton.vue'

import Typography from '~/components/common/Typography.vue'
import { useLogoutMutation } from '~/composables/useUserLogoutMutation'
import DoorIcon from '~/public/icons/door.svg'
import UserIcon from '~/public/icons/user.svg'

const user = useUserStore()

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
          <Button severity="secondary" :loading="isPending" @click.stop="() => mutate()">
            Выйти
          </Button>
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

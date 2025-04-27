<script setup lang="ts">
import UserIcon from '@/public/icons/user.svg'
import Typography from '~/components/common/Typography.vue'

const user = useUserStore()
</script>

<template>
  <div class="profile largeContainer">
    <div>
      <Typography variant="h2">
        {{ `Профиль ${user.username}` }}
      </Typography>
    </div>

    <div class="profile__info">
      <div class="profile__avatar">
        <UserIcon class="profile__avatar-icon" />

        {{ user.username }}
      </div>

      <div class="profile__details">
        <Card>
          <template #title>
            Имя пользователя
          </template>
          <template #content>
            <Typography variant="span">
              {{ user.username }}
            </Typography>
          </template>
        </Card>

        <Card>
          <template #title>
            Почтовый адрес
          </template>
          <template #content>
            <Typography variant="span">
              {{ user.email }}
            </Typography>
          </template>
        </Card>

        <Card>
          <template #title>
            Дата создания профиля
          </template>
          <template #content>
            <Typography variant="span">
              {{ new Date(user.createdAt) }}
            </Typography>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  margin-top: 150px;
  width: 100%;

  &__info {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  &__avatar-icon {
    height: 150px;
    width: 150px;
  }
}
</style>

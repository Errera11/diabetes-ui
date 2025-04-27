<script setup lang="ts">
import Typography from '~/components/common/Typography.vue'

const view = defineModel<boolean>()
</script>

<template>
  <Dialog v-model:visible="view" modal class="formError" :closable="true" :close-on-escape="true">
    <template #header>
      <Typography variant="h3">
        Произошла непредвиденная ошибка
      </Typography>
    </template>

    <Typography variant="span">
      Перезагрузите страница или попробуйте позже
    </Typography>
  </Dialog>
</template>

<style lang="scss" scoped>
.formError {
  display: flex;
  flex-direction: column;
}
</style>

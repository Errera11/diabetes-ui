<script setup lang="ts">
import Typography from '~/components/common/Typography.vue'
</script>

<template>
  <Dialog modal :visible="true" class="formError">
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

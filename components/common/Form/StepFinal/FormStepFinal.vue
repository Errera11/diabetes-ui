<script setup lang="ts">
import Typography from '~/components/common/Typography.vue'

const store = useFormStore()
</script>

<template>
  <div class="stepFinal">
    <Typography variant="h3">
      Ваши результаты
    </Typography>

    <div>{{ store.result }}</div>
  </div>
</template>

<style lang="scss" scoped>
.stepFinal {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>

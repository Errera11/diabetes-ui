<script setup lang="ts">
import { defineProps } from 'vue'

interface IProps {
  errorMessage: string | undefined
}

defineProps<IProps>()
</script>

<template>
  <Message v-if="errorMessage" severity="error" variant="simple" size="small" class="errorMessage">
    {{ errorMessage }}
  </Message>
</template>

<style lang="scss" scoped>
.errorMessage {
  margin-top: 5px;
  --p-message-text-sm-font-size: 12px;
}
</style>

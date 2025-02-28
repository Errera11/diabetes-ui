<script setup lang="ts">
</script>

<template>
  <div class="formLayout">
    <slot name="content" />
    <p>above is content</p>
  </div>
</template>

<style lang="scss" scoped>
  .formLayout {
    padding: 40px 20px;
    background: pink;
    border-radius: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

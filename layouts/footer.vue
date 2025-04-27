<script setup lang='ts'>
import Typography from '~/components/common/Typography.vue'
</script>

<template>
  <footer class="footer">
    <Typography variant="span" color="dark" class="powered">
      ©2025 by. Powered and secured
    </Typography>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  flex: 1 0 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  margin-top: auto;
}

.powered {
  margin-top: auto;
  margin-bottom: 10px;
}
</style>

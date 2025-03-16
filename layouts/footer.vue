<script setup lang='ts'>
import Typography from '~/components/common/Typography.vue'
</script>

<template>
  <footer class="footer">
    <Typography variant="span" color="dark" class="powered">
      ©2035 by me. Powered and secured
    </Typography>
  </footer>
</template>

<style lang="scss">
  .footer {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.powered {
  margin-top: auto;
  margin-bottom: 10px;
}
</style>

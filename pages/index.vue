<script setup lang="ts">
import AnimatedBlock from '../components/pages/index/AnimatedBlock/AnimatedBlock.vue'
import FormBlock from '../components/pages/index/FormBlock/FormBlock.vue'
import InfoBlock from '../components/pages/index/InfoBlock/InfoBlock.vue'
import TipsBlock from '../components/pages/index/TipsBlock/TipsBlock.vue'
</script>

<!-- https://ru.wix.com/website-template/view/html/2187?originUrl=https%3A%2F%2Fru.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fhealth-wellness%2F4&tpClick=view_button&esi=28bdc342-c2d1-4c46-90d1-efb5e6499308 -->
<template>
  <section class="animatedblock">
    <AnimatedBlock class="largeContainer" />
    <div class="overflowbg" />
  </section>
  <section class="tipblock">
    <TipsBlock class="largeContainer" />
  </section>
  <section class="infoblock">
    <InfoBlock class="largeContainer" />
  </section>
  <section class="formblock">
    <FormBlock class="largeContainer" />
  </section>
</template>

<style lang="scss">
@use '/assets/styles/colors';

:root {
  --page-margin: 50px;
}

.animatedblock {
  position: relative;
}

.infoblock {
  margin-top: var(--page-margin);
}

.overflowbg {
  background: colors.$brown;
  width: 100%;
  height: 250px;
  bottom: 0;
  position: absolute;
  z-index: -1;
}
.tipblock {
  background: colors.$brown;
  padding-top: 150px;
  padding-bottom: 100px;
  width: 100%;
}
.formblock {
  margin-top: var(--page-margin);
  background: colors.$light-brown;
}
</style>

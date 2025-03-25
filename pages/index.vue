<script setup lang="ts">
import AnimatedBlock from '~/components/pages/index/AnimatedBlock/AnimatedBlock.vue'
import FormBlock from '~/components/pages/index/FormBlock/FormBlock.vue'
import InfoBlock from '~/components/pages/index/InfoBlock/InfoBlock.vue'
import TipsBlock from '~/components/pages/index/TipsBlock/TipsBlock.vue'
</script>

<!-- https://ru.wix.com/website-template/view/html/2187?originUrl=https%3A%2F%2Fru.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fhealth-wellness%2F4&tpClick=view_button&esi=28bdc342-c2d1-4c46-90d1-efb5e6499308 -->
<template>
  <!--  <InkSplash /> -->

  <section class="animatedblock">
    <div class="largeContainer" style="height: 100%">
      <AnimatedBlock />
    </div>
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

<style lang="css" scoped>
.animatedblock {
  flex: 1 0 calc(100% - 150px);
}

@media screen and (max-width: 768px) {
  .animatedblock {
    flex: 1 0 calc(100% - 75px);
  }
}
</style>

<style lang="scss" scoped>
@use '/assets/styles/colors';
@use '/assets/styles/media';

$page-margin: 50px;

.animatedblock {
  position: relative;
  margin-top: 150px;

  @include media.media-tablet {
    margin-top: 75px;
  }
}

.infoblock {
  margin-top: $page-margin;
}
.tipblock {
  background: colors.$brown;
  padding-top: 150px;
  padding-bottom: 100px;
  width: 100%;
}
.formblock {
  margin-top: $page-margin;
  background: colors.$light-brown;
}

.overflowbg {
  background: colors.$brown;
  width: 100%;
  height: 250px;
  left: 0;
  bottom: 0;
  position: absolute;
  z-index: -1;
}
</style>

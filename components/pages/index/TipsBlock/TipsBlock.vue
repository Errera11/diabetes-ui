<script setup lang="ts">
import Divider from 'primevue/divider'
import LeafIcon from 'public/icons/leaf.svg'
import { SwiperSlide } from 'swiper/vue'

import Typography from '~/components/common/Typography.vue'

import 'swiper/swiper-bundle.css'

const tips = [
  {
    header: 'Testimonials',
    description: 'ccccccccccccccccccccccccccccccccccccur services. Let your customers review you and tell their friends how great you are',
  },
  {
    header: 'qqqqqqqqqqqqqqqq',
    description: 'wwwwwwwwwwwwwwwwwwwwwwwservices. Let your customers review you and tell their friends how great you are',
  },
  {
    header: 'aaaaaaaaaaaaaaaaaaaa',
    description: 'zffffffffffffffffffffffff tell their friends how great you are',
  },
]
const containerRef = ref(null)
const slides = ref(tips)
useSwiper(containerRef, {
  effect: 'slide',
  loop: true,
  pagination: {
    type: 'bullets',
    enabled: true,
  },
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
})
</script>

<template>
  <div>
    <div class="tips">
      <ClientOnly>
        <swiper-container ref="containerRef" :init="false" class="swiper">
          <SwiperSlide
            v-for="(slide, idx) in slides"
            :key="idx"
            class="swiper__slide"
          >
            <div class="swiper__content">
              <div class="swiper__contentHeader">
                <Typography variant="h3" color="dark">
                  {{ slide.header }}
                </Typography>

                <Divider class="swiper__contentSeparator" />
              </div>

              <div class="swiper__contentDescription">
                <Typography variant="span" color="dark">
                  {{ slide.description }}
                </Typography>
              </div>
            </div>
          </SwiperSlide>
        </swiper-container>
      </ClientOnly>

      <LeafIcon class="tips__leaf" />
    </div>
  </div>
</template>

<style lang="scss">
@use 'assets/styles/colors';

.tips {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  padding: 20px 0;
  position: relative;

  &__leaf {
    width: 90px;
    height: auto;
    position: absolute;
    left: -38px;
    top: -38px;
  }
}

.swiper {
  cursor: grab;

  &::part(bullet), &::part(bullet-active) {
    height: 6px;
    overflow: hidden;
    background: colors.$primary;
  }
  &::part(bullet) {
    width: 10px;
    border-radius: 40%;
    transition: width .2s;
  }
  &::part(bullet-active) {
    width: 18px;
    transition: width .2s;
    background-color: colors.$primary;
    border-radius: 35%;
  }
  &::part(pagination) {
    position: static;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__contentSeparator {
    &:before {
      border-block-start: 1px solid colors.$primary !important;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 30px;
    padding: 30px 20px;
    max-width: 800px;
    margin: 0 auto;
  }

  &__contentDescription {
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>

<script lang="ts" setup>
import CustomLink from '~/components/common/CustomLink.vue'
import Typography from '~/components/common/Typography.vue'
import AdviceBlock from '~/components/pages/detail/AdviceBlock/AdviceBlock.vue'
import ChartBlock from '~/components/pages/detail/ChartBlock/ChartBlock.vue'
import QuesitonBlock from '~/components/pages/detail/QuesitonBlock/QuesitonBlock.vue'

const store = useFormStore()
</script>

<template>
  <div class="largeContainer detailPageWrapper headerOffset">
    <Dialog :visible="!store.genHealth" modal :closable="false">
      <template #header>
        <Typography variant="h3">
          Произошла ошибка
        </Typography>
      </template>

      <CustomLink link="/">
        На главную
      </CustomLink>
    </Dialog>

    <div v-if="store.genHealth" class="detailPage">
      <div class="detailPage__left">
        <section>
          <QuesitonBlock />
        </section>
      </div>

      <div class="detailPage__right">
        <section>
          <ChartBlock :result="store.result" />
        </section>

        <section>
          <AdviceBlock :result="store.result" />
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'assets/styles/media';

.detailPageWrapper {
  background: rgb(196, 182, 159);
}

.detailPage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 40px 0;

  @include media.media-tablet {
    grid-template-columns: 1fr;
  }

  &__right {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>

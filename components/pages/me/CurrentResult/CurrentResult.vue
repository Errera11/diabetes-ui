<script setup lang="ts">
import type { IPostFormResponse } from '~/composables/usePostForm'
import type { OmittedForm } from '~/utils/question'
import Card from 'primevue/card'
import Fieldset from 'primevue/fieldset'
import AdviceBlock from '~/components/pages/detail/AdviceBlock/AdviceBlock.vue'
import ChartBlock from '~/components/pages/detail/ChartBlock/ChartBlock.vue'
import { getQna } from '~/utils/question'

interface IProps {
  result?: IPostFormResponse
}
const props = defineProps<IProps>()
const qnaList = computed(() => {
  return Object.keys(props?.result || {}).map((k) => {
    return getQna(k as any, props?.result?.[k as keyof OmittedForm] as any)
  }).filter(Boolean)
})
</script>

<template>
  <div>
    <Card v-if="result?.result" style="border-width: 5px">
      <template #content>
        <Fieldset legend="Последний результат">
          <div>
            <div class="details">
              <div class="details__left">
                <div>
                  <p v-for="(item) in qnaList" :key="item?.question">
                    <span>{{ item?.question }}: </span>
                    <span style="text-decoration: underline">
                      {{ item?.answer }}
                    </span>
                    <br />
                  </p>
                </div>
              </div>
              <Divider layout="vertical" />
              <div class="details__right">
                <ChartBlock :result="result.result" />
              </div>
            </div>

            <div>
              <Divider />

              <AdviceBlock :result="result.result" />
            </div>
          </div>
        </Fieldset>
      </template>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
.details {
  display: flex;

  &__left {
    flex: 1 0;
  }

  &__right {
    flex: 1 0;
  }
}
</style>

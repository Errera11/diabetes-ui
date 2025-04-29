<script setup lang="ts">
import CustomProgressSpinner from '~/components/common/CustomProgressSpinner.vue'
import ChartAccordion from '~/components/common/Form/ChartAccordion.vue'

import Typography from '~/components/common/Typography.vue'
import CurrentResult from '~/components/pages/me/CurrentResult/CurrentResult.vue'
import PredictionBlock from '~/components/pages/me/PredictionBlock/PredictionBlock.vue'
import { useDeletePredictionMutation } from '~/composables/useDeletePredictionMutation'
import { useUserPredictionQuery } from '~/composables/useUserPredictionQuery'
import { useUserStore } from '~/stores/userStore'

const user = useUserStore()
const { data, isPending } = useUserPredictionQuery({ enabled: !!user.id })
const { mutateAsync } = useDeletePredictionMutation()

function formatDate(dateString) {
  const dateObject = new Date(dateString)

  const utcTimestamp = Date.UTC(
    dateObject.getUTCFullYear(),
    dateObject.getUTCMonth(),
    dateObject.getUTCDate(),
    dateObject.getUTCHours(),
    dateObject.getUTCMinutes(),
    dateObject.getUTCSeconds(),
  )

  return utcTimestamp
}
const calcBmi = (weight, height) => Number((weight / height ** 2).toFixed(2))
const lastPrediction = computed(() => {
  if (!isPending.value && data.value) {
    return data.value?.slice(-1)[0]
  }
  return undefined
})
const cholTrend = computed(() => {
  if (!isPending.value && data.value) {
    return data.value?.map(r => [formatDate(r.createdAt), r.cholLevel])
  }
  return undefined
})
const bloodPressureTrend = computed(() => {
  if (!isPending.value && data.value) {
    return data.value?.map(r => [formatDate(r.createdAt), r.bloodPressure])
  }
  return undefined
})
const bmiTrend = computed(() => {
  if (!isPending.value && data.value) {
    return data.value?.map(r => [formatDate(r.createdAt), calcBmi(r.weight, r.height)])
  }
  return undefined
})

const cholSeries = computed(() => ({
  name: 'Тренд уровня холестерина',
  data: cholTrend.value,
}))
const cholProps = {
  xLegendTitle: 'Время',
  yLegendTitle: 'Уровень холестерина',
  colors: ['rgb(160, 130, 100)'],
}
const bloodPressureSeries = computed(() => ({
  name: 'Тренд кровяного давления',
  data: bloodPressureTrend.value,
}))
const bloodPressureProps = {
  xLegendTitle: 'Время',
  yLegendTitle: 'Уровень кровяного давления',
  colors: ['rgb(220, 200, 170)'],
}
const bmiSeries = computed(() => ({
  name: 'Тренд индекса массы тела',
  data: bmiTrend.value,
}))
const bmiProps = {
  xLegendTitle: 'Время',
  yLegendTitle: 'Индекс массы тела',
  colors: ['rgb(0, 128, 128)'],
}
const diseaseSeries = computed(() => {
  if (!isPending.value && data.value) {
    const h = data.value?.map(r => [formatDate(r.createdAt), r.result[0]])
    const pd = data.value?.map(r => [formatDate(r.createdAt), r.result[1]])
    const d = data.value?.map(r => [formatDate(r.createdAt), r.result[2]])

    return [
      {
        name: 'Отсутствие диабета',
        data: h,
      },
      {
        name: 'Риск предиабета',
        data: pd,
      },
      {
        name: 'Риск диабета',
        data: d,
      },
    ]
  }
  return undefined
})
const diseaseProps = {
  xLegendTitle: 'Время',
  yLegendTitle: 'Риск болезни',
  colors: ['rgb(104, 128, 94)', 'rgb(211, 184, 140)', 'rgb(145, 96, 75)'],
}

function handleDeletePrediction(id: number) {
  mutateAsync(id)
}
</script>

<template>
  <Toast />

  <Transition>
    <div v-if="isPending || !user.id" class="spinner">
      <CustomProgressSpinner />
    </div>

    <div v-else class="me-page largeContainer">
      <div>
        <Typography variant="h3">
          Результаты предсказаний
        </Typography>
        <Typography variant="sub">
          На этой странице можно увидеть результаты ваших запросов
        </Typography>
      </div>

      <CurrentResult :result="lastPrediction!" />

      <ChartAccordion v-bind="cholProps" label="Динамика уровня холестерина" :series="[cholSeries!]" />

      <ChartAccordion v-bind="bloodPressureProps" label="Динамика кровяного давления" :series="[bloodPressureSeries!]" />

      <ChartAccordion v-bind="bmiProps" label="Индекс массы тела" :series="[bmiSeries!]" />

      <ChartAccordion v-bind="diseaseProps" label="Риск диабета" :series="diseaseSeries" type="spline" />

      <Divider />

      <PredictionBlock :predictions="data!" @delete="handleDeletePrediction" />
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.spinner {
  margin-top: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.me-page {
  margin-top: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
}
</style>

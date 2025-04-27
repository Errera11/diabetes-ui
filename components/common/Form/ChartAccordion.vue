<script setup lang="ts">
import { defineProps } from 'vue'

type timeRangeMode = 'month' | 'week' | 'year'
// interface IEmits {
//   timeRange: [range: timeRangeMode, id: string]
// }
interface IProps {
  type?: string
  id: string
  label: string
  colors?: string[]
  text?: string
  xLegendTitle?: string
  yLegendTitle?: string
  series: { name: string, data: [string, number][] }[]
}
const props = withDefaults(defineProps<IProps>(), {
  colors: () => [
    'rgb(104, 128, 94)',
    'rgb(211, 184, 140)',
    'rgb(145, 96, 75)',
  ],
  text: 'Результаты',
  xLegendTitle: 'DistrX',
  yLegendTitle: 'DistrY',
  type: 'area',
})
const curTimeRange = ref({
  week: true,
  month: false,
  year: false,
})

const sortedSeries = computed(() => {
  type SortArgType = IProps['series'][0]['data'][0]
  const sortFn = (a: SortArgType, b: SortArgType) => Date.parse(b[0]) - Date.parse(a[0])
  const sortedByDateSeries = props.series.map(arr => ({ ...arr, data: arr.data.sort(sortFn) }))

  const now = new Date()
  if (curTimeRange.value.year) {
    const thisYear = new Date(now.getFullYear(), 0, 1)
    return sortedByDateSeries.map(arr => ({ ...arr, data: arr.data.filter(s => thisYear < new Date(s[0])) }))
  }
  else if (curTimeRange.value.month) {
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    return sortedByDateSeries.map(arr => ({ ...arr, data: arr.data.filter(s => thisMonth < new Date(s[0])) }))
  }
  else {
    const thisWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7)
    return sortedByDateSeries.map(arr => ({ ...arr, data: arr.data.filter(s => thisWeek < new Date(s[0])) }))
  }
})
const chartOptions = computed(() => ({
  chart: {
    type: props.type,
  },
  title: {
    text: props.text,
  },
  xAxis: {
    type: 'datetime',
    labels: {
      format: '{value:%d.%m.%Y}',
    },
    title: {
      text: props.xLegendTitle,
    },
  },
  yAxis: {
    title: {
      text: props.yLegendTitle,
    },
  },
  series: sortedSeries.value,
  colors: props.colors,
  // tooltip: {
  //   pointFormat: '<b>{point.percentage:.1f}%</b>',
  // },
  credits: {
    enabled: false,
  },
}))

function handleControlButton(mode: timeRangeMode) {
  if (mode === 'month') {
    curTimeRange.value = {
      week: false,
      month: true,
      year: false,
    }
  }
  else if (mode === 'year') {
    curTimeRange.value = {
      week: false,
      month: false,
      year: true,
    }
  }
  else {
    curTimeRange.value = {
      week: true,
      month: false,
      year: false,
    }
  }
}
</script>

<template>
  <div class="customAccordionWrapper">
    <Accordion
      :value="1" class="customAccordion"
    >
      <AccordionPanel :value="-1">
        <AccordionHeader class="customAccordion__header">
          {{ label }}
        </AccordionHeader>
        <AccordionContent>
          <div class="customAccordion__controls">
            <Button
              severity="secondary" :class="{
                'customAccordion__control-button': curTimeRange.week,
              }" @click="handleControlButton('week')"
            >
              Неделя
            </Button>
            <Button
              severity="secondary" :class="{
                'customAccordion__control-button': curTimeRange.month,
              }" @click="handleControlButton('month')"
            >
              Месяц
            </Button>
            <Button
              severity="secondary" :class="{
                'customAccordion__control-button': curTimeRange.year,
              }" @click="handleControlButton('year')"
            >
              Год
            </Button>
          </div>
          <slot name="chart">
            <highchart :options="chartOptions" />
          </slot>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/colors';

.customAccordionWrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  word-wrap: break-word;
}
.customAccordion {
  border-radius: 20px;
  overflow: hidden;
  border: none !important;
  --p-accordion-panel-border-width: 0px !important;
  --p-accordion-header-border-width: 0px !important;
  --p-accordion-header-first-border-width: 0px !important;
  --p-accordion-content-border-width: 0px !important;

  &__header {
    height: 35px;
    font-size: 18px;
  }

  &__controls {
    display: flex;
    gap: 5px;
  }

  &__control-button {
    background: colors.$brown;
    color: white;
  }
}
</style>

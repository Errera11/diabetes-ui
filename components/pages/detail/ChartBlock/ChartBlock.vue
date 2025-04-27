<script setup lang="ts">
interface IProps {
  result: number[]
}
const props = defineProps<IProps>()

const chartOptions = computed(() => ({
  chart: {
    type: 'pie',
  },
  title: {
    text: 'Результаты',
  },
  plotOptions: {
    pie: {
      innerSize: '20%',
      depth: 45,
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.percentage:.1f}%',
      },
    },
  },
  series: [
    {
      name: 'Distribution',
      data: [
        { name: 'Отсутствие болезни', y: props.result[0] },
        { name: 'Предиабет', y: props.result[1] },
        { name: 'Диабет', y: props.result[2] },
      ],
    },
  ],
  colors: [
    'rgb(104, 128, 94)',
    'rgb(211, 184, 140)',
    'rgb(145, 96, 75)',
  ],
  tooltip: {
    pointFormat: '<b>{point.percentage:.1f}%</b>', // Tooltip format
  },
  credits: {
    enabled: false,
  },
}))
</script>

<template>
  <div class="chartBlock">
    <highchart :options="chartOptions" type="doughnut" class="chartBlock__chart" />
  </div>
</template>

<style lang="scss" scoped>
.chartBlock {
  border-radius: 10px;
  overflow: hidden;
  background: white;

  &__chart {
    padding: 20px;
  }
}
</style>

<script setup lang="ts">
import Typography from '~/components/common/Typography.vue'

interface IProps {
  question: string
  answer: string
}

defineProps<IProps>()

function parseAnswer(answer: unknown) {
  if (answer instanceof Date)
    return answer.toLocaleDateString('en-GB')
  if (typeof answer === 'boolean')
    return answer ? 'Да' : 'Нет'
  return answer
}
</script>

<template>
  <div class="questionAnswer">
    <div class="questionAnswer__content">
      <div class="questionAnswer__sub">
        <span class="pi pi-circle-fill questionAnswer__circle" />

        <Typography variant="sub">
          {{ question }}
        </Typography>
      </div>

      <div class="questionAnswer__whiteSpace" />

      <Typography variant="span">
        {{ parseAnswer(answer) }}
      </Typography>
    </div>

    <div class="questionAnswer__slot">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.questionAnswer {
  display: flex;
  flex-direction: column;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__circle {
    color: red;
  }

  &__sub {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &__whiteSpace {
    flex: 1 0 30px;
  }

  &__slot {
    margin: 10px 0;
  }
}
</style>

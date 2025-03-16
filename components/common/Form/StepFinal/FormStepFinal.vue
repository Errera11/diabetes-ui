<script setup lang="ts">
import Typography from '~/components/common/Typography.vue'

const store = useFormStore()

const maxIndex = store.result.indexOf(Math.max(...store.result))
const resultMapper = ['Отсутствие диабета', 'Риск предиабета', 'Риск диабета']
const tipMapper = [
  'Поздравляем! Ваш результат показывает, что в данный момент вы находитесь в группе низкого риска диабета. Однако важно сохранять здоровый образ жизни, чтобы поддерживать ваше состояние. ',
  'Ваш результат указывает на преддиабет — состояние, при котором уровень сахара в крови выше нормы, но ещё не достигает уровня диабета. Это серьезный сигнал, что необходимо принять меры для предотвращения дальнейшего прогрессирования.',
  'Ваш результат указывает на высокий риск развития диабета. Очень важно обратиться к врачу для более подробного обследования и проведения необходимых анализов.',
]
</script>

<template>
  <div class="stepFinal">
    <Typography variant="h3">
      Ваши результаты
    </Typography>

    <span>
      <Typography variant="sub" weight="500">
        Результат:
      </Typography>

      <Typography variant="sub">
        {{ tipMapper[maxIndex] }}
      </Typography>
    </span>

    <div class="stepFinal__results">
      <div v-for="(item, idx) in store.result" :key="item" class="stepFinal__resultItem">
        <div class="stepFinal__resultItemSub">
          <span class="pi pi-circle-fill stepFinal__circle" />

          <Typography variant="sub" weight="500">
            {{ resultMapper[idx] }}
          </Typography>
        </div>

        <span>{{ (Number(item) * 100).toFixed(3) }} %</span>
      </div>
    </div>

    <NuxtLink href="/detail" class="stepFinal__detailsLink">
      Посмотреть детальную информацию
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@use '/assets/styles/colors';

.stepFinal {
  display: flex;
  flex-direction: column;
  gap: 25px;

  &__resultItemSub {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &__circle:before {
    font-size: 35px;
  }

  &__results {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__resultItem {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;

    &:nth-child(1) {
      .stepFinal__circle {
        color: colors.$soft-green;
      }
    }

    &:nth-child(2) {
      .stepFinal__circle {
        color: colors.$soft-beige;
      }
    }

    &:nth-child(3) {
      .stepFinal__circle {
        color: colors.$soft-brown;
      }
    }
  }

  &__detailsLink {
    align-self: flex-start;
    color: #{colors.$light-brown};
    font-weight: 500;
    font-size: 14px;

    &:hover {
      color: #{colors.$brown};
    }
  }
}
</style>

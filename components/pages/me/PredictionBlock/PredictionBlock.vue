<script setup lang="ts">
import type { IUserPrediction } from '~/composables/useUserPredictionQuery'
import Popover from 'primevue/popover'
import Typography from '~/components/common/Typography.vue'
import { formatDateTime } from '~/utils/date'

interface IProps {
  predictions: IUserPrediction[]
}
interface IEmits {
  delete: (id: number, event: Event) => void
}

defineProps<IProps>()
defineEmits<IEmits>()

function togglePopover(idx: number, event: Event) {
  popovers.value[idx].toggle(event)
}
const popovers = ref<(typeof Element)[]>([])
</script>

<template>
  <div class="prediction-block">
    <Typography variant="h3">
      Прошлые результаты
    </Typography>

    <div class="prediction-block__hints">
      <span v-tooltip.focus.top="'Значение указывает на отсутствие диабета'">Отсутствие диабета</span>
      <span v-tooltip.focus.top="'Значение указывает на риск предиабета'">Риск предиабета</span>
      <span v-tooltip.focus.top="'Значение указывает на риск диабета'">Риск диабета</span>
    </div>

    <div class="prediction-block__list">
      <Card v-for="(item, index) in predictions" :key="index" class="prediction-block__item">
        <template #content>
          <div class="prediction-block__item-content">
            <div>
              <Icon name="lucide-lab:tab-check" style="color: black" @click="togglePopover(item.id, $event)" />
            </div>

            <div class="prediction-block__item-created-at">
              {{ `Дата: ${formatDateTime(item.createdAt)}` }}
            </div>

            <div class="prediction-block__item-result">
              <div class="prediction-block__hints prediction-block__item-result-wrapper">
                <span v-for="res in item.result" class="prediction-block__item-result-item">{{ `${(res * 100).toFixed(2)}%` }}</span>
              </div>
            </div>

            <div class="prediction-block__popover">
              <Icon name="lucide-lab:intercom" style="color: black" @click="togglePopover(index, $event)" />
            </div>

            <div />

            <Popover :ref="r => popovers.push(r)" @click="popovers[index].toggle($event)">
              <span style="cursor: pointer" @click="$emit('delete', item.id, $event)">Удалить</span>
            </Popover>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/colors';

.prediction-block {
  display: flex;
  flex-direction: column;
  gap: 35px;

  &__item-content {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }

  &__popover {
    cursor: pointer;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__item-created-at {
    flex: 1 0;
  }

  &__item-result {
    flex: 1 0;
  }

  &__hints {
    display: flex;
    flex-direction: column;
    gap: 15px;

    span {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    span:before {
      display: block;
      content: '';
      border-radius: 50%;
      width: 25px;
      height: 25px;
    }

    span:nth-child(1):before {
      background: colors.$soft-green;
    }
    span:nth-child(2):before {
      background: colors.$soft-beige;
    }
    span:nth-child(3):before {
      background: colors.$soft-brown;
    }
  }

  &__item-result-wrapper {
    flex-direction: row;
  }
}
</style>

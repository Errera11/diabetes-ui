<script setup lang="ts">
import type { IForm } from '~/utils/validation/form-validation.js'
import {
  stepFiveQuestions,
  stepFourQuestions,
  stepOneQuesitons,
  stepThreeQuestions,
  stepTwoQuestions,
} from '~/components/common/Form/questions/index.js'
import Typography from '~/components/common/Typography.vue'
import QuestionAnswer from '~/components/pages/detail/QuesitonBlock/QuestionAnswer.vue'

const store = useFormStore()
type OmittedForm = Omit<IForm, 'result'>
type AnswerItem = Partial<Record<keyof OmittedForm, string>>
const dataToShow: AnswerItem[] = [
  { height: stepOneQuesitons.height },
  { weight: stepOneQuesitons.weight },
  { birthdate: stepOneQuesitons.birthdate },
  { diffWalk: stepTwoQuestions.diffWalk },
  { heartDisease: stepTwoQuestions.heartDisease },
  { bloodPressure: stepTwoQuestions.bloodPressure },
  { cholLevel: stepTwoQuestions.cholLevel },
  { physHealth: stepThreeQuestions.physHealth },
  { physActivity: stepFourQuestions.physActivity },
  { genHealth: stepFiveQuestions.physHealthCheck },
]

function getAnswer(item: AnswerItem) {
  const key = Object.keys(item)[0] as keyof OmittedForm

  return store[key]
}
const getQuestion = (item: AnswerItem) => Object.entries(item)[0][1]
</script>

<template>
  <div class="questionBlock">
    <Typography variant="h3">
      Ваши ответы
    </Typography>

    <div>
      <QuestionAnswer v-for="(item, idx) of dataToShow" :key="idx" :question="getQuestion(item)" :answer="getAnswer(item)">
        <Divider v-if="idx !== dataToShow.length - 1" />
      </QuestionAnswer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'assets/styles/colors';

.questionBlock {
  background: white;
  border-radius: 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>

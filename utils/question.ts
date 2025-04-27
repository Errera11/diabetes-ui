import type { IForm } from '~/utils/validation/form-validation'
import {
  stepFiveQuestions,
  stepFourQuestions,
  stepOneQuesitons,
  stepThreeQuestions,
  stepTwoQuestions,
} from '~/components/common/Form/questions'

export type OmittedForm = Omit<IForm, 'result'>
type AnswerItem = Partial<Record<keyof OmittedForm, string>>
const dataToShow: AnswerItem = {
  height: stepOneQuesitons.height,
  weight: stepOneQuesitons.weight,
  birthdate: stepOneQuesitons.birthdate,
  diffWalk: stepTwoQuestions.diffWalk,
  heartDisease: stepTwoQuestions.heartDisease,
  bloodPressure: stepTwoQuestions.bloodPressure,
  cholLevel: stepTwoQuestions.cholLevel,
  physHealth: stepThreeQuestions.physHealth,
  physActivity: stepFourQuestions.physActivity,
  genHealth: stepFiveQuestions.physHealthCheck,
}

export function getQuestion(item: keyof OmittedForm) {
  return dataToShow[item]
}
function formatDateString(dateString: number) {
  const date = new Date(dateString)
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
}

export function getQna(item: keyof OmittedForm, ans: string | boolean | number) {
  const q = getQuestion(item)
  const parsedDate = Date.parse(ans as string)
  let answer

  if (!q)
    return

  if (typeof ans === 'boolean' && ans) {
    answer = 'Да'
  }
  else if (typeof ans === 'boolean' && !ans) {
    answer = 'Нет'
  }
  else if (!Number.isNaN(parsedDate) && typeof ans !== 'number') {
    answer = formatDateString(parsedDate)
  }
  else {
    answer = ans
  }
  return {
    answer,
    question: q,
  }
}

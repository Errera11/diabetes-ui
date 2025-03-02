import { toTypedSchema } from '@vee-validate/zod'
import zod from 'zod'

export const stepOneInputs = {
  bloodPressure: 'bloodPressure',
  birthdate: 'birthdate',
  height: 'height',
}
export const stepOneSchema = toTypedSchema(
  zod.object({
    [stepOneInputs.bloodPressure]: zod.string({ message: 'Введите ваше кровяное давления' }).min(1, { message: 'Введите ваше кровяное давления' }),
    [stepOneInputs.birthdate]: zod.date({ message: 'Введите вашу дату рождения' }),
    [stepOneInputs.height]: zod.string({ message: 'Введите ваш рост' }),
  }),
)

export const stepTwoInputs = {
  cholLevel: 'cholLevel',
  diffWalk: 'diffWalk',
  heartDisease: 'heartDisease',
}
export const stepTwoSchema = toTypedSchema(
  zod.object({
    [stepTwoInputs.cholLevel]: zod.string({ message: 'Введите ваш уровень холестерина в крови' }),
    [stepTwoInputs.diffWalk]: zod.boolean({ message: 'Заполните поле' }),
    [stepTwoInputs.heartDisease]: zod.boolean({ message: 'Заполните поле' }),
  }),
)

export const stepThreeInputs = {
  physHealth: 'physHealth',
}
export const stepThreeSchema = toTypedSchema(
  zod.object({
    [stepThreeInputs.physHealth]: zod.string({ message: 'Укажите ваше состояние за последние 30 дней' }),
  }),
)

export const stepFourInputs = {
  physActivity: 'physActivity',
}
export const stepFourSchema = toTypedSchema(
  zod.object({
    [stepFourInputs.physActivity]: zod.string({ message: 'Введите активность за последние 30 дней' }),
  }),
)

export const stepFiveInputs = {
  physHealth: 'physHealth',
}
export const stepFiveSchema = toTypedSchema(
  zod.object({
    [stepThreeInputs.physHealth]: zod.string({ message: 'Введите ваш уровень холестерина в крови' }),
  }),
)

export const stepSixInputs = {
  genHealth: 'genHealth',
}
export const stepSixSchema = toTypedSchema(
  zod.object({
    [stepSixInputs.genHealth]: zod.string({ message: 'Оцените общее состояние здоровья' }),
  }),
)

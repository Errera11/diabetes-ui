import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'

export const stepOneInputs = {
  birthdate: 'birthdate',
  height: 'height',
  weight: 'weight',
}
export const stepOneSchema = toTypedSchema(
  zod.object({
    [stepOneInputs.birthdate]: zod.date({ message: 'Введите вашу дату рождения' }),
    [stepOneInputs.height]: zod.string({ message: 'Введите ваш рост' }).min(1, { message: 'Введите ваш рост' }),
    [stepOneInputs.weight]: zod.string({ message: 'Введите ваш вес' }).min(1, { message: 'Введите ваш вес' }),
  }),
)

export const stepTwoInputs = {
  cholLevel: 'cholLevel',
  diffWalk: 'diffWalk',
  heartDisease: 'heartDisease',
  bloodPressure: 'bloodPressure',
}
export const stepTwoSchema = toTypedSchema(
  zod.object({
    [stepTwoInputs.bloodPressure]: zod.string({ message: 'Введите ваше кровяное давления' }).min(1, { message: 'Введите ваше кровяное давления' }),
    [stepTwoInputs.cholLevel]: zod.string({ message: 'Введите ваш уровень холестерина в крови' }).min(1, { message: 'Введите ваш уровень холестерина в крови' }),
    [stepTwoInputs.diffWalk]: zod.boolean({ message: 'Заполните поле' }),
    [stepTwoInputs.heartDisease]: zod.boolean({ message: 'Заполните поле' }),
  }),
)

export const stepThreeInputs = {
  physHealth: 'physHealth',
}
export const stepThreeSchema = toTypedSchema(
  zod.object({
    [stepThreeInputs.physHealth]: zod.string({ message: 'Укажите ваше состояние здоровья за последние 30 дней' }).min(1, { message: 'Укажите ваше состояние здоровья за последние 30 дней' }),
  }),
)

export const stepFourInputs = {
  physActivity: 'physActivity',
}
export const stepFourSchema = toTypedSchema(
  zod.object({
    [stepFourInputs.physActivity]: zod.string({ message: 'Введите активность за последние 30 дней' }).min(1, { message: 'Введите активность за последние 30 дней' }),
  }),
)

export const stepFiveInputs = {
  genHealth: 'genHealth',
}
export const stepFiveSchema = toTypedSchema(
  zod.object({
    [stepFiveInputs.genHealth]: zod.string({ message: 'Оцените общее состояние здоровья' }).min(1, { message: 'Оцените общее состояние здоровья' }),
  }),
)

export type IForm = (typeof stepOneInputs & typeof stepTwoInputs & typeof stepThreeInputs & typeof stepFourInputs & typeof stepFiveInputs)

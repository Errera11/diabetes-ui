import { toTypedSchema } from '@vee-validate/zod'
import zod from 'zod'

export const stepOneInputs = {
  bloodPressure: 'bloodPressure',
  birthdate: 'birthdate',
  height: 'height',
}
export const stepOneSchema = toTypedSchema(
  zod.object({
    [stepOneInputs.bloodPressure]: zod.string({ message: 'Введите ваше кровяное давления' }),
    [stepOneInputs.birthdate]: zod.date({ message: 'Введите вашу дату рождения' }),
    [stepOneInputs.height]: zod.string({ message: 'Введите ваш рост' }),
  }),
)

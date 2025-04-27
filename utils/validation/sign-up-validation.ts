import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'

export interface ISignUpForm {
  email: string
  password: string
  username: string
}

export const signUpInputs = {
  email: 'email',
  password: 'password',
  username: 'username',
}

export const signUpSchema = toTypedSchema(
  zod.object({
    [signUpInputs.email]: zod.string({ message: 'Введите электронную почту' }).nonempty({ message: 'Введите электронную почту' }).email({ message: 'Введите корректную почту' }),
    [signUpInputs.username]: zod.string({ message: 'Введите имя пользователя' }).nonempty({ message: 'Введите имя пользователя' }),
    [signUpInputs.password]: zod.string({ message: 'Введите пароль' }).nonempty({ message: 'Введите пароль' }),
  }),
)

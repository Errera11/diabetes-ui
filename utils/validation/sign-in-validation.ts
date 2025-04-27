import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'

export interface ISignInForm {
  email: string
  password: string
}

export const signInInputs = {
  email: 'email',
  password: 'password',
}

export const signInSchema = toTypedSchema(
  zod.object({
    [signInInputs.email]: zod.string({ message: 'Введите электронную почту' }).nonempty({ message: 'Введите электронную почту' }).email({ message: 'Введите корректную почту' }),
    [signInInputs.password]: zod.string({ message: 'Введите пароль' }).nonempty({ message: 'Введите пароль' }),
  }),
)

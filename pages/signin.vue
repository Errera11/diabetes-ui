<script setup lang="ts">
import type { ISignInForm } from '~/utils/validation/sign-in-validation'
import { Form, useForm } from 'vee-validate'
import CustomErrorMessage from '~/components/common/Form/CustomErrorMessage.vue'
import CustomInput from '~/components/common/Inputs/CustomInput.vue'
import Typography from '~/components/common/Typography.vue'
import { useSigninMutation } from '~/composables/useSigninMutation'
import { signInSchema } from '~/utils/validation/sign-in-validation'
import LinkButton from "~/components/common/LinkButton.vue";

const { mutateAsync, isPending, error: mutationError } = useSigninMutation()

const { errors, defineField, validate } = useForm<ISignInForm>({
  validationSchema: signInSchema,
})

const [emailModel, emailProps] = defineField('email', {
  validateOnModelUpdate: false,
})
const [passwordModel, passwordProps] = defineField('password', {
  validateOnModelUpdate: false,
})

function onSubmit() {
  validate()

  mutateAsync({
    email: emailModel.value,
    password: passwordModel.value,
  })
}
</script>

<template>
  <div class="signin-container">
    <div class="signin-container__form">
      <layout-auth-layout>
        <template #left-side>
          <Typography variant="h4" color="light">
            Заботьтесь о своём здоровье — начните с раннего предсказания!
          </Typography>

          <Typography variant="span" color="light">
            Диабет — это вызов, который можно предотвратить! Наш сервис использует машинное обучение для предсказания вероятности диабета, чтобы вы могли вовремя принять меры и улучшить качество жизни. Пройдите тест уже сегодня и будьте уверены в своем здоровье!
          </Typography>

          <LinkButton link="/signup" label="Нет аккаунта?" />
        </template>
        <template #header>
          <Typography variant="h3">
            Авторизация
          </Typography>
        </template>

        <template #body>
          <Form class="form" @submit="onSubmit">
            <CustomInput id="1" v-model="emailModel" label="Электронная почта" :error-message="errors.email" v-bind="emailProps" />

            <CustomInput id="2" v-model="passwordModel" label="Пароль" type="password" :error-message="errors.password" v-bind="passwordProps" />

            <Button label="Войти" type="submit" :loading="isPending" />

            <CustomErrorMessage v-if="mutationError?.message" :error-message="mutationError.message" />
          </Form>
        </template>
      </layout-auth-layout>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/colors.scss';

.signin-container {
  background: colors.$soft-beige;
  display: flex;
  height: 100%;

  &__form {
    margin: auto;
    max-width: 1000px;
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>

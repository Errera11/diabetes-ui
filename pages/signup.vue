<script setup lang="ts">
import type { ISignUpForm } from '~/utils/validation/sign-up-validation'
import { Form, useForm } from 'vee-validate'
import CustomErrorMessage from '~/components/common/Form/CustomErrorMessage.vue'
import CustomInput from '~/components/common/Inputs/CustomInput.vue'
import Typography from '~/components/common/Typography.vue'
import { useSignupMutation } from '~/composables/useSignupMutation'
import { signUpSchema } from '~/utils/validation/sign-up-validation'
import LinkButton from "~/components/common/LinkButton.vue";

const { errors, defineField, validate } = useForm<ISignUpForm>({
  validationSchema: signUpSchema,
})
const [emailModel, emailProps] = defineField('email', {
  validateOnModelUpdate: false,
})
const [usernameModel, usernameProps] = defineField('username', {
  validateOnModelUpdate: false,
})
const [passwordModel, passwordProps] = defineField('password', {
  validateOnModelUpdate: false,
})

const { error: mutationError, isPending, mutateAsync } = useSignupMutation()

function onSubmit() {
  validate()
  mutateAsync({
    email: emailModel.value,
    username: usernameModel.value,
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

          <LinkButton link="/signin" label="Уже есть аккаунт?" />
        </template>
        <template #header>
          <Typography variant="h3">
            Регистрация
          </Typography>
        </template>

        <template #body>
          <Form class="form" @submit="onSubmit">
            <CustomInput id="1" v-model="emailModel" label="Электронная почта" :error-message="errors.email" v-bind="emailProps" />

            <CustomInput id="2" v-model="usernameModel" label="Имя пользователя" :error-message="errors.username" v-bind="usernameProps" />

            <CustomInput id="3" v-model="passwordModel" label="Пароль" type="password" :error-message="errors.password" v-bind="passwordProps" />

            <Button label="Регистрация" type="submit" :loading="isPending" />

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
  gap: 20px;
  flex-direction: column;
}
</style>

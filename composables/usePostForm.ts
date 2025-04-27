import type { IForm } from '~/utils/validation/form-validation'
import { useMutation } from '@tanstack/vue-query'
import { objUppercase } from '~/utils/obj-uppercase'

export interface IPostResponse {
  Result: [number, number, number]
  UserId: number
  Id: number
  CholLevel: number
  DiffWalk: boolean
  PhysHealth: number
  Birthdate: string
  BloodPressure: number
  Weight: number
  Height: number
  HeartDisease: boolean
  GenHealth: number
  PhysActivity: boolean
}

export interface IPostFormResponse {
  result: [number, number, number]
  userId: number
  id: number
  cholLevel: number
  diffWalk: boolean
  physHealth: number
  birthdate: string
  bloodPressure: number
  weight: number
  height: number
  heartDisease: boolean
  genHealth: number
  physActivity: boolean
}

interface IPostRequest {
  CholLevel: number
  DiffWalk: boolean
  PhysHealth: number
  Birthdate: string
  BloodPressure: number
  Weight: number
  Height: number
  HeartDisease: boolean
  GenHealth: number
  PhysActivity: boolean
  Result: [number, number, number]
  // optional int32 UserId  = 12;
}

export function usePostForm() {
  const store = useFormStore()
  const config = useRuntimeConfig()

  return useMutation({ onSettled: () => {
    store.setPending(false)
  }, onMutate: () => {
    store.setPending(true)
  }, mutationFn: async (data: IForm) => {
    const payload = JSON.stringify(objUppercase(data))
    const res = await fetch(`${config.public.apiUrl}/v1/prediction`, {
      body: payload,
      method: 'POST',
      credentials: 'include',
    })

    if (!res.ok)
      throw new Error(res.statusText)

    const rawResponse = await res.json() as IPostResponse

    return objLowercase(rawResponse) as IPostFormResponse
  } })
}

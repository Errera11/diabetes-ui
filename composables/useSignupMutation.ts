import type { ISignUpForm } from '~/utils/validation/sign-up-validation'
import {useMutation, useQueryClient} from '@tanstack/vue-query'
import { objUppercase } from '~/utils/obj-uppercase'

interface ISignupResponse {
  id: number
  token: string
}

export function useSignupMutation() {
  const config = useRuntimeConfig()
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (payload: ISignUpForm) => {
      const apiPayload = objUppercase(payload)

      const res = await fetch(`${config.public.apiUrl}/v1/auth/signup`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ ...apiPayload }),
      })

      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.message || res.statusText)
      }

      return await res.json() as Promise<ISignupResponse>
    },
    onSuccess: () => {
      router.push('/')
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })
}

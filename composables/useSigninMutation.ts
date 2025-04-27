import type { ISignInForm } from '~/utils/validation/sign-in-validation'
import { objUppercase } from '~/utils/obj-uppercase'
import {useMutation, useQueryClient} from '@tanstack/vue-query'

interface ISigninResponse {
  id: number
  token: string
}

export function useSigninMutation() {
  const config = useRuntimeConfig()
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (payload: ISignInForm) => {
      const apiPayload = objUppercase(payload)

      const res = await fetch(`${config.public.apiUrl}/v1/auth/signin`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(apiPayload),
      })

      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.message || res.statusText)
      }

      return await res.json() as Promise<ISigninResponse>
    },
    onSuccess: () => {
      router.push('/')
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })
}

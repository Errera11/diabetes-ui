import { useMutation } from '@tanstack/vue-query'
import { useUserStore } from '~/stores/userStore'

export function useLogoutMutation() {
  const config = useRuntimeConfig()
  const userStore = useUserStore()
  return useMutation({
    mutationFn: async () => {
      const res = await fetch(`${config.public.apiUrl}/v1/auth/logout`, {
        method: 'DELETE',
        credentials: 'include',
      })

      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.message || res.statusText)
      }

      return await res.json()
    },
    onSuccess: () => {
      userStore.setDefaultAuthUser()
    },
  })
}

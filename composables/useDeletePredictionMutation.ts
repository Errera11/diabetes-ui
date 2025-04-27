import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { useToast } from 'primevue/usetoast';

interface ISigninResponse {
  id: number
  token: string
}

export function useDeletePredictionMutation() {
  const config = useRuntimeConfig()
  const queryClient = useQueryClient()
  const toast = useToast()

  return useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`${config.public.apiUrl}/v1/prediction/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      })

      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.message || res.statusText)
      }

      return await res.json() as Promise<ISigninResponse>
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-prediction'] })
      toast.add({ severity: 'success', summary: 'Удалено', detail: 'Запись успешно удалена', life: 3000 })
    },
    onError: () => {
      toast.add({ severity: 'error', summary: 'Ошибка', detail: 'Не удалось удалить запись', life: 3000 })
    }
  })
}

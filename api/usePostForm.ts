import type { IForm } from '~/utils/validation/form-validation'
import { useMutation } from '@tanstack/vue-query'

interface IPostResponse {
  prediction: [[number, number, number]]
}

export function usePostForm() {
  const store = useFormStore()
  const config = useRuntimeConfig()

  return useMutation({ onSettled: () => {
    store.setPending(false)
  }, onMutate: () => {
    store.setPending(true)
  }, mutationFn: async (data: IForm) => {
    const res = await fetch(`${config.public.modelUrl}/predict/`, {
      body: JSON.stringify({
        data,
      }),
      method: 'POST',
    })

    if (!res.ok)
      throw new Error(res.statusText)

    return await res.json() as IPostResponse
  } })
}

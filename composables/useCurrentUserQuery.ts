import { useQuery } from '@tanstack/vue-query'
import { useUserStore } from '~/stores/userStore'
import { objLowercase } from '~/utils/obj-lowercase'

interface IUserApiResponse {
  Id: number
  Username: string
  Email: string
  ImageUrl: string
  CreatedAt: string
}
interface IUserResponse {
  id: number
  username: string
  email: string
  imageUrl: string
  createdAt: string
}

export function useCurrentUserQuery() {
  const config = useRuntimeConfig()
  const userStore = useUserStore()
  const router = useRouter()

  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await fetch(`${config.public.apiUrl}/v1/auth`, {
        method: 'GET',
        credentials: 'include',
      })

      if (!res.ok) {
        userStore.setDefaultAuthUser()
        router.push('/signin')
        const body = await res.json()
        throw new Error(body.message || res.statusText)
      }

      const json = await res.json() as IUserApiResponse
      return objLowercase<IUserResponse>(json)
    },
    select: (data: IUserResponse) => {
      userStore.setCurrentAuthUser({
        ...data,
        isAuth: true,
      })
    },
    enabled: true,
    retry: false,
  })
}

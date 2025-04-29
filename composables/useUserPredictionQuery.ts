import { useQuery } from '@tanstack/vue-query'
import { useUserStore } from '~/stores/userStore'
import { objLowercase } from '~/utils/obj-lowercase'

export interface IUserPredictionResponse {
  predictions: {
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
    Result: number[]
    UserId: number
    Id: number
    CreatedAt: string
  }[]
}

export interface IUserPrediction {
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
  result: number[]
  userId: number
  id: number
  createdAt: string
}

export function useUserPredictionQuery() {
  const config = useRuntimeConfig()
  const user = useUserStore()

  return useQuery({
    queryKey: ['user-prediction'],
    queryFn: async () => {
      const res = await fetch(`${config.public.apiUrl}/v1/prediction/${user.id}`, {
        method: 'GET',
        credentials: 'include',
      })

      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.message || res.statusText)
      }

      const json = await res.json() as IUserPredictionResponse

      const d = json.predictions.map(pred => objLowercase<IUserPrediction[]>(pred))

      return d as IUserPrediction[]
    },
    enabled: true,
  })
}

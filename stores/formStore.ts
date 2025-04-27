import type { IForm } from '~/utils/validation/form-validation'

interface IFormState extends IForm {
  result: [number, number, number]
  isPending: boolean
}

export const useFormStore = defineStore('form-store', {
  state: (): IFormState => {
    return {
      cholLevel: '',
      diffWalk: '',
      physHealth: '',
      result: [0, 0, 0],
      birthdate: '',
      bloodPressure: '',
      weight: '',
      height: '',
      heartDisease: '',
      genHealth: '',
      physActivity: '',
      isPending: false,
    }
  },
  actions: {
    setFormResult(data: Pick<IFormState, 'result'>) {
      this.result = data.result
    },
    setFormData(data: Omit<IFormState, 'isPending'>) {
      this.$state = {
        ...this.$state,
        ...data,
      }
    },
    setPending(data: boolean) {
      this.isPending = data
    },
  },
})

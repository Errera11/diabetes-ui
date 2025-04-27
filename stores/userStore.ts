interface IUserState {
  id: number
  username: string
  email: string
  image?: string
  isAuth: boolean
  createdAt: string
}

export const useUserStore = defineStore('user-store', {
  state: (): IUserState => {
    return {
      id: -1,
      username: '',
      email: '',
      image: '',
      isAuth: false,
      createdAt: '',
    }
  },
  actions: {
    setCurrentAuthUser(user: IUserState): void {
      this.$state = user
    },
    getCurrentUser(): IUserState {
      return this.$state
    },
    setDefaultAuthUser() {
      this.$state = {
        id: -1,
        username: '',
        email: '',
        image: '',
        isAuth: false,
        createdAt: '',
      }
    }
  },
})

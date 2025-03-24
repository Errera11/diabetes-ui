import { ref, watchEffect } from 'vue'

export function useMedia() {
  const isMobile = ref(false)
  const isTablet = ref(false)
  const isLaptop = ref(false)

  const updateDeviceType = () => {
    const width = window.innerWidth

    isMobile.value = width <= 375
    isTablet.value = width <= 768
    isLaptop.value = width > 768
  }

  watchEffect((onInvalidate) => {
    if (!window)
      return

    updateDeviceType()

    const onResize = () => updateDeviceType()
    window.addEventListener('resize', onResize)

    onInvalidate(() => {
      window.removeEventListener('resize', onResize)
    })
  })

  return { isMobile, isTablet, isLaptop }
}

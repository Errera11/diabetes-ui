declare module '*_colors.scss' {
  type keys = 'brown' | 'lightBrown' | 'light'

  const content: Record<keys, string>
  export default content
}

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

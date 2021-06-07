import 'styled-components'

// extend original module declarations
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      success: string
      error: string
      warning: string
      lightGrays: string[]
      darkGrays: string[]
      greens: string[]
      purples: string[]
      whites: string[]
      blacks: string[]
    }
    breakpoints: {
      sm: string
      md: string
      lg: string
      xl: string
    }
  }
}

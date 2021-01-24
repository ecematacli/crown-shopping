import 'styled-components';

// extend original module declarations
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      lightGrays: string[];
      darkGrays: string[];
      greens: string[];
      purples: string[];
      whites: string[];
      blacks: string[];
    };
    breakpoints: {
      md: string;
      lg: string;
      xl: string;
    };
  }
}

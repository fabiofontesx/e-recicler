import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    pallete: {
      colors: {
        primary: string;
        secondary: string;
        text: string;
      };
    };

    fonts: {
      robotoRegular: string;
      robotoBold: string;
      ubuntuRegular: string;
      ubuntuBold: string;
    };
  }
}

export = DefaultTheme;

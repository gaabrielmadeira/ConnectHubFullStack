import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
    --color-primary: #F4CC04;
    --color-background: #0E0D0C;
    --color-error-alert: #FF0000;
    --color-white: #FFFFFF;
    --color-grey-1: #474843;
    --color-grey-2: #111110;
    --color-grey-3: #070705;

    --font-primary: "Inter", sans-serif;
    --font-secundary: "Poppins", sans-serif;

    --font-size-2: 2rem;
    --font-size-4: 1.5rem;
    --font-size-5: 1.375rem;
    --font-size-6: 1.125rem;
    --font-size-7: 1rem;
    --font-size-8: 0.75rem;

    --font-weight-1: 600;
    --font-weight-2: 500;
    --font-weight-3: 400;
  };
`
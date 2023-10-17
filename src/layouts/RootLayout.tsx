import { PropsWithChildren } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export type RootLayoutProps = PropsWithChildren;

const GlobalStyles = createGlobalStyle`
  :host {
    font-size: 16px;
    
    --player-background-color: transparent;
  }
  
  * {
    padding: 0;
    margin: 0;
    appearance: none;
    border: none;
    background: none;
    box-shadow: none;
    outline: none;
    cursor: inherit;
    font-family: inherit;
    font-weight: inherit;
    box-sizing: border-box;
    text-decoration: none;
    color: inherit;
    list-style: none;
    font-size: inherit;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
  
  [type = "number"] {
    appearance: textfield;
  }
`;

const Root = styled.div`
    background: var(--player-background-color);
  
    block-size: 100%;
    inline-size: 100%;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <GlobalStyles />
      <Root>{children}</Root>
    </>
  );
}

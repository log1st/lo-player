import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { RootLayout } from '@/layouts/RootLayout.tsx';

const theme = {
  main: 'dark',
};

export function App() {
  const [stylesRef, setStylesRef] = useState<HTMLDivElement | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <div ref={setStylesRef} />
      <StyleSheetManager target={stylesRef ?? undefined}>
        {stylesRef && <RootLayout />}
      </StyleSheetManager>
    </ThemeProvider>
  );
}

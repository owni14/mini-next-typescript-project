import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout/Layout';
import { GlobalStyle } from '../styles/global-style';
import { theme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

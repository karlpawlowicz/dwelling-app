import type { AppProps } from 'next/app';

import { wrapper } from '@/store/store';

import '@/styles/modern-normalize.css';
import '@/styles/fonts.css';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);

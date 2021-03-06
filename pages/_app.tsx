import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../components/store';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);

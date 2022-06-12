import React from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import SiteLayout from '@src/components/layouts/site-layout';
import '@src/styles/globals.css';

type Page<P = unknown> = NextPage<P> & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

type MyAppProps = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: MyAppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 600000, // 10 minutes
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  const getLayout =
    Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {getLayout(<Component {...pageProps} />)}
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;

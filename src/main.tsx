// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './assets/css/styles.css';
import { App } from './App.tsx';
import './i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>,
  // </StrictMode>,
);

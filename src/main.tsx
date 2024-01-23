import React from 'react';
import ReactDOM from 'react-dom/client';
// msw setting
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import './index.css';
// import worker from './mocks/worker';

const queryClient = new QueryClient();

if (process.env.NODE_ENV === 'development') {
  // worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen />
          <RecoilRoot>
            <App />
          </RecoilRoot>
        </QueryClientProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

/**
 * @author hieubq
 * @description Entry application component used to compose providers and render Module Component.
 * */

import { RootState } from '@/store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { themeConfig } from './lib/theme-configs';
import router from './routes';
const queryClient = new QueryClient();

function App() {
  const locale = useSelector((state: RootState) => state.auth.locale);

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={locale} theme={themeConfig}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;

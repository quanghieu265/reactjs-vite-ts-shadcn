import i18n from '@/config/i18n';
import { useOnMount } from '@/hooks/useOnMount';
import MainRoutes from '@/routes';
import { EnumLanguages } from '@/ts/enum/locale';
import utilities from '@/utilities';
import { ConfigProvider } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { themeConfig } from './utilities/theme-configs';

function App() {
  const locale = useSelector((state: RootState) => state.auth.locale);


  useOnMount(() => {
    const localeValue = utilities.func.getValueFromStorage(utilities.const.LOCALE_ID_STORAGE);
    if (!localeValue) {
      i18n.changeLanguage(EnumLanguages.en, (err, _t) => {
        if (err) return console.log('Something went wrong loading', err);
      });
    }
  });

  return (
    <ConfigProvider locale={locale} theme={themeConfig}>
      <MainRoutes />
    </ConfigProvider>
  );
}

export default App;

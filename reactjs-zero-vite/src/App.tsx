import i18n from '@/config/i18n';
import MainRoutes from '@/routes';
import { useOnMount } from './hooks/useOnMount';
import { EnumLanguages } from './ts/enum/locale';
import { LOCALE_ID_STORAGE } from './utilities/constants';
import { getValueFromStorage } from './utilities/functions';

function App() {
  useOnMount(() => {
    const localeValue = getValueFromStorage(LOCALE_ID_STORAGE);
    if (!localeValue) {
      i18n.changeLanguage(EnumLanguages.en, (err) => {
        if (err) return console.log('Something went wrong loading', err);
      });
    }
  });

  return <MainRoutes />;

}

export default App;

import i18n from 'config/i18n';
import { useOnMount } from 'hooks/useOnMount';
import React from 'react';
import MainRoutes from 'routes';
import UserWrapperContext from 'store/UserContext';
import { EnumLanguages } from 'ts/enum/locale';
import utilities from 'utilities';
import './App.scss';

function App() {
  useOnMount(() => {
    const localeValue = utilities.func.getValueFromStorage(utilities.const.LOCALE_ID_STORAGE);
    if (!localeValue) {
      i18n.changeLanguage(EnumLanguages.en, (err, _t) => {
        if (err) return console.log('Something went wrong loading', err);
      });
    }
  });

  return (
    <UserWrapperContext>
      <div className="app">
        <MainRoutes />
      </div>
    </UserWrapperContext>
  );
}

export default App;

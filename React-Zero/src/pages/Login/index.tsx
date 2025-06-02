import { LOCALE_KEYS } from 'locales';
import React from 'react';
import { useTranslation } from 'react-i18next';

function LoginPage() {
  const { t } = useTranslation();
  return (
    <div className="LoginPage">
      <header className="App-header">
        <h5>{t('short_name', { ns: 'translations' })}</h5>
        <h5>{t(LOCALE_KEYS.menu.dashboard)}</h5>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default LoginPage;

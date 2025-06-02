import { LOCALE_KEYS } from 'locales';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { EnumPathRouters } from 'ts/enum/menu';

function PageNotFound() {
  const { t } = useTranslation();

  return (
    <div className="container-404">
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <h1>{t(LOCALE_KEYS.pageNotFound.title)}</h1>
      <div className="link-container">
        <a target="blank" href={EnumPathRouters.dashboard} className="more-link">
          {t(LOCALE_KEYS.pageNotFound.button)}
        </a>
      </div>
    </div>
  );
}

export default PageNotFound;

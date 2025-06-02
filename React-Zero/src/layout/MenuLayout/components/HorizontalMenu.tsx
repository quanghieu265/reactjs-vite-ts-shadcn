import { isEmpty } from 'lodash';
import React from 'react';
import ItemSubMenu from './HorizontalSubMenu';
import { useNavigate } from 'react-router-dom';
import utilities from 'utilities';
import { useTranslation } from 'react-i18next';
import { IItemMenu, IMenu } from 'ts/interfaces/menu';

const HorizontalMenu: React.FC<IMenu> = ({ navigation, active }: IMenu) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (isEmpty(navigation)) {
    return <></>;
  } else {
    return (
      <div className="ml-10 flex items-baseline space-x-4">
        {(navigation || []).map((item: IItemMenu) => {
          const { id, href, name, children } = item;
          const isActive: Boolean = id === active;
          if (isEmpty(children)) {
            return (
              <a
                key={id}
                href={href}
                className={utilities.func.classNames(
                  isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-2 py-2 rounded-md text-sm font-medium'
                )}
                onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                  event.preventDefault();
                  navigate(href);
                }}
              >
                {t(name)}
              </a>
            );
          } else {
            return <ItemSubMenu active={active} item={item} key={id} />;
          }
        })}
      </div>
    );
  }
};

export default HorizontalMenu;

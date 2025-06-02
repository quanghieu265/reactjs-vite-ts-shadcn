import { Disclosure } from '@headlessui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { UserContext } from 'store/UserContext';
import { IUserPopup } from 'ts/interfaces/menu';
import { UserContextType } from 'ts/type/userContext';
import withUserMenu from './HOCUserPopup';
import MultipleLanguage from './MultipleLanguage';

const VerticalUserContainer = (props: any) => {
  const { t } = useTranslation();
  const { userNavigation } = props;
  const { user } = React.useContext(UserContext) as UserContextType;

  return (
    <>
      <div className="flex items-center px-5">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full object-cover" src={user.imageUrl} alt="" />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium leading-none text-white">{user.name}</div>
          <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
        </div>
        <div className="ml-auto flex-shrink-0">
          <MultipleLanguage />
        </div>
      </div>
      <div className="mt-3 space-y-1 px-2">
        {userNavigation.map(({ name, onClick }: IUserPopup) => (
          <Disclosure.Button
            key={name}
            as="div"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            onClick={onClick}
          >
            {t(name)}
          </Disclosure.Button>
        ))}
      </div>
    </>
  );
};

export default withUserMenu(VerticalUserContainer);

import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { UserContext } from 'store/UserContext';
import { IUserPopup } from 'ts/interfaces/menu';
import { UserContextType } from 'ts/type/userContext';
import utilities from 'utilities';
import withUserMenu from './HOCUserPopup';
import MultipleLanguage from './MultipleLanguage';

const HorizontalUserContainer = (props: any) => {
  const { t } = useTranslation();
  const { user } = React.useContext(UserContext) as UserContextType;
  const { userNavigation } = props;

  return (
    <div className="ml-4 flex items-center md:ml-6 flex items-center">
      <MultipleLanguage />
      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full object-cover" src={user?.imageUrl} alt="" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {userNavigation.map(({ name, onClick }: IUserPopup) => (
              <Menu.Item key={name}>
                {({ active }) => (
                  <div
                    className={utilities.func.classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                    onClick={onClick}
                  >
                    {t(name)}
                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default withUserMenu(HorizontalUserContainer);

import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IItemMenu, IItemSubMenu } from 'ts/interfaces/menu';
import utilities from 'utilities';

const ItemSubMenu = ({ item, active }: { item: IItemMenu; active: string }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id, name, children } = item;
  const isActive: Boolean = id === active;

  return (
    <Popover className="relative" key={id}>
      {({ open, close }) => (
        <>
          <Popover.Button
            className={utilities.func.classNames(
              isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'flex px-3 py-2 rounded-md text-sm font-medium'
            )}
          >
            <span>{t(name)}</span>
            <ChevronDownIcon
              className={`${
                open ? 'rotate-180' : 'text-opacity-70'
              } ml-1 h-5 w-5 text-gray-300 hover:bg-gray-700 transition duration-150 ease-in-out group-hover:text-opacity-80`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-4 w-64 -translate-x-1/2 transform px-4 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-1">
                  {(children || []).map(({ id, name, href, icon: Icon }: IItemSubMenu) => (
                    <a
                      key={id}
                      href={href}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                        event.preventDefault();
                        navigate(href);
                        close();
                      }}
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                        <Icon aria-hidden="true" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">{t(name)}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default ItemSubMenu;

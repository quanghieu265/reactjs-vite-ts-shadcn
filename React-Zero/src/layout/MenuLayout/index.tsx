import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import menuConfig from 'config/menu';
import React, { useEffect, useRef } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { EnumPathRouters } from 'ts/enum/menu';
import HorizontalMenu from './components/HorizontalMenu';
import HorizontalUserContainer from './components/HorizontalUserContainer';
import VerticalMenu from './components/VerticalMenu';
import VerticalUserContainer from './components/VerticalUserContainer';

export default function InnerContent() {
  const WIDTH_MD_SCREEN = 767;
  const buttonMenuRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > WIDTH_MD_SCREEN) {
        const currentBtnMenu = buttonMenuRef!.current;
        if (currentBtnMenu && currentBtnMenu!.getAttribute('data-headlessui-state')) {
          (buttonMenuRef.current || { click: () => {} }).click();
        }
      }
    });
  }, []);

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open, close }) => (
            <>
              <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 cursor-pointer"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                        onClick={() => {
                          navigate(EnumPathRouters.dashboard);
                        }}
                      />
                    </div>
                    <div className="hidden md:block">
                      <HorizontalMenu active="" navigation={menuConfig} />
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <HorizontalUserContainer />
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button
                      ref={buttonMenuRef}
                      className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden absolute inset-x-0 bg-gray-800 z-50">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  <VerticalMenu active="" navigation={menuConfig} close={close} />
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <VerticalUserContainer />
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}

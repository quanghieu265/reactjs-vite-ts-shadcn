import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { isEmpty } from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IItemMenu, IMenu } from 'ts/interfaces/menu';
import utilities from 'utilities';

const VerticalMenu: React.FC<IMenu> = ({ navigation, active, close }: IMenu) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (isEmpty(navigation)) {
    return <></>;
  } else {
    return (
      <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
        {(navigation || []).map((item: IItemMenu) => {
          const { id, href, name, children } = item;
          const isActive: Boolean = id === active;
          if (isEmpty(children)) {
            return (
              <Disclosure.Button
                key={id}
                as="a"
                href={href}
                className={utilities.func.classNames(
                  isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                  event.preventDefault();
                  navigate(href);
                  if (close) close();
                }}
              >
                {t(name)}
              </Disclosure.Button>
            );
          } else {
            return (
              <Disclosure as="div" className="mt-2" key={id}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      <span>{t(name)}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-gray-300 transition duration-150 ease-in-out`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                      {children?.map((ele: IItemMenu) => (
                        <Disclosure.Button
                          key={ele.id}
                          as="a"
                          href={ele.href}
                          className={utilities.func.classNames(
                            isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block px-3 py-2 rounded-md text-base font-medium'
                          )}
                          onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                            event.preventDefault();
                            navigate(ele.href);
                            if (close) close();
                          }}
                        >
                          {t(ele.name)}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          }
        })}
      </div>
    );
  }
};

export default VerticalMenu;

import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { IconEN, IconVI } from 'assets';
import i18n from 'config/i18n';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { isEmpty } from 'lodash';
import React, { Fragment, useState } from 'react';
import { EnumLanguages } from 'ts/enum/locale';
import { IItemLanguage } from 'ts/interfaces/locale';
import utilities from 'utilities';

export const listLocale: IItemLanguage[] = [
  { name: EnumLanguages.en, icon: IconEN },
  { name: EnumLanguages.vi, icon: IconVI },
];

const initialFuncLocaleValue: () => IItemLanguage = () => {
  const valueLocalStorage = utilities.func.getValueFromStorage(utilities.const.LOCALE_ID_STORAGE) as EnumLanguages;
  const objLocale = listLocale.find((el: IItemLanguage) => valueLocalStorage === el.name);
  return isEmpty(objLocale) ? listLocale[0] : objLocale;
};

const VerticalMenu = () => {
  const [_locale, setLocale] = useLocalStorage(EnumLanguages.en, utilities.const.LOCALE_ID_STORAGE);
  const [selected, setSelected] = useState<IItemLanguage>(initialFuncLocaleValue);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1" style={{ width: 80 }}>
        <Listbox.Button className="cursor-pointer w-25 relative w-full cursor-default rounded-lg bg-gray-700 py-1 pl-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm flex items-center">
          <selected.icon />
          <span className="block truncate pl-1.5 text-white">{selected.name.toUpperCase()}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="cursor-pointer absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {listLocale.map((person, personIdx) => {
              const { name, icon: IconLocale } = person;
              return (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `cursor-pointer relative cursor-default select-none py-1 px-2 flex items-center text-white ${
                      active ? 'bg-zinc-400 text-amber-900 text-black' : 'text-gray-900'
                    } ${selected.name === name ? 'bg-gray-500' : ''}`
                  }
                  value={person}
                  onClick={() => {
                    setSelected(person);
                    i18n.changeLanguage(person.name, (err, _t) => {
                      setLocale(person.name);
                    });
                  }}
                >
                  <>
                    <IconLocale />
                    <span className={`block truncate pl-1.5 ${selected.name === name ? 'font-medium' : 'font-normal'}`}>
                      {name.toUpperCase()}
                    </span>
                  </>
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default VerticalMenu;

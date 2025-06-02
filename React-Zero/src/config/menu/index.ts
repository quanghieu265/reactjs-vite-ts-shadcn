import { IconOne, IconThree, IconTwo } from 'assets';
import { LOCALE_KEYS } from 'locales';
import { EnumPathRouters } from 'ts/enum/menu';
import { IItemMenu } from 'ts/interfaces/menu';

export const MENU_KEYS = {
  dashboard: 'dashboard',
  settings: 'settings',
  calendar: 'calendar',
  reports: 'reports',
  reports123: 'reports123',
  insights: 'insights',
  automations: 'automations',
  reports2: 'reports2',
};

const menuConfig: IItemMenu[] = [
  {
    id: MENU_KEYS.dashboard,
    name: LOCALE_KEYS.menu.dashboard,
    href: EnumPathRouters.dashboard,
  },
  {
    id: MENU_KEYS.settings,
    name: LOCALE_KEYS.menu.settings,
    href: EnumPathRouters.settings,
  },
  {
    id: MENU_KEYS.calendar,
    name: LOCALE_KEYS.menu.calendar,
    href: EnumPathRouters.calendar,
  },
  {
    id: MENU_KEYS.reports,
    name: LOCALE_KEYS.menu.reports,
    href: EnumPathRouters.reports,
  },
  {
    id: MENU_KEYS.reports123,
    name: LOCALE_KEYS.menu.reports123,
    href: EnumPathRouters.reports123,
    children: [
      {
        id: MENU_KEYS.insights,
        name: LOCALE_KEYS.menu.insights,
        description: 'Measure actions your users take',
        href: EnumPathRouters.insights,
        icon: IconOne,
      },
      {
        id: MENU_KEYS.automations,
        name: LOCALE_KEYS.menu.automations,
        description: 'Create your own targeted content',
        href: EnumPathRouters.automations,
        icon: IconTwo,
      },
      {
        id: MENU_KEYS.reports2,
        name: LOCALE_KEYS.menu.reports2,
        description: 'Keep track of your growth',
        href: EnumPathRouters.reports2,
        icon: IconThree,
      },
    ],
  },
];

export default menuConfig;

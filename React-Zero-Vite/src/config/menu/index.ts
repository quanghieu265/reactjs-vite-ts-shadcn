import { IconOne } from '@/assets';
import { IItemMenu } from '@/ts/interfaces/menu';

const menuConfig: IItemMenu[] = [
  {
    id: 'dashboard',
    name: 'dashboard',
    href: '/dashboard',
  },

  {
    id: 'authentication',
    name: 'authentication',
    href: '/auth',
    children: [
      {
        id: 'login',
        name: 'login',
        description: 'Login to your account',
        href: '/auth/login',
        icon: IconOne,
      },
    ],
  },
];

export default menuConfig;

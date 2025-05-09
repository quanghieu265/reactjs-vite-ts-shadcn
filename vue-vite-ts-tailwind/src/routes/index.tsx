import { createRouter, createWebHistory } from 'vue-router';

// Auth Layout & Pages
import AuthLayout from '@/components/templates/AuthLayout.vue';
import NotFoundPage from '@/components/templates/NotFoundPage.vue';
import PublicLayout from '@/components/templates/PublicLayout.vue';
import AuthRoutes from './AuthRoutes';
import UserRoutes from './UserRoutes';

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
  {
    path: '/',
    name: 'Home',
    component: PublicLayout,
    redirect: { name: 'Users' },
    children: [...UserRoutes],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: AuthRoutes,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'border-indigo-500',
  linkExactActiveClass: 'border-indigo-700',
});

export default router;

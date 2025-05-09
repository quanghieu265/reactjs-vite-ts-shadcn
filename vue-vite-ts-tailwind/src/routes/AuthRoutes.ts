import LoginPage from '@/components/pages/auth/LoginPage.vue';
import RegisterPage from '@/components/pages/auth/RegisterPage.vue';

const AuthRoutes = [
  { path: 'login', name: 'Login', component: LoginPage },
  { path: 'register', name: 'Register', component: RegisterPage },
];

export default AuthRoutes;

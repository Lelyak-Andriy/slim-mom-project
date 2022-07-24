import { lazy } from 'react';

// eslint-disable-next-line
export default [
  {
    path: '/',
    label: 'Main',
    exact: true,
    component: lazy(() => import('./pages/MainPage/MainPage')),
    private: false,
    restricted: true,
  },
  {
    path: '/auth/register',
    label: 'Register',
    exact: true,
    component: lazy(() => import('./pages/LoginregistrationPage/RegistrationPage')),
    private: false,
    restricted: true,
  },
  {
    path: '/auth/login',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./pages/LoginregistrationPage/LoginPage')),
    private: false,
    restricted: true,
  },
  {
    path: '/calculator',
    label: 'Calculator',
    exact: true,
    component: lazy(() => import('./pages/CalculatorPage/CalculatorPage')),
    private: true,
    restricted: false,
  },
  {
    path: '/daily-rate',
    label: 'Diary',
    exact: true,
    component: lazy(() => import('./pages/DiaryPage/DiaryPage')),
    private: true,
    restricted: false,
  },
];

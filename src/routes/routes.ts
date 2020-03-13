import React from 'react';
import { AppRoutes } from '../config';
import { IRouteInterface } from '../interfaces';
const Register = React.lazy(() => import('../pages/Authorization/Signup'));
const ForgotPassword = React.lazy(() => import('../pages/Home/ForgotPassword'));
const ChangePassword = React.lazy(() => import('../pages/Home/ChangePassword'));
const EditProfile = React.lazy(() => import('../pages/dashboard/EditProfile'));
const DashboardPassword = React.lazy(() =>
  import('../pages/dashboard/DashboardPassword'),
);
const DashboardEmail = React.lazy(() =>
  import('../pages/dashboard/DashboardEmail'),
);
const DashboardLeasing = React.lazy(() =>
  import('../pages/dashboard/DashboardLeasing'),
);
const DocumentsUpload = React.lazy(() =>
  import('../pages/dashboard/DocumentsUpload'),
);
const Login = React.lazy(() => import('../pages/Authorization/Login'));

const emailView = React.lazy(() => import('../pages/dashboard/emailView'));
const emailSettings = React.lazy(() =>
  import('../pages/dashboard/emailSettings'),
);
const newEmail = React.lazy(() => import('../pages/dashboard/newEmail'));
const Leasing = React.lazy(() => import('../pages/static-pages/Leasing'));
const Freelancing = React.lazy(() =>
  import('../pages/static-pages/Freelancing'),
);
const Lawyers = React.lazy(() => import('../pages/static-pages/Lawyers'));
const Factoring = React.lazy(() => import('../pages/static-pages/Factoring'));

const routes: IRouteInterface[] = [
  {
    path: AppRoutes.HOME,
    component: Login,
    exact: true,
    name: 'Home',
    isAuthenticated: false,
  },
  {
    path: AppRoutes.LOGIN,
    component: Login,
    exact: true,
    name: 'Login',
    isAuthenticated: false,
  },
  {
    path: AppRoutes.REGISTER,
    component: Register,
    exact: true,
    name: 'Register',
    isAuthenticated: false,
  },
  {
    path: AppRoutes.FORGOTPASSWORD,
    component: ForgotPassword,
    exact: true,
    name: 'ForgotPassword',
    isAuthenticated: false,
  },
  {
    path: AppRoutes.CHANGEPASSWORD,
    component: ChangePassword,
    exact: true,
    name: 'ChangePassword',
    isAuthenticated: false,
  },
  {
    path: AppRoutes.EDITPROFILE,
    component: EditProfile,
    exact: true,
    name: 'EditProfile',
    isAuthenticated: true,
  },
  {
    path: AppRoutes.DASHBOARDPASSWORD,
    component: DashboardPassword,
    exact: true,
    name: 'DashboardPassword',
    isAuthenticated: true,
  },
  {
    path: AppRoutes.DASHBOARDEMAIL,
    component: DashboardEmail,
    exact: true,
    name: 'DashboardEmail',
    isAuthenticated: true,
  },
  {
    path: AppRoutes.DASHBOARDLEASING,
    component: DashboardLeasing,
    exact: true,
    name: 'DashboardLeasing',
    isAuthenticated: true,
  },
  {
    path: AppRoutes.DOCUMENTSUPLOAD,
    component: DocumentsUpload,
    exact: true,
    name: 'DocumentsUpload',
    isAuthenticated: true,
  },
  {
    path: AppRoutes.EMAILVIEW,
    component: emailView,
    exact: true,
    name: 'emailView',
    isAuthenticated: true,
  },
  {
    path: AppRoutes.EMAILSETTINGS,
    component: emailSettings,
    exact: true,
    name: 'emailSettings',
    isAuthenticated: true,
  },
  {
    path: AppRoutes.NEWEMAIL,
    component: newEmail,
    exact: true,
    name: 'newEmail',
    isAuthenticated: true,
  },
  {
    path: AppRoutes.LEASING,
    component: Leasing,
    exact: true,
    name: 'Leasing',
    isAuthenticated: true,
  },
  {
    path: AppRoutes.FREELANCING,
    component: Freelancing,
    exact: true,
    name: 'Freelancing',
    isAuthenticated: true,
  },
  {
    path: AppRoutes.LAWYERS,
    component: Lawyers,
    exact: true,
    name: 'Lawyers',
    isAuthenticated: true,
  },
  {
    path: AppRoutes.FACTORING,
    component: Factoring,
    exact: true,
    name: 'Factoring',
    isAuthenticated: true,
  },
];

export default routes;

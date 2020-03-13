import { ImainState } from './Store';
import { RouteProps } from 'react-router';

export interface IAppRoutesProps extends RouteProps {
  mainState?: ImainState;
}

export interface IAppRoutes {
  HOME: string;
  REGISTER: string;
  FORGOTPASSWORD: string;
  CHANGEPASSWORD: string;
  EDITPROFILE: string;
  DASHBOARDPASSWORD: string;
  DASHBOARDEMAIL: string;
  DASHBOARDLEASING: string;
  DOCUMENTSUPLOAD: string;
  LOGIN: string;
  EMAILVIEW: string;
  NEWEMAIL: string;
  LEASING: string;
  EMAILSETTINGS: string;
  FREELANCING: string;
  LAWYERS: string;
  FACTORING: string;
}

export interface IRouteInterface {
  path: string;
  component: any;
  exact: boolean;
  name: string;
  isAuthenticated: boolean;
}

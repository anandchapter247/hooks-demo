import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../layout/main';
import FullPageLoader from '../components/Loader/FullPageLoader';
import routes from './routes';
import Authenticated from './Authenticated';
import { IRouteInterface } from '../interfaces';
import Loginlayout from '../layout/main/loginLayout';

export interface IDefaultComponentProps {
  component: any;
  layout: any;
  exact: boolean;
  path: string;
}

const DefaultLayout: React.FC<IDefaultComponentProps> = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

const AppRoutesComponent: React.FC = (props: any) => {
  const { mainState } = props;
  return (
    <>
      {' '}
      {mainState && mainState.showLoader ? <FullPageLoader /> : null}
      <Switch>
        {routes.map((route: IRouteInterface, idx: number) => {
          return route.isAuthenticated ? (
            <Authenticated
              key={idx}
              path={route.path}
              exact={route.exact}
              component={route.component}
              layout={Layout}
            />
          ) : (
            <DefaultLayout
              key={idx}
              path={route.path}
              exact={route.exact}
              component={route.component}
              layout={Loginlayout}
            />
          );
        })}
      </Switch>
    </>
  );
};
export default AppRoutesComponent;

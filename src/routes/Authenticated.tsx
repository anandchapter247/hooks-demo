import React, { FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Route } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { AppRoutes } from '../config';

export const Authenticated: FunctionComponent<any> = (props: any) => {
  let isAuthenticated = true;
  let isLoading = false;
  let history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      history.push(AppRoutes.REGISTER);
    }
  });
  const {
    component: Component,
    layout: Layout,
    profileReducer,
    ...rest
  } = props;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout {...props}>
          {isLoading ? (
            <Loader />
          ) : isAuthenticated ? (
            <Component {...props} />
          ) : null}
        </Layout>
      )}
    />
  );
};

export default Authenticated;

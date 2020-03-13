import React, { FunctionComponent, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ILoginInterface } from '../../../interfaces/Auth';
import { LOGIN } from '../../../queries';
import { Formik, FormikProps, FormikHelpers } from 'formik';
import LoginForm from './loginForm';
import { LoginValidationSchema } from '../../../validations';
import { toast } from 'react-toastify';
import { logger } from '../../../helpers';
import { useHistory } from 'react-router';
import { AppRoutes } from '../../../config';

const Login: FunctionComponent = () => {
  let history = useHistory();
  const Token: string | null = localStorage.getItem('token');

  if (Token) {
    history.push(AppRoutes.EDITPROFILE);
  }

  const [caregiverLogin, { data }] = useMutation<any>(LOGIN);

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data.token);
      history.push(AppRoutes.EDITPROFILE);
    }
  }, [data, history]);

  const handleLogin = async (
    values: ILoginInterface,
    { setSubmitting }: FormikHelpers<ILoginInterface>,
  ) => {
    try {
      await caregiverLogin({
        variables: {
          authInput: {
            userName: values.userName,
            password: values.password,
          },
        },
      });
    } catch (error) {
      const message = error.message
        .replace('SequelizeValidationError: ', '')
        .replace('Validation error: ', '')
        .replace('GraphQL error: ', '');
      toast.error(message);
      logger(error);
    }
    setSubmitting(false);
  };
  const initialValues: ILoginInterface = {
    userName: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleLogin}
      validationSchema={LoginValidationSchema}
      render={(props: FormikProps<ILoginInterface>) => {
        return <LoginForm {...props} />;
      }}
    />
  );
};

export default Login;

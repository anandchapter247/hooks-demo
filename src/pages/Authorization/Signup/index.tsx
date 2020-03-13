import React, { FunctionComponent } from 'react';
import SignupForm from './signupForm';
import { Formik, FormikProps, FormikHelpers } from 'formik';
import { ISignupInterface } from '../../../interfaces';
import { toast } from 'react-toastify';
import { logger } from '../../../helpers';
import { AppRoutes } from '../../../config';
import { useHistory } from 'react-router';
import { SignupValidationSchema } from '../../../validations';

const Signup: FunctionComponent = () => {
  const Token: string | null = localStorage.getItem('token');
  let history = useHistory();

  if (Token) {
    history.push(AppRoutes.EDITPROFILE);
  }

  const handleRegister = async (
    values: ISignupInterface,
    { setSubmitting }: FormikHelpers<ISignupInterface>
  ) => {
    try {
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
  const initialValues: ISignupInterface = {
    userName: '',
    email: '',
    phoneNumber: ''
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleRegister}
      validationSchema={SignupValidationSchema}
      render={(props: FormikProps<ISignupInterface>) => {
        return <SignupForm {...props} />;
      }}
    />
  );
};

export default Signup;

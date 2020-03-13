import React, { FunctionComponent } from 'react';
import {
  Card,
  CardBody,
  Input,
  Form,
  FormGroup,
  Label,
  Button
} from 'reactstrap';
import { FormikProps } from 'formik';
import { ILoginInterface } from '../../../interfaces/Auth';

const LoginForm: FunctionComponent<FormikProps<ILoginInterface> & any> = (
  props: FormikProps<ILoginInterface> & any
) => {
  const {
    values: { userName, password },
    touched,
    errors,
    // isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <section className='middle-section'>
      <div className='login-section d-flex justify-content-center align-items-center'>
        <div className='container'>
          <div className='d-flex justify-content-center h-100 login-block'>
            {/* <Card className="login-img ">
              <img src={add} className="w-100" />
            </Card> */}
            <Card className='login-text'>
              <CardBody className=' '>
                <h3 className='font-weight-bold text-center login-heading'>
                  LOGIN
                </h3>
                <p className='text-center login-subheading'>
                  Welcome! Login to access the PlyCoco
                </p>
                <Form className='form-section'>
                  <FormGroup>
                    <Label for='exampleEmail' className='col-form-label'>
                      Username
                    </Label>
                    <div className={'position-relative'}>
                      <Input
                        type='userName'
                        name='userName'
                        id='exampleEmail'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={userName}
                        placeholder='Enter Username'
                        className={
                          errors.userName && touched.userName
                            ? 'text-input error text-capitalize'
                            : 'text-input text-capitalize'
                        }
                      />
                      {errors.userName && touched.userName && (
                        <div className='required-error'>{errors.userName}</div>
                      )}
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for='examplePassword' className='col-form-label'>
                      Password
                    </Label>
                    <div className={'position-relative'}>
                      <Input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={password}
                        id='examplePassword'
                        placeholder='Enter Password'
                        className={
                          errors.password && touched.password
                            ? 'text-input error text-capitalize'
                            : 'text-input text-capitalize'
                        }
                      />
                      {errors.password && touched.password && (
                        <div className='required-error'>{errors.password}</div>
                      )}
                    </div>
                  </FormGroup>
                  <FormGroup className='d-flex justify-content-end align-items-center'>
                    <a href='/forgot-password' className='forget-password-wrap text-right'>
                      Forgot Password ?
                    </a>
                  </FormGroup>
                  <div className='d-flex justify-content-between'>
                    <Button
                      onClick={() => handleSubmit()}
                      className='submit-button theme-btn '
                      color={' '}
                    >
                      Login
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;

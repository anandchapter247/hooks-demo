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

const ForgotPassword: FunctionComponent = () => {
  return (
    <section className='middle-section'>
      <div className='login-section d-flex justify-content-center align-items-center'>
        <div className='container'>
          <div className='d-flex justify-content-center h-100 login-block'>
            {/* <Card className="login-img ">
              <img src={add} className="w-100" />
            </Card> */}
            <Card className='login-text '>
              <CardBody className=' '>
                <h3 className='font-weight-bold text-center login-heading'>
                  FORGOT PASSWORD
                </h3>
                <p className='text-center login-subheading'>
                  Please enter your registered email to reset your password
                </p>
                <Form className='form-section'>
                  <FormGroup>
                    <Label for='exampleEmail' className='col-form-label'>
                      Email
                    </Label>
                    <Input
                      type='email'
                      name='email'
                      id='exampleEmail'
                      placeholder='Enter Email'
                    />
                  </FormGroup>
                  <FormGroup className='d-flex justify-content-end align-items-center'>
                    <a
                      href='/login'
                      className='forget-password-wrap text-right '
                    >
                      Back to login
                    </a>
                  </FormGroup>
                  <div className='d-flex justify-content-between'>
                    <Button className='submit-button theme-btn ' color={' '}>
                      Submit
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

export default ForgotPassword;

import React, { FunctionComponent } from 'react';
import { Col, Row, Input, Form, FormGroup, Label, Button } from 'reactstrap';
import { FormikProps } from 'formik';
import { ISignupInterface } from '../../../interfaces/Auth';

const SignupForm: FunctionComponent<FormikProps<ISignupInterface> & any> = (
  props: FormikProps<ISignupInterface> & any
) => {
  const {
    values: {
      userName,
      email,
      title,
      firstName,
      lastName,
      city,
      street,
      //   country,
      zipCode,
      dateOfBirth,
      phoneNumber,
      mobileNumber
    },
    touched,
    errors,
    // isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
console.log(errors,"errors");

  return (
    <section className='middle-section'>
      <div className='login-section d-flex justify-content-center align-items-center'>
        <div className='container'>
          <Form className='form-section'>
            <h1 className='form-big-heading text-center mb-4 pb-2'>
              Register as a <span className='theme-color'>Caregiver</span>
            </h1>
            <Row>
              <Col lg={'6'}>
                <h5 className='main-title'>
                  <span>Personal</span> Data
                </h5>
                <div className='form-card'>
                  <Row>
                    <Col lg={'12'}>
                      <FormGroup>
                        <Row>
                          <Col sm='4' className='label-col-wrap'>
                            <Label className='form-label col-form-label'>
                              Title
                              <span className='required'>*</span>
                            </Label>
                          </Col>
                          <Col sm='8'>
                            <div>
                              <Input
                                type='text'
                                name={'title'}
                                value={title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Title'
                                className={
                                  errors.title && touched.title
                                    ? 'text-input error text-capitalize'
                                    : 'text-input text-capitalize'
                                }
                              />
                              {errors.title && touched.title && (
                                <div className='required-error'>
                                  {errors.title}
                                </div>
                              )}
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={'12'}>
                      <FormGroup>
                        <Row>
                          <Col sm='4' className='label-col-wrap'>
                            <Label className='form-label col-form-label'>
                              First name
                              <span className='required'>*</span>
                            </Label>
                          </Col>
                          <Col sm='8'>
                            <div className="position-relative">
                              <Input
                                type='text'
                                name={'firstName'}
                                value={firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='First name'
                                className={
                                  errors.firstName && touched.firstName
                                    ? 'text-input error text-capitalize'
                                    : 'text-input text-capitalize'
                                }
                              />
                              {errors.firstName  && (
                                <div className='required-error'>
                                  {errors.firstName}
                                </div>
                              )}
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={'12'}>
                      <FormGroup>
                        <Row>
                          <Col sm='4' className='label-col-wrap'>
                            <Label className='form-label col-form-label'>
                              Surname
                              <span className='required'>*</span>
                            </Label>
                          </Col>
                          <Col sm='8'>
                            <div className="position-relative">
                              <Input
                                type='text'
                                name={'lastName'}
                                value={lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Surname'
                                className={
                                  errors.lastName && touched.lastName
                                    ? 'text-input error text-capitalize'
                                    : 'text-input text-capitalize'
                                }
                              />
                              {errors.lastName && (
                                <div className='required-error'>
                                  {errors.lastName}
                                </div>
                              )}
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={'12'}>
                      <FormGroup>
                        <Row>
                          <Col sm='4' className='label-col-wrap'>
                            <Label className='form-label col-form-label'>
                              Road
                              <span className='required'>*</span>
                            </Label>
                          </Col>
                          <Col sm='8'>
                            <div className="position-relative">
                              <Input
                                type='text'
                                name={'street'}
                                value={street}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Road'
                                className={
                                  errors.street && touched.street
                                    ? 'text-input error text-capitalize'
                                    : 'text-input text-capitalize'
                                }
                              />
                              {errors.street && touched.street && (
                                <div className='required-error'>
                                  {errors.street}
                                </div>
                              )}
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={'12'}>
                      <FormGroup>
                        <Row>
                          <Col sm='4' className='label-col-wrap'>
                            <Label className='form-label col-form-label '>
                              Place
                              <span className='required'>*</span>
                            </Label>
                          </Col>
                          <Col sm='8'>
                            <div>
                              <Input
                                type='text'
                                name={'city'}
                                value={city}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Place'
                                className={
                                  errors.city && touched.city
                                    ? 'text-input error text-capitalize'
                                    : 'text-input text-capitalize'
                                }
                              />
                              {errors.city && touched.city && (
                                <div className='required-error'>
                                  {errors.city}
                                </div>
                              )}
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={'12'}>
                      <FormGroup>
                        <Row>
                          <Col sm='4' className='label-col-wrap'>
                            <Label className='form-label col-form-label '>
                              Post Code
                              <span className='required'>*</span>
                            </Label>
                          </Col>
                          <Col sm='8'>
                            <div>
                              <Input
                                type='text'
                                name={'zipCode'}
                                value={zipCode}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Post Code'
                                className={
                                  errors.zipCode && touched.zipCode
                                    ? 'text-input error text-capitalize'
                                    : 'text-input text-capitalize'
                                }
                              />
                              {errors.zipCode && touched.zipCode && (
                                <div className='required-error'>
                                  {errors.zipCode}
                                </div>
                              )}
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={'12'}>
                      <FormGroup>
                        <Row>
                          <Col sm='4' className='label-col-wrap'>
                            <Label className='form-label col-form-label '>
                              Country
                              <span className='required'>*</span>
                            </Label>
                          </Col>
                          <Col sm='8'>
                            <div>
                              <Input
                                type='select'
                                name='select'
                                id='exampleSelect'
                              >
                                <option>Germany</option>
                                <option>India</option>
                                <option>UK</option>
                                <option>USA</option>
                                <option>china</option>
                              </Input>
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={'12'}>
                      <FormGroup>
                        <Row>
                          <Col sm='4' className='label-col-wrap'>
                            <Label className='form-label col-form-label '>
                              Date of birth
                              <span className='required'>*</span>
                            </Label>
                          </Col>
                          <Col sm='8'>
                            <Input
                              type='text'
                              name={'dateOfBirth'}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={dateOfBirth}
                              placeholder='Date of birth'
                              className={
                                errors.dateOfBirth && touched.dateOfBirth
                                  ? 'text-input error text-capitalize'
                                  : 'text-input text-capitalize'
                              }
                            />
                            {errors.dateOfBirth && touched.dateOfBirth && (
                              <div className='required-error'>
                                {errors.dateOfBirth}
                              </div>
                            )}
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col lg={'6'}>
                <h5 className='main-title'>
                  <span>Reachability</span>
                </h5>
                <div className='form-card minheight-auto'>
                  <Row>
                    <Col lg={'12'}>
                      <FormGroup>
                        <Row>
                          <Col sm='4' className='label-col-wrap'>
                            <Label className='form-label col-form-label'>
                              Phone
                              <span className='required'>*</span>
                            </Label>
                          </Col>
                          <Col sm='8'>
                            <div className="position-relative">
                              <Input
                                type='text'
                                name={'phoneNumber'}
                                value={phoneNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder=' Phone'
                                className={
                                  errors.phoneNumber && touched.phoneNumber
                                    ? 'text-input error text-capitalize'
                                    : 'text-input text-capitalize'
                                }
                              />
                              {errors.phoneNumber && touched.phoneNumber && (
                                <div className='required-error'>
                                  {errors.phoneNumber}
                                </div>
                              )}
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={'12'}>
                      <FormGroup>
                        <Row>
                          <Col sm='4' className='label-col-wrap'>
                            <Label className='form-label col-form-label'>
                              Mobile Phone
                              {/* <span className="required">*</span> */}
                            </Label>
                          </Col>
                          <Col sm='8'>
                            <div className="position-relative">
                              <Input
                                type='text'
                                name={'mobileNumber'}
                                value={mobileNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Mobile Phone'
                                className={
                                  errors.mobileNumber && touched.mobileNumber
                                    ? 'text-input error text-capitalize'
                                    : 'text-input text-capitalize'
                                }
                              />
                              {errors.mobileNumber && touched.mobileNumber && (
                                <div className='required-error'>
                                  {errors.mobileNumber}
                                </div>
                              )}
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={'12'}>
                      <FormGroup>
                        <Row>
                          <Col sm='4' className='label-col-wrap'>
                            <Label className='form-label col-form-label'>
                              E-mail
                              <span className='required'>*</span>
                            </Label>
                          </Col>
                          <Col sm='8'>
                            <div className="position-relative">
                              <Input
                                type='text'
                                name={'email'}
                                value={email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='E-mail'
                                className={
                                  errors.email && touched.email
                                    ? 'text-input error text-capitalize'
                                    : 'text-input text-capitalize'
                                }
                              />
                              {errors.email && touched.email && (
                                <div className='required-error'>
                                  {errors.email}
                                </div>
                              )}
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <div>
                  <h5 className='main-title mb-1 pt-2'>
                    <span>Set</span> a username
                  </h5>
                  <p className='mb-0 sub-title'>Pick a username.</p>
                  <p className='sub-title mb-3'>
                    You can then log in with this user name and the password
                    that you receive by email.
                  </p>
                  <div className='form-card'>
                    <Row>
                      <Col lg={'12'}>
                        <FormGroup>
                          <Row>
                            <Col sm='4' className='label-col-wrap'>
                              <Label className='form-label col-form-label'>
                                User name
                                <span className='required'>*</span>
                              </Label>
                            </Col>
                            <Col sm='8'>
                              <div className="position-relative">
                                <Input
                                  type='text'
                                  name='userName'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={userName}
                                  placeholder='User name'
                                  className={
                                    errors.userName && touched.userName
                                      ? 'text-input error text-capitalize'
                                      : 'text-input text-capitalize'
                                  }
                                />
                                {errors.userName && touched.userName && (
                                  <div className='required-error'>
                                    {errors.userName}
                                  </div>
                                )}
                              </div>
                            </Col>
                          </Row>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col sm={'12'} className='text-right'>
                <Button
                  onClick={handleSubmit}
                  className='submit-button theme-btn'
                >
                  Register
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;

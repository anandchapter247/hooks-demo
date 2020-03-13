import React, { FunctionComponent } from 'react';
import { languageTranslation } from '../../helpers';
import {
  Card ,CardBody,
  Input, Form, FormGroup, Label, Button
} from 'reactstrap';

const ChangePassword: FunctionComponent = () => {
  return (
    <section className="middle-section">
      <div className="login-section d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="d-flex justify-content-center h-100 login-block reset-section">
           
            <Card className="login-text ">
              <CardBody className=" ">
                <h3 className="font-weight-bold text-center  login-heading">
                  {languageTranslation("RESET_PASSWORD")} 
                </h3>
                <p className="text-center login-subheading">
                  {languageTranslation("RESET_PASSWORD_MESSAGE")}
                </p>
                <Form className="form-section">
                  <FormGroup>
                    <Label for="exampleEmail" className="col-form-label">
                      {" "}
                      {languageTranslation("PASSWORD")}
                      
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder={languageTranslation("PASSWORD")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail" className="col-form-label">
                      {languageTranslation("CONFIRM_PASSWORD")}
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder={languageTranslation("CONFIRM_PASSWORD")}
                    />
                  </FormGroup>
                  <FormGroup className="d-flex justify-content-end align-items-center">
                    <a href="/" className="forget-password-wrap text-right ">
                      {languageTranslation("BACK_TO_LOGIN")}
                    </a>
                  </FormGroup>
                  <div className="d-flex justify-content-between">
                    <Button
                      className="submit-button theme-btn "
                      color={" "}
                    >
                      {languageTranslation("RESET_PASSWORD")}
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

export default ChangePassword;

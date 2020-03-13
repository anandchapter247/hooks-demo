import React, { FunctionComponent } from 'react';
import { languageTranslation } from '../../helpers';
import {
  Row,
  Col,
  Input, Form, FormGroup, Label, Button
} from 'reactstrap';

const DashboardPassword: FunctionComponent = () => {
  return (
    <section className="middle-section">
      <div className="dashboard-section ">
        <Form className="form-section">
          <h5 className="main-title ">
            {languageTranslation("CHANGE_PASSWORD")}
          </h5>
          <Row>
            <Col lg={"12"}>
              <div className="form-card full-card">
                <Row>
                  <Col lg={"6"}>
                    <Row>
                      <Col lg={"12"}>
                        <FormGroup>
                          <Row>
                            <Col sm="4" className="label-col-wrap">
                              <Label className="form-label col-form-label">
                                {languageTranslation("OLD PASSWORD")}
                                <span className="required">*</span>
                              </Label>
                            </Col>
                            <Col sm="8">
                              <div>
                                <Input
                                  type="text"
                                  name={"First name"}
                                  placeholder={languageTranslation(
                                    "OLD PASSWORD"
                                  )}
                                  className="width-common"
                                />
                              </div>
                            </Col>
                          </Row>
                        </FormGroup>
                      </Col>
                      <Col lg={"12"}>
                        <FormGroup>
                          <Row>
                            <Col sm="4" className="label-col-wrap">
                              <Label className="form-label col-form-label">
                                {languageTranslation("CG_MENU_NEW_PASSWORD")}
                                <span className="required">*</span>
                              </Label>
                            </Col>
                            <Col sm="8">
                              <div>
                                <Input
                                  type="text"
                                  name={"First name"}
                                  placeholder= {languageTranslation("CG_MENU_NEW_PASSWORD")}
                                  className="width-common"
                                />
                              </div>
                            </Col>
                          </Row>
                        </FormGroup>
                      </Col>
                      <Col lg={"12"}>
                        <FormGroup>
                          <Row>
                            <Col sm="4" className="label-col-wrap">
                              <Label className="form-label col-form-label">
                                {languageTranslation("CONFIRM_PASSWORD")}
                                <span className="required">*</span>
                              </Label>
                            </Col>
                            <Col sm="8">
                              <div>
                                <Input
                                  type="text"
                                  name={"First name"}
                                  placeholder={languageTranslation(
                                    "CONFIRM_PASSWORD"
                                  )}
                                  className="width-common"
                                />
                              </div>
                            </Col>
                          </Row>
                        </FormGroup>
                      </Col>
                      <Col sm={"4"} className=" "></Col>
                      <Col sm={"8"} className=" ">
                        <Button className="submit-button theme-btn" color={" "}>
                          {languageTranslation("SAVE_BUTTON")}
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <p className="hint-message ">
            {languageTranslation("CHANGE_PASSWORD_SUGGESTION")}
          </p>
        </Form>
      </div>
    </section>
  );
};

export default DashboardPassword;

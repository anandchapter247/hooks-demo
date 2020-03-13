import React, { Component } from 'react';
import { languageTranslation } from '../../helpers';
import {
 
  Row,
  Col,
  Input, Form, FormGroup, Label, Button
} from 'reactstrap';

class DashboardLeasing extends Component<any> {

  render() {
    // const {
    //   location: { pathname }
    // } = this.props;
    return (
      <section className="middle-section">
        <div className="dashboard-section ">
          <Form className="form-section">
            <Row>
              <Col lg={"12"}>
                <h5 className="main-title ">{languageTranslation("LEASING_PERSONAL_DATA")} </h5>
                <div className="form-card">
                  <Row>
                    <Col lg={"6"}>
                      <FormGroup>
                        <Row>
                          <Col sm="4">
                            <Label className="form-label col-form-label ">
                              {languageTranslation("CAREGIVER_PLACE_OF_BIRTH_PLACEHOLDER")}
                              <span className="required">*</span>
                            </Label>
                          </Col>
                          <Col sm="8">
                            <div>
                              <Input
                                type="text"
                                name={"placeOfBirth"}
                                placeholder={languageTranslation("CAREGIVER_PLACE_OF_BIRTH_PLACEHOLDER")}
                              />
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={"6"}>
                      <FormGroup>
                        <Row>
                          <Col sm="4">
                            <Label className="form-label col-form-label">
                              {languageTranslation("CAREGIVER_BIRTH_NAME_LABEL")}

                              <br />
                              <small>(only if different from family name)</small>
                              <span className="required">*</span>
                            </Label>
                          </Col>
                          <Col sm="8">
                            <div>
                              <Input
                                type="text"
                                name={"birthName"}
                                placeholder={languageTranslation("CAREGIVER_BIRTH_NAME_LABEL")}
                                className="width-common"
                              />
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={"6"}>
                      <FormGroup>
                        <Row>
                          <Col sm="4">
                            <Label className="form-label col-form-label">
                              {languageTranslation("CAREGIVER_NATIONALITY_LABEL")}
                              {""} <span className="required">*</span>
                            </Label>
                          </Col>
                          <Col sm="8">
                            <div>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option>Select Nationality</option>
                                <option>Mrs</option>
                              </Input>
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <Row>
                          <Col sm="4">
                            <Label className="form-label col-form-label ">
                              {languageTranslation(
                                "CAREGIVER_MARITAL_STATUS_LABEL"
                              )}
                              {""}
                              <span className="required">*</span>
                            </Label>
                          </Col>
                          <Col sm="8">
                            <div>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option>Select Status</option>
                                <option>Mrs</option>
                              </Input>
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={"6"}>
                      <FormGroup>
                        <Row>
                          <Col sm="4">
                            <Label className="form-label col-form-label ">
                              {languageTranslation("CAREGIVER_CHILDREN_LABEL")}

                              <br />
                              <small>(0 if none)</small>
                              <span className="required">*</span>
                            </Label>
                          </Col>
                          <Col sm="8">
                            <div>
                              <Input
                                type="text"
                                name={"children"}
                                placeholder={languageTranslation("CAREGIVER_CHILDREN_LABEL")}
                              />
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>

                    <Col lg={"6"}>
                      <FormGroup>
                        <Row>
                          <Col sm="4">
                            <Label className="form-label col-form-label ">
                              {languageTranslation("FACTOR_CHILD_ALLOWANCE")}
                              <br />
                              <small>(0 if none)</small>
                              <span className="required">*</span>
                            </Label>
                          </Col>
                          <Col sm="8">
                            <div>
                              {" "}
                              <Input
                                type="text"
                                name={"factorChildAllowance"}
                                placeholder={languageTranslation("FACTOR_CHILD_ALLOWANCE")}
                                className="width-common"
                              />
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={"6"}>
                      <FormGroup>
                        <Row>
                          <Col sm="4">
                            <Label className="form-label col-form-label ">
                              {languageTranslation("STATUS")}
                              <span className="required">*</span>
                            </Label>
                          </Col>
                          <Col sm="8">
                            <div>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option>Select Status</option>
                                <option>Mrs</option>
                              </Input>
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={"6"}>
                      <FormGroup>
                        <Row>
                          <Col sm="4">
                            <Label className="form-label col-form-label ">
                              {languageTranslation("CAREGIVER_TAX_BRACKET_LABEL")}
                              <span className="required">*</span>
                            </Label>
                          </Col>
                          <Col sm="8">
                            <div>
                              <Input
                                type="text"
                                name={"taxBracket"}
                                placeholder={languageTranslation("CAREGIVER_TAX_BRACKET_LABEL")}
                              />
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>

                    <Col lg={"6"}>
                      <FormGroup>
                        <Row>
                          <Col sm="4">
                            <Label className="form-label col-form-label">
                              {languageTranslation(
                                "CAREGIVER_HEALTH_INSURANCE_TYPE_LABEL"
                              )}
                              <span className="required">*</span>
                            </Label>
                          </Col>
                          <Col sm="8">
                            <div>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option>Select Health Insurance Type</option>
                                <option>Mrs</option>
                              </Input>
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={"6"}>
                      <FormGroup>
                        <Row>
                          <Col sm="4">
                            <Label className="form-label col-form-label ">
                              {languageTranslation("HEALTH_INSURANCE_PROVIDER")}
                              <span className="required">*</span>
                            </Label>
                          </Col>
                          <Col sm="8">
                            <div>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option>Select Health Insurance Provider</option>
                                <option>Mrs</option>
                              </Input>
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={"6"}>
                      <FormGroup>
                        <Row>
                          <Col sm="4">
                            <Label className="form-label col-form-label ">
                              {languageTranslation("CAREGIVER_SOCIAL_SECURITY_NUMBER_LABEL")}
                              <br />
                              <small>(example: 65170839J003)</small>
                              <span className="required">*</span>
                            </Label>
                          </Col>
                          <Col sm="8">
                            <div>
                              <Input
                                type="text"
                                name={"socialSecurityNumber"}
                                placeholder=" Social Security Number"
                              />
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={"6"}>
                      <FormGroup>
                        <Row>
                          <Col sm="4">
                            <Label className="form-label col-form-label ">
                              {languageTranslation("CAREGIVER_RELIGION_PLACEHOLDER")}
                            </Label>
                          </Col>
                          <Col sm="8">
                            <div>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option>Select Religion</option>
                                <option>Mrs</option>
                              </Input>
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={"6"}>
                      <FormGroup>
                        <Row>
                          <Col sm="4">
                            <Label className="form-label col-form-label ">
                              {languageTranslation("CAREGIVER_CONTROL_ID_LABEL")}
                              <span className="required">*</span>
                            </Label>
                          </Col>
                          <Col sm="8">
                            <div>
                              <Input
                                type="text"
                                name={"controlId"}
                                placeholder={languageTranslation("CAREGIVER_CONTROL_ID_LABEL")}
                              />
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={"6"}>
                      <FormGroup>
                        <Row>
                          <Col sm="4">
                            <Label className="form-label col-form-label">
                              {languageTranslation(
                                "CAREGIVER_PREOCCUPATION_LABEL"
                              )}
                              <span className="required">*</span>
                            </Label>
                          </Col>
                          <Col sm="8">
                            <div>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option>Select Occupation</option>
                                <option>Mrs</option>
                              </Input>
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col lg={"6"}>
                      <FormGroup>
                        <Row>
                          <Col sm="4">
                            <Label className="form-label col-form-label ">
                              {languageTranslation("CAREGIVER_PAYROLL IBAN_LABEL")}
                              <br />
                              <small>
                                (only necessary if an account other than the one
                                in the profile is required.)
                            </small>
                            </Label>
                          </Col>
                          <Col sm="8">
                            <Input
                              type="text"
                              name={"PayrollIBAN"}
                              placeholder={languageTranslation("CAREGIVER_PAYROLL IBAN_LABEL")}
                            />
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col sm={"12"} className="text-right">
                <Button className="submit-button theme-btn" color={"link"}>
                  {languageTranslation("SAVE_BUTTON")}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </section>
    );
  }
};

export default DashboardLeasing;

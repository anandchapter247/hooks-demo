import React, { FunctionComponent } from 'react';
import { languageTranslation } from '../../helpers';
import {

  Row,
  Col,
  CustomInput,
  Input, Form, FormGroup, Label, Button
} from 'reactstrap';

const EditProfile: FunctionComponent = () => {
  return (
    <section className="middle-section">
      <div className="dashboard-section">
        <Form className="form-section">
          <h5 className="main-title"> {languageTranslation("EDIT_PROFILE")}</h5>

          <Row>
            <Col lg={"6"}>
              <div className="form-card full-card">
                <Row>
                  <Col lg={"12"}>
                    <FormGroup>
                      <Row>
                        <Col sm="4" className="label-col-wrap">
                          <Label className="form-label col-form-label">
                            {languageTranslation("SALUTATION")}
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
                              <option>Mr</option>
                              <option>Mrs</option>
                            </Input>
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
                            {languageTranslation("FIRST_NAME")}
                            <span className="required">*</span>
                          </Label>
                        </Col>
                        <Col sm="8">
                          <div>
                            <Input
                              type="text"
                              name={"First name"}
                              placeholder={languageTranslation("FIRST_NAME")}
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
                            {languageTranslation("SURNAME")}
                            <span className="required">*</span>
                          </Label>
                        </Col>
                        <Col sm="8">
                          <div>
                            <Input
                              type="text"
                              name={"First name"}
                              placeholder={languageTranslation("SURNAME")}
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
                            {languageTranslation("ROAD")}
                            <span className="required">*</span>
                          </Label>
                        </Col>
                        <Col sm="8">
                          <div>
                            <Input
                              type="text"
                              name={"lastName"}
                              placeholder={languageTranslation("ROAD")}
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
                          <Label className="form-label col-form-label ">
                            {languageTranslation("PLACE")}
                            <span className="required">*</span>
                          </Label>
                        </Col>
                        <Col sm="8">
                          <div>
                            <Input
                              type="text"
                              name={"address1"}
                              placeholder={languageTranslation("PLACE")}
                              className=" width-common"
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
                          <Label className="form-label col-form-label ">
                            {languageTranslation("POST_CODE")}
                          </Label>
                        </Col>
                        <Col sm="8">
                          <div>
                            <Input
                              type="text"
                              name={"address2"}
                              placeholder={languageTranslation("POST_CODE")}
                              className=" width-common"
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
                          <Label className="form-label col-form-label ">
                            {languageTranslation("COUNTRY")}
                          </Label>
                        </Col>
                        <Col sm="8">
                          <div>
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
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
                  <Col lg={"12"}>
                    <FormGroup>
                      <Row>
                        <Col sm="4" className="label-col-wrap">
                          <Label className="form-label col-form-label ">
                            {languageTranslation("DATE_OF_BIRTH")}
                          </Label>
                        </Col>
                        <Col sm="8">
                          <FormGroup>
                            <div>
                              <Input
                                type="text"
                                name={"address2"}
                                placeholder={languageTranslation(
                                  "DATE_OF_BIRTH"
                                )}
                                className=" width-common"
                              />
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg={"6"}>
              {/* <h5 className="main-title"><span className="grey-color">Reachability</span></h5> */}
              <div className="form-card minheight-auto">
                <Row>
                  <Col lg={"12"}>
                    <FormGroup>
                      <Row>
                        <Col sm="4" className="label-col-wrap">
                          <Label className="form-label col-form-label">
                            {languageTranslation("PHONE")}
                            <span className="required">*</span>
                          </Label>
                        </Col>
                        <Col sm="8">
                          <div>
                            <Input
                              type="text"
                              name={"phone"}
                              placeholder={languageTranslation("PHONE")}
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
                            {languageTranslation("MOBILE_PHONE")}
                            <span className="required">*</span>
                          </Label>
                        </Col>
                        <Col sm="8">
                          <div>
                            <Input
                              type="text"
                              name={"mobilePhone"}
                              placeholder={languageTranslation("MOBILE_PHONE")}
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
                            {languageTranslation("EMAIL")}
                            <span className="required">*</span>
                          </Label>
                        </Col>
                        <Col sm="8">
                          <div>
                            <Input
                              type="text"
                              name={"email"}
                              placeholder={languageTranslation("EMAIL")}
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
                            {languageTranslation("DRIVING_LICENSE_AVAILABLE")}
                            <span className="required">*</span>
                          </Label>
                        </Col>
                        <Col
                          sm="8"
                          className="d-flex justify-content-between align-items-center"
                        >
                          <div className="custom-radio-block">
                            <FormGroup check inline>
                              <CustomInput
                                type="radio"
                                id="yes"
                                name="driversLicense"
                                label="Yes"
                              />
                            </FormGroup>
                            <FormGroup check inline>
                              <CustomInput
                                type="radio"
                                id="no"
                                name="driversLicense"
                                label="No"
                              />
                            </FormGroup>
                          </div>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                  <Col lg={"12"}>
                    <FormGroup>
                      <Row>
                        <Col sm="4">
                          <Label className="form-label col-form-label">
                            {languageTranslation(
                              "CAREGIVER_DRIVER_LICENSE_NUMBER_LABEL"
                            )}
                            <span className="required">*</span>
                          </Label>
                        </Col>
                        <Col sm="8">
                          <div>
                            <Input
                              type="text"
                              name="driverLicenseNumber"
                              placeholder={languageTranslation(
                                "CAREGIVER_DRIVER_LICENSE_NUMBER_LABEL"
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
                            {languageTranslation(
                              "CAREGIVER_OWN_VEHICLE_AVAILABLE_LABEL"
                            )}
                            <span className="required">*</span>
                          </Label>
                        </Col>
                        <Col
                          sm="8"
                          className="d-flex justify-content-between align-items-center"
                        >
                          <div className="custom-radio-block">
                            <FormGroup check inline>
                              <CustomInput
                                type="radio"
                                id="yes_v"
                                name="vehicleavailable"
                                label="Yes"
                              />
                            </FormGroup>
                            <FormGroup check inline>
                              <CustomInput
                                type="radio"
                                id="no_v"
                                name={languageTranslation(
                                  "CAREGIVER_OWN_VEHICLE_AVAILABLE_LABEL"
                                )}
                                label="No"
                              />
                            </FormGroup>
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
                            {languageTranslation(
                              "EMPLOYEES_SUBJECT_TO_SOCIAL_SECURITY_CONTRIBUTIONS"
                            )}
                            <span className="required">*</span>
                          </Label>
                        </Col>
                        <Col
                          sm="8"
                          className="d-flex justify-content-between align-items-center"
                        >
                          <FormGroup className=" m-0">
                            <div className="custom-control custom-checkbox my-1 mr-sm-2">
                              <Input
                                type="checkbox"
                                className="custom-control-input"
                                id="OwnVehicle"
                              />
                              <Label
                                className="custom-control-label"
                                for={"OwnVehicle"}
                              ></Label>
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                  <Col lg={"12"}>
                    <FormGroup>
                      <Row>
                        <Col sm="4" className="label-col-wrap">
                          <Label className="form-label col-form-label">
                            {languageTranslation("CAREGIVER_TAX_NUMBER_LABEL")}
                            <span className="required">*</span>
                          </Label>
                        </Col>
                        <Col sm="8">
                          <div>
                            <Input
                              type="text"
                              name={"email"}
                              placeholder={languageTranslation(
                                "CAREGIVER_TAX_NUMBER_LABEL"
                              )}
                              className="width-common"
                            />
                          </div>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={"12"}>
              <h5 className="main-title">
                {languageTranslation("OTHER_INFORMATION")}
              </h5>
              <div className="form-card minheight-auto p-0 form-col-inputs-feilds-wrap">
                <Row>
                  <Col lg={"6"}>
                    <FormGroup>
                      <Row>
                        <Col sm="4" className="label-col-wrap">
                          <Label className="form-label col-form-label">
                            {languageTranslation("CAREGIVER_LEGAL_FORM_LABEL")}
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
                              <option>
                                UG (entrepreneurship limited liability)
                              </option>
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
                  <Col lg={"6"}></Col>
                  <Col lg={"6"}>
                    <FormGroup className="pb-0 ">
                      <Row>
                        <Col sm="4" className="label-col-wrap">
                          <Label className="form-label col-form-label">
                            {languageTranslation(
                              "CAREGIVER_COMPANY_NAME_LABEL"
                            )}
                            <span className="d-inline-block">
                              (incl. GmbH, UG)
                            </span>
                            <span className="required">*</span>
                          </Label>
                        </Col>
                        <Col sm="8">
                          <div>
                            <Input
                              type="text"
                              name={"phone"}
                              placeholder={languageTranslation(
                                "CAREGIVER_COMPANY_NAME_LABEL"
                              )}
                              className="width-common"
                            />
                          </div>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                  <Col lg={"6"}>
                    <FormGroup className="pb-0">
                      <Row>
                        <Col sm="4" className="label-col-wrap">
                          <Label className="form-label col-form-label">
                            {languageTranslation(
                              "CAREGIVER_EXECUTIVE_DIRECTOR_LABEL"
                            )}
                            <span className="required">*</span>
                          </Label>
                        </Col>
                        <Col sm="8">
                          <div>
                            <Input
                              type="text"
                              name={"phone"}
                              placeholder={languageTranslation(
                                "CAREGIVER_EXECUTIVE_DIRECTOR_LABEL"
                              )}
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
                        <Col sm="4" className="label-col-wrap">
                          <Label className="form-label col-form-label">
                        {languageTranslation("REGISTER_COURT")}
                            <span className="required">*</span>
                          </Label>
                        </Col>
                        <Col sm="8">
                          <div>
                            <Input
                              type="text"
                              name={"phone"}
                              placeholder={languageTranslation("REGISTER_COURT")}
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
                        <Col sm="4" className="label-col-wrap">
                          <Label className="form-label col-form-label">
                            {languageTranslation(
                              "CAREGIVER_REGISTRATION_NUMBER_LABEL"
                            )}
                            <span className="required">*</span>
                          </Label>
                        </Col>
                        <Col sm="8">
                          <div>
                            <Input
                              type="text"
                              name={"phone"}
                              placeholder=" Registration Number	"
                              className="width-common"
                            />
                          </div>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg={"12"}>
              <div>
                <h5 className="main-title mb-1 pt-2">
                  {languageTranslation("CAREGIVER_REMARKS_LABEL")}
                </h5>
                <p className="sub-title mb-3">
                  Notes that should be observed when mediating. If you have any
                  questions, please send us an email.
                </p>
                <div className="form-card">
                  <Row>
                    <Col lg={"12"}>
                      <FormGroup className="mb-0">
                        <Row>
                          <Col sm="2" className="label-col-wrap">
                            <Label className="form-label col-form-label">
                              {languageTranslation("CAREGIVER_REMARKS_LABEL")}
                              <span className="required">*</span>
                            </Label>
                          </Col>
                          <Col sm="10">
                            <div>
                              <Input
                                type="textarea"
                                name="driverLicenseNumber"
                                placeholder={languageTranslation(
                                  "CAREGIVER_REMARKS_LABEL"
                                )}
                                rows="2"
                                className={`textarea-custom `}
                              />
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <Col lg={"12"}>
              <div>
                <h5 className="main-title mb-1 pt-2">
                  {languageTranslation("MEDIATION")}
                </h5>

                <div className="form-card">
                  <Row>
                    <Col lg={"12"}>
                      <FormGroup className="mb-0">
                        <Row>
                          <Col sm="5" className="label-col-wrap">
                            <Label className="form-label col-form-label">
                              {languageTranslation("NATIONWIDE-PLACEMENT_OTHERWISE_ONLY_HOME_REGION")}
                              <span className="required">*</span>
                            </Label>
                          </Col>
                          <Col
                            sm="7"
                            className="d-flex justify-content-between align-items-center"
                          >
                            <FormGroup className="m-0">
                              <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                <Input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="NationwidePlacement"
                                />
                                <Label
                                  className="custom-control-label"
                                  for={"NationwidePlacement"}
                                ></Label>
                              </div>
                            </FormGroup>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <Col sm={"12"} className="text-right">
              <Button className="submit-button theme-btn btn px-5" color={" "}>
                 {languageTranslation("SAVE_BUTTON")}
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </section>
  );
};

export default EditProfile;

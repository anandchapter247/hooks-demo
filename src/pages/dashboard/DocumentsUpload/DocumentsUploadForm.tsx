import React, { FunctionComponent } from "react";
import upload from "../../../assets/img/upload.svg";
import {
  Col, Row, FormGroup,
  Label,
  Input,
  Button,
  Collapse,
  Form,
  CardBody,
  Card,
} from "reactstrap";
import { languageTranslation } from "../../../helpers";
import { FormikProps } from "formik";
import { IDocumentsUploadFormInterface } from "../../../interfaces/DocumentsUpload";

const DocumentsUploadForm: FunctionComponent<FormikProps<IDocumentsUploadFormInterface> & any> = (
  props: FormikProps<IDocumentsUploadFormInterface> & any
) => {

  const {
    collapse,
    setCollapse,
    status,
    setStatus
  } = props;


  const onEntered = () => setStatus('Opened');
  const onExited = () => setStatus('Closed');

  const toggle = () => setCollapse(!collapse);

  const handleImageChange = async () => {
    console.log('check ');
  }

  return (
    <>
      <div className="dashboard-section">
        <div className="form-section">

          {/* PERSONAL DOCUMENTS SECTION */}

          <h5 className="main-title mb-1 pt-2">
            {languageTranslation("PERSONAL_DOCUMENTS")}
          </h5>
          <p className="sub-title">
            {languageTranslation("PERSONAL_DOCUMENTS_DOCUMENTS_SUB_HEASING")}
          </p>

          <div className="document-card d-flex align-items-center mb-2 mr-1">
            <div className="file-upload-wrap">
              {/* <div className="close-img">
                          <img src={closeWhite} alt={upload} className="w-100" />
                        </div> */}
              <div className="file-upload-img">
                <img src={upload} alt={upload} className="w-100" />
              </div>
              <div className="file-upload-text">
                <div className="file-upload-text-heading">
                  {languageTranslation("PERSONAL_DOCUMENTS_LIABILITY")}
                </div>
                <div className="file-upload-text-sub-heading">Q9.pdf</div>
              </div>
              <div className="file-upload-size-clear">
                <Button color="danger">{languageTranslation("CLEAR")}</Button>
              </div>
            </div>
          </div>

          <div className="document-card d-flex align-items-center mr-1">
            <div className="file-upload-wrap upload-document-wrap">
              {/* <div className="close-img">
                          <img src={closeWhite} alt={upload} className="w-100" />
                        </div> */}
              <div className="file-upload-img">
                <div className="file-preview-section p-0">
                  <div className="fileinput-preview d-flex align-items-center justify-content-center">
                    <div className="file-upload">
                      <label className="file-upload-label">
                        <div className="icon-upload">
                          <i className="cui-cloud-upload"></i>
                        </div>
                        <div className="icon-text">
                          {languageTranslation("PERSONAL_DOCUMENTS_UPLOAD")}
                        </div>
                      </label>
                      <input
                        className="file-upload-input"
                        type="file"
                        accept="image/*"
                        id="gallery-photo-add"
                        placeholder="Add Profile Image"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="file-upload-text">
                <div className={`file-upload-text-heading`}>
                  {languageTranslation("CV_VITA")}
                </div>
                <div className="file-upload-text-sub-heading">
                  <div
                    onClick={toggle}
                    className={`get-doc-heading ${
                      status === "Opened" ? "text-open" : "text-close"
                      }`}
                  >
                    {" "}
                    {languageTranslation("HOW_DO_I_GET_THIS_DOCUMENT")}
                  </div>
                  <Collapse
                    isOpen={collapse}
                    onEntered={onEntered}
                    onExited={onExited}
                  >
                    <Card className="bg-light-gray mt-1">
                      <CardBody>
                        <p>
                          You already created a resume with your last
                          application. Update it and send us a copy. The CV
                          helps us find the right jobs for you.
                        </p>
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              </div>
              <div className="file-upload-size-clear">
                <Button color="danger">{languageTranslation("CLEAR")}</Button>
              </div>
            </div>
          </div>

          <div className="document-card d-flex align-items-center mr-1">
            <div className="file-upload-wrap upload-document-wrap">
              {/* <div className="close-img">
                          <img src={closeWhite} alt={upload} className="w-100" />
                        </div> */}
              <div className="file-upload-img">
                <div className="file-preview-section p-0">
                  <div className="fileinput-preview d-flex align-items-center justify-content-center">
                    <div className="file-upload">
                      <label className="file-upload-label">
                        <div className="icon-upload">
                          <i className="cui-cloud-upload"></i>
                        </div>
                        <div className="icon-text">
                          {languageTranslation("PERSONAL_DOCUMENTS_UPLOAD")}
                        </div>
                      </label>
                      <input
                        className="file-upload-input"
                        type="file"
                        accept="image/*"
                        id="gallery-photo-add"
                        placeholder="Add Profile Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="file-upload-text">
                <div className={`file-upload-text-heading`}>
                  {languageTranslation("USER_AGREEMENT_ALL_FIVE_PAGES")}
                </div>
                <div className="file-upload-text-sub-heading">
                  <div
                    onClick={toggle}
                    className={`get-doc-heading ${
                      status === "Opened" ? "text-open" : "text-close"
                      }`}
                  >
                    {" "}
                    {languageTranslation("HOW_DO_I_GET_THIS_DOCUMENT")}
                  </div>
                  <Collapse
                    isOpen={collapse}
                    onEntered={onEntered}
                    onExited={onExited}
                  >
                    <Card className="bg-light-gray mt-1">
                      <CardBody>
                        <p>
                          {" "}
                          The user agreement can be found here as a PDF . Print
                          them out, read them through and send them to us signed
                          and with all pages back.
                        </p>
                        <p>
                          The usage agreement clarifies how you can best use
                          Plycoco. If you are not sure about any points or have
                          questions, ask us! We are happy to help.
                        </p>
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              </div>
              <div className="file-upload-size-clear">
                <Button color="danger">{languageTranslation("CLEAR")}</Button>
              </div>
            </div>
          </div>

          <div className="document-card d-flex align-items-center mr-1">
            <div className="file-upload-wrap upload-document-wrap">
              {/* <div className="close-img">
                          <img src={closeWhite} alt={upload} className="w-100" />
                        </div> */}
              <div className="file-upload-img">
                <div className="file-preview-section p-0">
                  <div className="fileinput-preview d-flex align-items-center justify-content-center">
                    <div className="file-upload">
                      <label className="file-upload-label">
                        <div className="icon-upload">
                          <i className="cui-cloud-upload"></i>
                        </div>
                        <div className="icon-text">
                          {languageTranslation("PERSONAL_DOCUMENTS_UPLOAD")}
                        </div>
                      </label>
                      <input
                        className="file-upload-input"
                        type="file"
                        accept="image/*"
                        id="gallery-photo-add"
                        placeholder="Add Profile Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="file-upload-text">
                <div className={`file-upload-text-heading`}>
                  {languageTranslation("CRIMINAL_RECORD_CERTIFICATE")}
                </div>
                <div className="file-upload-text-sub-heading">
                  <div
                    onClick={toggle}
                    className={`get-doc-heading ${
                      status === "Opened" ? "text-open" : "text-close"
                      }`}
                  >
                    {" "}
                    {languageTranslation("HOW_DO_I_GET_THIS_DOCUMENT")}
                  </div>
                  <Collapse
                    isOpen={collapse}
                    onEntered={onEntered}
                    onExited={onExited}
                  >
                    <Card className="bg-light-gray mt-1">
                      <CardBody>
                        <p>
                          You can get the police certificate of good conduct
                          from your nearest residents 'registration office,
                          citizens' office or registration office.{" "}
                        </p>
                        <p>
                          You can send us a copy of the application and then
                          hand in the certificate of good conduct.{" "}
                        </p>
                        <p>
                          Extended police clearance certificate <br />
                          Clinics and institutions concerned with childcare are
                          increasingly asking for an expanded police clearance
                          certificate. The sad reason for this was sexual
                          assault by medical professionals on underage patients.{" "}
                        </p>
                        <p>
                          Therefore, it can be an advantage if you apply for an
                          extended police clearance certificate
                        </p>
                        <p>Donut? - Then it is even easier:</p>
                        <p>
                          Write an email to this address:
                          buergeraemter@reinickendorf.berlin.de
                        </p>
                        <div className="appliction-for-document">
                          <p>Dear Sir or Madam,</p>
                          <p>
                            I would like to apply for a police clearance
                            certificate.
                          </p>
                          <p className="m-0">Or:</p>
                          <p>
                            I would like to apply for an expanded police
                            clearance certificate. I am a self-employed nurse
                            and my clients want me to provide a flawless,
                            expanded police clearance certificate.
                          </p>
                          <p>
                            Please send the certificate of good conduct to my
                            private address:
                          </p>
                          <p className="m-0">Denis Berkovich</p>
                          <p className="m-0">Bärbel-Bohley-Ring 26</p>
                          <p className=" ">13355 Berlin</p>
                          <p className=" ">Thank you!</p>
                          <p className=" ">Kind regards</p>
                          <p className=" ">Denis Berkovich</p>
                        </div>
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              </div>
              <div className="file-upload-size-clear">
                <Button color="danger">{languageTranslation("CLEAR")}</Button>
              </div>
            </div>
          </div>

          <div className="document-card d-flex align-items-center mr-1">
            <div className="file-upload-wrap upload-document-wrap">
              {/* <div className="close-img">
                          <img src={closeWhite} alt={upload} className="w-100" />
                        </div> */}
              <div className="file-upload-img">
                <div className="file-preview-section p-0">
                  <div className="fileinput-preview d-flex align-items-center justify-content-center">
                    <div className="file-upload">
                      <label className="file-upload-label">
                        <div className="icon-upload">
                          <i className="cui-cloud-upload"></i>
                        </div>
                        <div className="icon-text">
                          {languageTranslation("PERSONAL_DOCUMENTS_UPLOAD")}
                        </div>
                      </label>
                      <input
                        className="file-upload-input"
                        type="file"
                        accept="image/*"
                        id="gallery-photo-add"
                        placeholder="Add Profile Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="file-upload-text">
                <div className={`file-upload-text-heading`}>
                  {languageTranslation("CERTIFICATE_DIPLOMA_EXAM")}
                </div>
                <div className="file-upload-text-sub-heading">
                  <div
                    onClick={toggle}
                    className={`get-doc-heading ${
                      status === "Opened" ? "text-open" : "text-close"
                      }`}
                  >
                    {" "}
                    {languageTranslation("HOW_DO_I_GET_THIS_DOCUMENT")}
                  </div>
                  <Collapse
                    isOpen={collapse}
                    onEntered={onEntered}
                    onExited={onExited}
                  >
                    <Card className="bg-light-gray mt-1">
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              </div>
              <div className="file-upload-size-clear">
                <Button color="danger">{languageTranslation("CLEAR")}</Button>
              </div>
            </div>
          </div>





          {/* UPLOAD DOCUMENTS SECTION */}

          <Form className="form-section">
            <h5 className="main-title">{languageTranslation("UPLOAD_DOCUMENT")}</h5>

            <div className="form-card full-card">
              <Row>
                <Col lg={"12"}>
                  <FormGroup>
                    <Row>
                      <Col sm="4" className="label-col-wrap">
                        <Label className="form-label col-form-label">
                          {languageTranslation("FILE_UPLOAD_DOCUMENT_SIZE")}
                          <span className="required">*</span>
                        </Label>
                      </Col>
                      <Col sm="8">
                        <div className="custom-file-div">
                          <input
                            type="file"
                            id="FileBrowser"
                            name="customFile"
                            className="custom-input-file"
                          />
                          <Label
                            className="custom-label-file"
                            for="FileBrowser"
                          >
                            <span className="choosefile-label">
                              <i className="fas fa-folder-open mr-2"></i>

                              <span>{languageTranslation("CHOOSE_FILE")}</span>
                            </span>
                          </Label>
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
                          {languageTranslation("TYPE")}
                        </Label>
                      </Col>
                      <Col sm="8">
                        <div>
                          <Input type="select" name="select" id="exampleSelect">
                            <option>Registration professional association</option>
                            <option>Registration health office</option>
                            <option>Medical certificate / health certificate</option>
                            <option>Exemption from pension insurance</option>
                            <option>Professional liability insurance (no application)</option>
                            <option>Various documents</option>
                            <option>First-aid pass</option>
                            <option>Driving license car</option>
                            <option>Business registration</option>
                            <option>CV / Vita</option>
                            <option>Proof of employees subject to social security contributions</option>
                            <option>User agreement (all 5 pages)</option>
                            <option>Criminal record certificate</option>
                            <option>Police certificate of good conduct, expanded</option>
                            <option>Framework contract for fixed-term contracts - Solona Personalservice</option>
                            <option>Governance agreement</option>
                            <option>Pension Insurance</option>
                            <option>Certificate / diploma / exam</option>
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
                          {languageTranslation("REMARKS")}
                        </Label>
                      </Col>
                      <Col sm="8">
                        <div>
                          <Input
                            type="text"
                            name={"First name"}
                            placeholder={languageTranslation("REMARKS")}
                            className="width-common"
                          />
                        </div>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
                <Col lg={"12"}>
                  <Button color="primary">{languageTranslation("UPLOAD")}</Button>
                </Col>
              </Row>
            </div>
          </Form>


          {/* GENERAL DOCUMENTS SECTION */}

          <h5 className="main-title mb-1 pt-2">General Documents</h5>
          <div className="document-card d-flex align-items-center mb-2 mr-1">
            <div className="file-upload-wrap">
              {/* <div className="close-img">
                          <img src={closeWhite} alt={upload} className="w-100" />
                        </div> */}
              <div className="file-upload-img">
                <img src={upload} alt={upload} className="w-100" />
              </div>
              <div className="file-upload-text">
                <div className="file-upload-text-heading">
                  Dienstleistungsnachweis.pdf
                </div>
                <div className="file-upload-text-sub-heading">
                  there is a pre-filled one in the appointment overview!
                </div>
              </div>
              <div className="file-upload-size-clear">
                <Button color="danger">{languageTranslation("CLEAR")}</Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );

}
export default DocumentsUploadForm;

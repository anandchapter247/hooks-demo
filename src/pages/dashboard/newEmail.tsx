import React, { FunctionComponent } from 'react';


import {

  Row,
  Col,
Input, Form, FormGroup, Label, Button
} from 'reactstrap';
const newEmail: FunctionComponent = () => {



    return (

      <section className="middle-section email-section">
        
        <div className="dashboard-section ">
         
          
         
            <Form className="form-section">
            <Row>
              <Col lg={"12"}>
                <h5 className="main-title"><span >New E-mails</span></h5>
                <div className="form-card">
                  <Row>
                    <Col lg={"12"}>
                      <FormGroup>
                        <Row>
                          <Col sm="2" className="label-col-wrap">
                            <Label className="form-label col-form-label">
                              Subject
                                    <span className="required">*</span>
                            </Label>
                          </Col>
                          <Col sm="10">
                            <div>
                              <Input
                                type="text"
                                name={"lastName"}
                                placeholder=""
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
                          <Col sm="2" className="label-col-wrap">
                            <Label className="form-label col-form-label">
                              Text
                                    <span className="required">*</span>
                            </Label>
                          </Col>
                          <Col sm="10">
                            <div>
                            <FormGroup> 
                          <Input type="textarea" className="textarea-custom" name="text" id="exampleText" rows="5" />
                        </FormGroup>
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                  
                    
                   
                  </Row>
                </div>
              </Col>

             
          <Col sm={"12"} className="text-right">
          <Button className="submit-button theme-btn" color={" "}>Send</Button>
          </Col>
            </Row>

          </Form>
          </div>
        
      </section>);
  
}

export default newEmail;

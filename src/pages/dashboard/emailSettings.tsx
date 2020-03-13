import React, { FunctionComponent } from 'react';
import {
  Row,
  Col,
 Input, Form, FormGroup, Label, Button
} from 'reactstrap';

const emailSettings: FunctionComponent = () => {
  return (
    <section className="middle-section email-section">
    <div className="dashboard-section ">
         
          
         
         <Form className="form-section">
         <Row>
           <Col lg={"12"}>
             <h5 className="main-title"><span >Settings</span></h5>
             <div className="form-card">
               <Row>
               <Col lg={"12"}>
                    <FormGroup>
                      <Row>
                        <Col sm="4" className="label-col-wrap">
                          <Label className="form-label col-form-label">
                          Set email to read automatically when displayed
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
                  </Col> <Col lg={"12"}>
                    <FormGroup>
                      <Row>
                        <Col sm="4" className="label-col-wrap">
                          <Label className="form-label col-form-label">
                          Send a copy to my email address when sending
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
                         Signature
                                 <span className="required">*</span>
                         </Label>
                       </Col>
                       <Col sm="8">
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
       <Button className="submit-button theme-btn" color={" "}>Save</Button>
       </Col>
         </Row>

       </Form>
       </div>
     
     </section>);
};

export default emailSettings;

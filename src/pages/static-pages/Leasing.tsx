import React, { FunctionComponent } from 'react';

import {

  Row,
  Col,
 CardBody,UncontrolledCollapse
} from 'reactstrap';

const Register: FunctionComponent = () => {
  return (
    <section className="middle-section">
      <div className="dashboard-section form-section">
        <div className="container">
          <h5 className="main-title">Faq</h5>
          <Row>
            <Col lg={"12"}>
              <div className="custom-faq">
           
                <div className="faq-sub">
                <div className="card-header main-title d-flex justify-content-between" id="toggler">  What is Lorem Ipsum?<span className="toggler-icon"> <i className="fa fa-angle-down fa-lg"></i></span>
                
                </div>
        
                <UncontrolledCollapse toggler="#toggler">
              
                    <CardBody>
                        <p className="faq-sub-heading m-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                        similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                        dignissimos esse fuga! Minus, alias.
                       </p>
                     </CardBody>
              
                </UncontrolledCollapse>
           </div>
              <div className="faq-sub">
                  <div className="card-header main-title d-flex justify-content-between" id="toggler2">  Where does it come from? <span className="toggler-icon"> <i className="fa fa-angle-down fa-lg"></i></span></div>
                
                <UncontrolledCollapse toggler="#toggler2">
                  
                    <CardBody>
                        <p className="faq-sub-heading m-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                        similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                        dignissimos esse fuga! Minus, alias.
                       </p>
                     </CardBody>
                
                </UncontrolledCollapse>
              </div>
                <div className="faq-sub">
                <div className="card-header main-title d-flex justify-content-between" id="toggler3">  Why do we use it? <span className="toggler-icon"> <i className="fa fa-angle-down fa-lg"></i></span></div>

                  <UncontrolledCollapse toggler="#toggler3">
                 
                      <CardBody>
                        <p className="faq-sub-heading m-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                        similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                        dignissimos esse fuga! Minus, alias.
                       </p>
                     </CardBody>
                  
                  </UncontrolledCollapse>
              </div>
                <div className="faq-sub">
                <div className="card-header main-title d-flex justify-content-between" id="toggler4">  Why do we use it? <span className="toggler-icon"> <i className="fa fa-angle-down fa-lg"></i></span></div>

                  <UncontrolledCollapse toggler="#toggler4">
                      <CardBody>
                        <p className="faq-sub-heading m-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                        similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                        dignissimos esse fuga! Minus, alias.
                       </p>
                     </CardBody>
                  </UncontrolledCollapse>
               </div>
            </div>
            </Col>
          </Row>
         
        </div>
      </div>
    </section>
  );
};

export default Register;

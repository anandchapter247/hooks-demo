import React, { FunctionComponent } from 'react';

import banking_one from "../../assets/img/bnking-3.jpeg"

import {

  Row,
  Col,

  Card, CardImg, CardText, CardBody, 
  CardTitle
} from 'reactstrap';

const Register: FunctionComponent = () => {
  return (
    <section className="middle-section ">
      <div className="dashboard-section d-flex justify-content-center align-items-center form-section custom-factoring">
        <div className="container">
          <h5 className="main-title"> Factoring</h5>  
            <Row>
              <Col lg={"4"}>
              <div>
                
                <Card>
                  <CardImg top src={banking_one} alt="Card image cap" />
                  <CardTitle><div className="card-header border-0">Heading Step 1 </div></CardTitle>
                  <CardBody className="pt-0">
                   
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </CardText>
                    
                  </CardBody>
                </Card>
              </div>
              </Col>
            <Col lg={"4"}>
              <div>
                <Card>
                  <CardImg top src={banking_one} alt="Card image cap" />
                  <CardTitle><div className="card-header border-0">Heading Step 2 </div></CardTitle>
                  <CardBody className="pt-0">
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </CardText>
                     
                  </CardBody>
                </Card>
              </div>
              </Col>
            <Col lg={"4"}>
              <div>
                <Card>
                  <CardImg top src={banking_one} alt="Card image cap" />
                  <CardTitle><div className="card-header border-0">Heading Step 3 </div></CardTitle>
                  <CardBody className="pt-0">
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </CardText>
                     
                  </CardBody>
                </Card>
              </div>
              </Col>
              <div className="clear-fix"></div>
             
            </Row>
          <div className="mt-2">
            <Row>
            <Col lg={"12"}>
              <div className="mt-3">
                  <h5 className="main-title">THATS HOW IT WORKS</h5>  
                  <div>
                    <ul className="factoring-info pl-0">
                      <li className="sub-list"> <span className="mr-2 factorung-info-heading"> Was macht BF</span>  
                          <ul className="pl-0">
                          <li className="sub-list"> <span className="sub-list-icon mr-2"> </span>BF überweist dein Honorar innerhalb von 3 Tagen nach Rechnungserhalt auf dein Konto. </li>
                          <li className="sub-list"><span className="sub-list-icon mr-2"> </span> BF finanziert deine Rechnungen vor. </li>
                          <li className="sub-list"> <span className="sub-list-icon mr-2"> </span>Im Klartext: bevor BF von der Einrichtung das Geld über dein Honorar überhaupt erhält, hat BF dir schon dein Geld auf dein Konto überwiesen. </li>
                          <li className="sub-list"> <span className="sub-list-icon mr-2"> </span>BF kümmert sich um Mahnungen, klagt das Geld notfalls ein und übernimmt auch das Risiko eines Zahlungsausfalls. </li>
                          </ul>
                        
                         </li>
                    </ul>
                    <ul className="factoring-info pl-0">
                      <li className="sub-list"> <span className="factorung-info-heading">Ablauf</span> 
                          <ul className="pl-0">
                          <li className="sub-list"> <span className="sub-list-icon mr-2"> </span>BF überweist dein Honorar innerhalb von 3 Tagen nach Rechnungserhalt auf dein Konto. </li>
                          <li className="sub-list"> <span className="sub-list-icon mr-2"> </span>BF finanziert deine Rechnungen vor. </li>
                          <li className="sub-list"><span className="sub-list-icon mr-2"> </span>Im Klartext: bevor BF von der Einrichtung das Geld über dein Honorar überhaupt erhält, hat BF dir schon dein Geld auf dein Konto überwiesen. </li>
                          <li className="sub-list"><span className="sub-list-icon mr-2"> </span>BF kümmert sich um Mahnungen, klagt das Geld notfalls ein und übernimmt auch das Risiko eines Zahlungsausfalls. </li>
                        </ul>

                      </li>
                    </ul>
                  </div>
             
           </div>
            </Col>
            </Row>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

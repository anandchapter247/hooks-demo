import React, { FunctionComponent } from 'react';
import { Row, Col } from 'reactstrap';

const Lawyers: FunctionComponent = () => {
  return (
    <section className='middle-section'>
      <div className='dashboard-section d-flex justify-content-center form-section align-items-center custom-lawyers'>
        <div className='container'>
          <h5 className='main-title'> Factoring</h5>
          <Row>
            <Col lg={"6"}>
              <div className="lawyers-section">
                <h5 className="main-title"> Factoring</h5>
                <ul className="p-0">
                  <li>
                    {" "}
                    <span>
                      {" "}
                      <i className="fa fa-battery-empty fa-lg"></i>
                    </span>{" "}
                    Attorney David Thieme Maassenstr. 12 10777 Berlin
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-battery-empty fa-lg"></i>030-290 449
                      69{" "}
                    </span>{" "}
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-battery-empty fa-lg"></i>030-290 449
                      67
                    </span>{" "}
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-battery-empty fa-lg"></i>{" "}
                      info@thieme-ra.de Internet: www.thieme-ra.de
                    </span>{" "}
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={"6"}>
              <div className="lawyers-section">
                <ul className="p-0">
                  <li className="lawyers-con-info">
                    {" "}
                    <span>
                      {" "}
                      <i className="fa fa-battery-empty fa-lg"></i>
                    </span>{" "}
                    Attorney David Thieme Maassenstr. 12 10777 Berlin
                  </li>
                  <li className="lawyers-con-info">
                    <span>
                      <i className="fa fa-battery-empty fa-lg"></i>030-290 449
                      69{" "}
                    </span>{" "}
                  </li>
                  <li className="lawyers-con-info">
                    <span>
                      <i className="fa fa-battery-empty fa-lg"></i>030-290 449
                      67
                    </span>{" "}
                  </li>
                  <li className="lawyers-con-info">
                    <span>
                      <i className="fa fa-battery-empty fa-lg"></i>{" "}
                      info@thieme-ra.de Internet: www.thieme-ra.de
                    </span>{" "}
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
export default Lawyers;

import React, { FunctionComponent } from 'react';
import { languageTranslation } from '../../helpers';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const Footer: FunctionComponent = () => {
  return (
    <footer className="footer-section pt-5">
      <Container >
        <Row>
          <Col sm={3}>
          <div className="footer-head h5  mb-2">
           {languageTranslation("FOOTER_QUICK_LINK")}
            </div>
            <div className="footer-div">
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_HOME")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_PERSONAL_SPACE")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_INFORMATION_FOR_CAREGIVERS")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_INFORMATION_FOR_DOCTORS")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_INFORMATION_FOR_MEDICAL_INSTITUTIONS")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_REGISTER_AS_A_CAREGIVER")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_REGISTER_AS_A_DOCTOR")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_REGISTER_AS_A_MEDICAL_FACILITY")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_CONTACT_IMPRESSUM")}</a>
              </div>
          </Col>
          <Col sm={3}>
            <div className="footer-head h5  mb-2">
            {languageTranslation("FOOTER_WE_MEDIATE")} 
            </div>
            <div className="footer-div">
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_CONTACT_IMPRESSUM")}  {languageTranslation("FOOTER_CONTACT_IMPRESSUM")} freelance doctors</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_FREELANCE_EXAMINIERTE_NURSES_NURSE")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_FREELANCE_PEDIATRIC_NURSE")} </a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_FREELANCE_REGISTERED_GERIATRIC_NURSES")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_FREELANCE_CERTIFIED_MIDWIVES")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_FREELANCE_MEDICAL_ASSISTANTS")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_FREELANCE_MEDICAL_PROFESSIONALS")}</a>
              </div>
          </Col>
          <Col sm={3}>
            <div className="footer-head h5  mb-2">
             {languageTranslation("FOOTER_FOR_DIFFERENT_DEPARTMENTS")}
            </div>
            <div className="footer-div">
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_OPERATING_ROOM")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_ANESTHESIA")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_INTENSIVE")} </a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_HOME_NURSING")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_HOME")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_EMERGENCY_ROOM")}</a>
              </div>
          </Col>
          <Col sm={3}>
            <div className="footer-head h5  mb-2">
              Contact Info
            </div>
           {/* <a className="footer-links" href="/"><i className="fas fa-mobile-alt"></i> 1-202-556-3320</a>
           <a className="footer-links" href="/"><i className="far fa-envelope"></i> hello@plycoco.com</a>
           <a className="social-links" href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
           <a className="social-links" href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> </a>
           <a className="social-links" href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i> </a> */}
           <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_CLINICS")} </a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_CARE_FACILITIES")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_OUTPATIENT_CARE_SERVICES")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_RETIREMENT_HOMES")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_HOUSING_FACILITIES_FOR_THE_DISABLED")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_PRIVATE_HOUSEHOLDS")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_SURGICAL_CENTERS")}</a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_EMERGENCY-SERVICES")} </a>
              <a className="footer-links" href="/"><i className="fas fa-angle-right"></i> {languageTranslation("FOOTER_SURGERIES")}</a>
          </Col>
          <Col xs={12}>
            <div className="copyright-text">Copyright 2020 	&copy; All rights reserved.</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import React, { FunctionComponent } from 'react';

import logo from "../../assets/img/plycoco-orange.png";
import flag from "../../assets/img/icons/flag.svg";
import trash from "../../assets/img/icons/trash.svg";
import archive from "../../assets/img/icons/archive.svg";
import reply from "../../assets/img/icons/reply.svg";
const emailView: FunctionComponent = () => {
  return (
    <section className="middle-section email-section">
      <div className="dashboard-section ">
        <div className="full-mail-details">
          <div className="email-action-list ">
            <div className="fillter-block">

              <div className="d-flex justify-content-between align-items-center m-0">
                <div className="filter-items-wrap text-center">
                  <i className="fas fa-arrow-left"></i>
                </div>
                <div className="filter-items-wrap text-center">
                  <img src={flag} alt={flag} />
                </div>
                <div className="filter-items-wrap text-center">
                  <img src={archive} alt={archive} />
               
                </div>
                <div className="filter-items-wrap text-center">
                <img src={trash} alt={trash} />
                </div>
                <div className="filter-items-wrap text-center">
                <img src={reply} alt={reply} />
               
                </div>
              </div>
             


            </div>
          </div>
          <div className="email-content-detail">
            <div className="email-details-header d-flex align-items-center justify-content-between">
              <div className="email-details-subject">
                Offer FIXED EMPLOYMENT Effective immediately:
              </div>
              <div className="email-details-date">13 Jan 2018 4:25 AM</div>
            </div>
            <div className="email-details-body">
              <div className=" break-words">
                <p>Hey John, </p>

                <p>
                  bah kivu decrete epanorthotic unnotched Argyroneta nonius
                  veratrine preimaginary saunders demidolmen Chaldaic
                  allusiveness lorriker unworshipping ribaldish tableman
                  hendiadys outwrest unendeavored fulfillment scientifical
                  Pianokoto Chelonia
                </p>

                <p>
                  Freudian sperate unchary hyperneurotic phlogiston
                  duodecahedron unflown Paguridea catena disrelishable Stygian
                  paleopsychology cantoris phosphoritic disconcord fruited
                  inblow somewhatly ilioperoneal forrard palfrey Satyrinae
                  outfreeman melebiose
                </p>
                <div className="email-logo mt-3 mb-3">
                  <img src={logo} alt="" width="180px" />
                  <div className="email-watermark-wrap">
                    <div>  Tel: +49.30.644 99 444</div>
                    <div>Fax: +49.30.644 99 445</div>
                    <div>E-Mail: Kontakt@plycoco.de</div>
                    <div>www.plycoco.de</div>
                  </div>
                  <div className="email-watermark-wrap mt-3">
                    <div> Plycoco GmbH Welfenallee 3-7 13465 Berlin</div>
                    <div>Entry in the commercial register: Register court: District court Berlin-Charlottenburg,  register number: HRB 150746, managing director: Maren Krusch</div>
                    <div> Tel: +49.30.644 99 444, fax: +49.30.644 99 445</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>);
};

export default emailView;

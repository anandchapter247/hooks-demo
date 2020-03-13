import React, { FunctionComponent } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Input,
  Form,
  FormGroup,
  Label
} from 'reactstrap';
import flag from '../../assets/img/icons/flag.svg';
import logo from '../../assets/img/plycoco-orange.png';
import trash from '../../assets/img/icons/trash.svg';
import archive from '../../assets/img/icons/archive.svg';
import reply from '../../assets/img/icons/reply.svg';

const DashboardEmail: FunctionComponent = () => {
  return (
    <section className='middle-section email-section'>
      <div className='dashboard-section '>
        <Form className='form-section'>
          <Row>
            <Col sm={6}>
              <div className='email-action-list '>
                <div className='fillter-block'>
                  <FormGroup className='d-flex justify-content-between align-items-center m-0'>
                    <div className='filter-items-wrap'>
                      <div className='custom-control custom-checkbox '>
                        <Input
                          type='checkbox'
                          className='custom-control-input'
                          id='customControlInline'
                        />
                        <Label
                          className='custom-control-label col-form-label'
                          for={'customControlInline'}
                        >
                          {/* <i className="fa fa-caret-down"></i> */}
                        </Label>
                      </div>
                      <UncontrolledDropdown className='filter-dropdown'>
                        <DropdownToggle
                          caret
                          className='filter-dropdown-heading'
                          tag='div'
                          direction='left'
                        >
                          {' '}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>
                            <i className='fas fa-inbox'></i> Inbox
                          </DropdownItem>
                          <DropdownItem>
                            <i className='fas fa-circle'></i> Unread
                          </DropdownItem>
                          <DropdownItem>
                            <i className='fas fa-tags'></i>Marked
                          </DropdownItem>

                          <DropdownItem>
                            <i className='fas fa-archive'></i> Achived
                          </DropdownItem>
                          <DropdownItem>
                            <i className='fas fa-trash'></i>Erased
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </FormGroup>
                  <FormGroup className='d-flex justify-content-between align-items-center m-0'>
                    <div className='filter-items-wrap text-center'>
                      <i className='fas fa-sync'></i>
                    </div>
                  </FormGroup>
                  <FormGroup className='d-flex justify-content-between align-items-center m-0'>
                    <UncontrolledDropdown className='filter-dropdown'>
                      <DropdownToggle
                        className='filter-dropdown-heading filter-items-wrap text-center'
                        tag='div'
                        direction='left'
                      >
                        <i className='fas fa-ellipsis-v'></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>
                          {' '}
                          <i className='fas fa-check-square'></i> Read all
                        </DropdownItem>
                        <DropdownItem>
                          <i className='fas fa-trash'></i> Clear all
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </FormGroup>
                </div>
              </div>

              <div className='email-list-section'>
                <ul className='email-list-block list-group mt-2'>
                  <li className='list-group-item email-list-tile d-flex '>
                    <div className='list-email-ic d-flex flex-column'>
                      <div className='custom-control custom-checkbox '>
                        <Input
                          type='checkbox'
                          className='custom-control-input'
                          id='customControlInline1'
                        />
                        <Label
                          className='custom-control-label col-form-label'
                          for={'customControlInline1'}
                        >
                          {/* <i className="fa fa-caret-down"></i> */}
                        </Label>
                      </div>
                      <img src={flag} alt={flag} />
                    </div>
                    <div className='list-email-text'>
                      <div className='list-email-heading d-flex justify-content-between'>
                        <span className='list-email-heading-text'>
                          Offer now for a long time - practice in Spandau{' '}
                          <span className='special-thing'>(code: QFH0T)</span>
                        </span>
                        <div className='list-email-date'>
                          <div className='email-labels  items-center d-flex  align-items-center'>
                            <div className='read-status-circle bg-primary mr-1'></div>
                            <span>14 Jan</span>
                          </div>
                        </div>
                      </div>
                      <div className='list-email-subheading'>
                        We have the following offer for you: Wanted
                        qualification: Nurse / nurse From now on for a longer
                        period - Practice in Spandau (code: QFH0T)
                      </div>
                    </div>
                  </li>
                  <li className='list-group-item email-list-tile d-flex active'>
                    <div className='list-email-ic d-flex flex-column'>
                      <div className='custom-control custom-checkbox '>
                        <Input
                          type='checkbox'
                          className='custom-control-input'
                          id='customControlInline1'
                        />
                        <Label
                          className='custom-control-label col-form-label'
                          for={'customControlInline1'}
                        >
                          {/* <i className="fa fa-caret-down"></i> */}
                        </Label>
                      </div>
                      <img src={flag} alt={flag} />
                    </div>
                    <div className='list-email-text'>
                      <div className='list-email-heading d-flex justify-content-between'>
                        <span className='list-email-heading-text'>
                          Offer now for a long time - practice in Spandau{' '}
                          <span className='special-thing'>(code: QFH0T)</span>
                        </span>
                        <div className='list-email-date'>
                          <div className='email-labels  items-center d-flex  align-items-center'>
                            <div className='read-status-circle bg-primary mr-1'></div>
                            <span>14 Jan</span>
                          </div>
                        </div>
                      </div>
                      <div className='list-email-subheading'>
                        We have the following offer for you: Wanted
                        qualification: Nurse / nurse From now on for a longer
                        period - Practice in Spandau (code: QFH0T)
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={6}>
              <div className='full-mail-details '>
                <div className='email-action-list '>
                  <div className='fillter-block'>
                    <div className='d-flex justify-content-between align-items-center m-0'>
                      {/* <div className="filter-items-wrap text-center">
                  <i className="fas fa-arrow-left"></i>
                </div> */}
                      <div className='filter-items-wrap text-center'>
                        <img src={flag} alt={flag} />
                      </div>
                      <div className='filter-items-wrap text-center'>
                        <img src={archive} alt={archive} />
                      </div>
                      <div className='filter-items-wrap text-center'>
                        <img src={trash} alt={trash} />
                      </div>
                      <div className='filter-items-wrap text-center'>
                        <img src={reply} alt={reply} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='email-content-detail'>
                  <div className='email-details-header d-flex align-items-center justify-content-between'>
                    <div className='email-details-subject'>
                      Offer FIXED EMPLOYMENT Effective immediately:
                    </div>
                    <div className='email-details-date'>
                      13 Jan 2018 4:25 AM
                    </div>
                  </div>
                  <div className='email-details-body'>
                    <div className=' break-words'>
                      <p>Hey John, </p>

                      <p>
                        bah kivu decrete epanorthotic unnotched Argyroneta
                        nonius veratrine preimaginary saunders demidolmen
                        Chaldaic allusiveness lorriker unworshipping ribaldish
                        tableman hendiadys outwrest unendeavored fulfillment
                        scientifical Pianokoto Chelonia
                      </p>

                      <p>
                        Freudian sperate unchary hyperneurotic phlogiston
                        duodecahedron unflown Paguridea catena disrelishable
                        Stygian paleopsychology cantoris phosphoritic disconcord
                        fruited inblow somewhatly ilioperoneal forrard palfrey
                        Satyrinae outfreeman melebiose
                      </p>
                      <div className='email-logo mt-3 mb-3'>
                        <img src={logo} alt='' width='180px' />
                        <div className='email-watermark-wrap'>
                          <div> Tel: +49.30.644 99 444</div>
                          <div>Fax: +49.30.644 99 445</div>
                          <div>E-Mail: Kontakt@plycoco.de</div>
                          <div>www.plycoco.de</div>
                        </div>
                        <div className='email-watermark-wrap mt-3'>
                          <div> Plycoco GmbH Welfenallee 3-7 13465 Berlin</div>
                          <div>
                            Entry in the commercial register: Register court:
                            District court Berlin-Charlottenburg, register
                            number: HRB 150746, managing director: Maren Krusch
                          </div>
                          <div>
                            {' '}
                            Tel: +49.30.644 99 444, fax: +49.30.644 99 445
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </section>
  );
};

export default DashboardEmail;

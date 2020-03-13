import React, { useState } from 'react';
import Header from './Header';
import calenderIc from '../../assets/img/icons/event.svg';
import Email from '../../assets/img/icons/mail.svg';
import RightRrrow from '../../assets/img/right-arrow.svg';
import Contracts from '../../assets/img/icons/document.svg';
import Bills from '../../assets/img/icons/receipt.svg';
import Leasing from '../../assets/img/icons/leasing.svg';
import Factoring from '../../assets/img/icons/podium.svg';
import Lawyers from '../../assets/img/icons/lawyers.svg';
import App from '../../assets/img/icons/touch-screen.svg';
import Profile from '../../assets/img/icons/cog.svg';
import ChangePassword from '../../assets/img/icons/change-password.svg';
import {
  Navbar,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler,
  NavLink
} from 'reactstrap';
import Footer from './Footer';
import { AppRoutes } from '../../config';
import { useHistory } from 'react-router';

const Layout: React.FC = props => {
  let history = useHistory();  

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [sideisOpen, sidesetIsOpen] = useState(false);
  const sideToggle = () => sidesetIsOpen(!sideisOpen);
  return (
    <div className="full-app-wrap dashboard-full-wrap">
      <Header {...props} />
      <div className="aap-dashboard-section">

        <div className="app-dashbaord-wrap">
          <div className="app-sidebar-wrap">
            <Navbar color=" " expand="md" className="p-0">

              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className='flex-column main-nav' navbar>
                  <NavItem>
                    <NavLink className="cursor-pointer">
                      <span className='sidebar-icon-img'>
                        {' '}
                        <img src={calenderIc} alt={calenderIc} />
                      </span>
                      <span className='sidebar-text'>Events</span>
                    </NavLink>
                  </NavItem>

                  <NavItem onClick={()=>{history.push(AppRoutes.EMAILVIEW)}}>
                    <div className='nav-link' onClick={sideToggle}>
                      <span className='sidebar-icon-img'>
                        {' '}
                        <img src={Email} alt={Email} />
                      </span>
                      <span className='sidebar-text'>Emails</span>
                      <span className='slidebar-arrow-img'>
                        <img src={RightRrrow} alt={''} />
                      </span>
                    </div>
                    <Collapse isOpen={sideisOpen}>
                      <Nav className='flex-column slidebar-inner-nav' navbar>
                        <NavItem className=''>
                          <NavLink className="cursor-pointer">
                            <span className='sidebar-icon-img'>
                              <img src={calenderIc} alt={calenderIc} />
                            </span>
                            <span className='sidebar-text'>Events</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </Collapse>
                  </NavItem>
                  <NavItem>
                    <NavLink className="cursor-pointer">
                      <span className='sidebar-icon-img'>
                        {' '}
                        <img src={Contracts} alt={Contracts} />
                      </span>
                      <span className='sidebar-text'>Contracts</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="cursor-pointer">
                      <span className='sidebar-icon-img'>
                        {' '}
                        <img src={Bills} alt={Bills} />
                      </span>
                      <span className='sidebar-text'>Bills</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={()=>history.push(AppRoutes.LEASING)} className="cursor-pointer">
                      <span className='sidebar-icon-img'>
                        {' '}
                        <img src={Leasing} alt={Leasing} />
                      </span>
                      <span className='sidebar-text'>Leasing</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="cursor-pointer">
                      <span className='sidebar-icon-img'>
                        {' '}
                        <img src={Factoring} alt={Factoring} />
                      </span>
                      <span className='sidebar-text'>Factoring</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="cursor-pointer">
                      <span className='sidebar-icon-img'>
                        {' '}
                        <img src={Lawyers} alt={Lawyers} />
                      </span>
                      <span className='sidebar-text'>Lawyers</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="cursor-pointer">
                      <span className='sidebar-icon-img'>
                        {' '}
                        <img src={App} alt={App} />
                      </span>
                      <span className='sidebar-text'>App</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={()=>history.push(AppRoutes.EDITPROFILE)}  className="cursor-pointer">
                      <span className='sidebar-icon-img'>
                        {' '}
                        <img src={Profile} alt={Profile} />
                      </span>
                      <span className='sidebar-text'>Profile</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="cursor-pointer">
                      <span className='sidebar-icon-img'>
                        {' '}
                        <img src={ChangePassword} alt={ChangePassword} />
                      </span>
                      <span className='sidebar-text'>Change Password</span>
                    </NavLink>
                  </NavItem>
                  {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
              </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                </DropdownItem>
                    <DropdownItem>
                      Option 2
                </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
                </Nav>
              </Collapse>
            </Navbar>
          </div>
          <div className='app-content-wrap'>
            <div className='layout-container'>{props.children}</div>
          </div>
        </div>

      </div>
      <Footer {...props} />
    </div>
  );
};

export default Layout;

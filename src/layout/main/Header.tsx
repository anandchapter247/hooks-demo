import React, { FunctionComponent, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container
} from 'reactstrap';
import logo from '../../assets/img/plycoco-white.png';
import { languageTranslation } from '../../helpers/LangauageTranslation';
import { useHistory, useLocation } from 'react-router';
import { AppRoutes } from '../../config';
const Header: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Token: string | null = localStorage.getItem('token');
  const toggle = () => setIsOpen(!isOpen);
  let history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push(AppRoutes.LOGIN);
  };
  let { pathname } = useLocation();
  let PathArray: string[] = pathname.split('/');
  return (
    <>
      <header className='app-header'>
        <Container>
          <div className='header-container'>
            <Navbar color=' ' expand='md' className=' '>
              <NavbarBrand href='/'>
                <img src={logo} alt='' width='180px' />
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                  <NavItem>
                    <NavLink href='/'>
                      {languageTranslation('PERSONAL_SPACE')}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/'>{languageTranslation('BLOG')}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/'>
                      {languageTranslation('CONTACT_PERSON')}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/'>{languageTranslation('CONTACT')}</NavLink>
                  </NavItem>
                </Nav>
                {Token ? (
                  <Button
                    className='login-btn white-btn ml-3 font-weight-bold'
                    color=' '
                    onClick={handleLogout}
                  >
                    {languageTranslation('LOGOUT')}
                  </Button>
                ) : PathArray &&
                  PathArray.length &&
                  PathArray[1] === 'register' ? (
                  <Button
                    className='login-btn white-btn ml-3 font-weight-bold'
                    color=' '
                    onClick={() => history.push(AppRoutes.LOGIN)}
                  >
                    {'Login'}
                  </Button>
                ) : (
                  <Button
                    className='login-btn white-btn ml-3 font-weight-bold'
                    color=' '
                    onClick={() => history.push(AppRoutes.REGISTER)}
                  >
                    {languageTranslation('REGISTER')}
                  </Button>
                )}
              </Collapse>
            </Navbar>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;

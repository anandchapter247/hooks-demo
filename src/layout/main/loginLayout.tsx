import React from 'react';
import Header from './Header';

import Footer from './Footer';

const Loginlayout: React.FC = props => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  // const [sideisOpen, sidesetIsOpen] = useState(false);
  // const sideToggle = () => sidesetIsOpen(!sideisOpen);
  return (
    <div className="full-app-wrap login-app-wrap">
      <Header {...props} />
      <div className='app-home-wrap'>
        <div className='home-content-wrap'>
          <div className='layout-container'>{props.children}</div>
        </div>
      </div>
      <Footer {...props} />
     
    </div>
  );
};

export default Loginlayout;

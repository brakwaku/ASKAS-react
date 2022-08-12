import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderWrapper, LogoImage, LogoWrapper, NavWrapper } from './styles';
import Logo from '../../assets/AskasLogo.png';

const Header = () => {
    
  return (
    <>
      <HeaderWrapper>
        <LogoWrapper>
          <LogoImage src={Logo} alt="askas logo" />
        </LogoWrapper>
        <NavWrapper>
          <h4>CONTACT</h4>
          <h4>LOGIN</h4>
          <h4>SIGN UP</h4>
        </NavWrapper>
      </HeaderWrapper>
      <Outlet />
    </>
  );
};

export default Header;

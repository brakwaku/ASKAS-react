import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
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
          <h4>Contact</h4>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/signup'>signup</NavLink>
        </NavWrapper>
      </HeaderWrapper>
      <Outlet />
    </>
  );
};

export default Header;

import React from 'react'
import { HeaderWrapper, LogoImage, LogoWrapper, NavWrapper } from './styles'
import Logo from '../../assets/AskasLogo.png'

const Header = () => {

    console.log(Logo)
    return (
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
    )
}

export default Header;
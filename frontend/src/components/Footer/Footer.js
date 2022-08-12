import React from 'react'
import { FooterContact, FooterLinks, FooterCopyright, FooterWrapper } from './footer.styles'

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterLinks>
                <span>Home</span> |
                <span>About</span> |
                <span>Email</span>
            </FooterLinks>
            <FooterContact>
                <span>Call: 208 701 4948</span>|
                <span>Text: 208 401 4948</span>
            </FooterContact>
            <FooterCopyright>
                <span>ASKAS &copy; 2022 | Developed by Ammon Quarshie & Kwaku Appau-Nkansah</span>
            </FooterCopyright>
        </FooterWrapper>
    )
}

export default Footer
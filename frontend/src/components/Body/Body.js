import React from 'react'
import Icon1 from '../../assets/pr.png'
import Icon2 from '../../assets/cu.png'
import Icon3 from '../../assets/lo.png'
import Icon4 from '../../assets/nu.png'
import { BodyBackground, BodyWrapper, IconContainer, IconImage, IconsWrapper, MainHeader, MainQuote, QuoteAuthor } from "./body.styles"

const Body = () => {
    return (
        <>
            <BodyWrapper>
                <BodyBackground>
                    <MainHeader>JUST SOUND IT</MainHeader>
                    <MainQuote>"The knower of the mystery of sound knows the mystery of the whole universe"</MainQuote>
                    <QuoteAuthor>--Some Juju Man--</QuoteAuthor>
                    <IconsWrapper className="d-flex justify-content-evenly flex-wrap">
                        <IconContainer>
                            <a href='#'>
                                <IconImage src={Icon1} alt="pr.png" />
                            </a>
                        </IconContainer>
                        <IconContainer>
                            <a href='#'>
                                <IconImage src={Icon2} alt="pr.png" />
                            </a>
                        </IconContainer>
                        <IconContainer>
                            <a href='#'>
                                <IconImage src={Icon3} alt="pr.png" />
                            </a>
                        </IconContainer>
                        <IconContainer>
                            <a href='#'>
                                <IconImage src={Icon4} alt="pr.png" />
                            </a>
                        </IconContainer>
                    </IconsWrapper>
                </BodyBackground>
            </BodyWrapper>
        </>
    )
}

export default Body
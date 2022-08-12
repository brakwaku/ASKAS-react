import React from 'react'
import { BodyBackground, BodyWrapper, MainHeader, MainQuote, QuoteAuthor } from "./body.styles"

const Body = () => {
    return (
        <>
            <BodyWrapper>
                <BodyBackground>
                    <MainHeader>JUST SOUND IT</MainHeader>
                    <MainQuote>"The knower of the mystery of sound knows the mystery of the whole universe"</MainQuote>
                    <QuoteAuthor>--Some Juju Man--</QuoteAuthor>
                </BodyBackground>
            </BodyWrapper>
        </>
    )
}

export default Body
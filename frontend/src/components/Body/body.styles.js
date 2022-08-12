import styled from 'styled-components'

export const BodyWrapper = styled.main`
`;

export const BodyBackground = styled.div`
    background-image: url(https://wallpaperaccess.com/full/1519216.jpg);
    background-color: grey;
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
`;

export const MainHeader = styled.h1`
    text-align: center;
    font-size: 6rem;
    padding-top: 40px;
    margin: 0 150px;
`;

export const MainQuote = styled.p`
    /* text-shadow: 2px 2px black; */
    text-align: center;
    padding-top: 100px;
    margin: 0 200px;
    font-size: 1.2rem;
`;

export const QuoteAuthor = styled.p`
    text-align: right;
    font-style: italic;
    padding: 0;
    margin: 0 200px;
    font-size: .9rem;
    font-weight: bold;
`;
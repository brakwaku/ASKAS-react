import styled from 'styled-components';

export const BodyWrapper = styled.main``;

export const BodyBackground = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.73),
      rgba(0, 0, 0, 0.7)
    ),
    url(https://images.unsplash.com/photo-1506704888326-3b8834edb40a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
      center no-repeat;
  min-height: 100vh;
  height: 100vh;
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
  font-size: 0.9rem;
  font-weight: bold;
`;

export const IconsWrapper = styled.div`
  margin: 60px;
  margin-bottom: 0;
  padding: 60px;
  gap: 20px;
`;

export const IconContainer = styled.div`
  width: 110px;
`;

export const IconImage = styled.img`
  width: 100%;
  transition: all 1s;

  &:hover {
    transform: scale(1.3);
  }
`;

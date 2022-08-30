import styled from 'styled-components';
import media from '../../utils/media';

export const MainWrapper = styled.div`
  height: 80vh;
`;

export const CardWrapper = styled.div`
  width: 30%;
  background-color: white;
  border-radius: 10px;
  margin: 6rem auto 3rem auto;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.02),
    0 3px 10px 0 rgba(0, 0, 0, 0.02);

  ${media.medium`
    width: 90%;
    margin-top: 3rem;
  `}
`;

export const ButtonWrapper = styled.button`
  font-weight: bold;
`;

export const BottomWrapper = styled.div`
  margin-top: 4rem;
  > p > a {
    text-decoration: none;
  }

  > a {
    text-decoration: none;
  }
`;

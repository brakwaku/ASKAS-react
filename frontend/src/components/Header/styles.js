import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #DC9F04;
    width: 100%;
`;

export const LogoImage = styled.img`
    width: 100%;
`;

export const LogoWrapper = styled.div`
    width: 50px;
    height: 50px;
`;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 20px;
    cursor: pointer;

    >h4{
        :hover {
            color: red;
        }
    }
`;
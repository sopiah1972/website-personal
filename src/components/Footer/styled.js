import styled from "styled-components";

export const Footer = styled.footer`
  padding: 5em 10em 4em 10em;
  background-color: #fff;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 5em 5em 4em 5em;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  letter-spacing: 4px;
  line-height: 1.2;
  font-size: 1.5em;
  color: #566ffe;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Copyright = styled.p`
  font-size: 0.8em;
  color: #183b56;

  @media (max-width: 768px) {
    margin-bottom: 2em;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;

  &:nth-child(2) {
    margin-right: 0;
  }
`;

export const SubTitle = styled.h2`
  letter-spacing: 4px;
  line-height: 1.2;
  font-size: 18px;
  color: #183b56;
  font-weight: 800;
  margin-bottom: 24px;
`;

export const Item = styled.p`
  font-size: 14px;
  color: #183b56;
  margin-bottom: 18px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #566ffe;
  }
`;

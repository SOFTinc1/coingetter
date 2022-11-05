import styled from "styled-components";
// import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  width: 285px;
  font-family: typo;
`;
export const Row = styled.div``;
export const Col1 = styled.div``;
export const Col2 = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.6) 100%
  );
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  position: fixed;
  z-index: 1;
`;
export const Option = styled.a`
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 1px;
  align-items: center;
  color: #000000;
  text-transform: lowercase;
  cursor: pointer;
  text-decoration: none;

  &:active {
    color: purple;
  }
`;

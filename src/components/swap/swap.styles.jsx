import styled from "styled-components";
import Button from "../button/button";

export const SwapContainer = styled.div`
  padding: 0 20px 20px 20px;

  @media only screen and (max-width: 800px) {
    padding: 20px 10px;
  }
`;
export const Black = styled.div`
  // background: #795548;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 8px;
  padding: 40px 20px;
  width: 50%;
  margin: 50px auto;

  @media only screen and (max-width: 800px) {
    width: 100%;
    padding: 40px 10px;
    border-radius: 0;
  }
`;
export const Head = styled.div`
  display: grid;
  grid-template-columns: 2.4fr 1fr;
  grid-gap: 45px;
  width: 50%;
  margin: 50px auto;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
  }
`;
export const Title = styled.h1`
  color: #000;
  font-size: 26px;
  font-family: typo;
  font-weight: 800;
  text-transform: capitalize;
  letter-spacing: 1px;
`;
export const Icons = styled.div`
  display: flex;
  gap: 30px;

  @media only screen and (max-width: 800px) {
    gap: 10px;
    margin: 0 0 0 85px;
  }
`;
export const Icon = styled.h1`
  color: #000;
  font-size: 22px;
  font-family: typo;
  font-weight: 800;
`;
export const FromDiv = styled.div`
  // background: #fff9eb;
  box-shadow: rgba(0,0,0,0.16) 0px 1px 4px;
  border-radius: 8px;
  padding: 20px 40px;

  @media only screen and (max-width: 800px) {
    padding: 20px 10px;
    border-radius: 0;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 32px;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;
export const Row2 = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 32px;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;
export const UserInput = styled.div``;
export const Input = styled.input`
  border: none;
  background: transparent;
  padding: 10px;
  outline: none;

  &::placeholder {
    font-family: syne;
    font-size: 24px;
  }
`;
export const Equivalence = styled.h1`
  font-family: syne;
  font-weight: 600;
  font-size: 22px;
  text-align: left;
`;
export const Equivalence2 = styled.h2`
  font-family: syne;
  font-weight: 600;
  font-size: 22px;
  text-align: right;
`;
export const ButtonC = styled(Button)`
  width: 20%;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 15px 10px;

  @media only screen and (max-width: 800px) {
    padding: 10px;
    width: 30%;
  }
`;
export const ButtonC2 = styled(Button)`
  width: 20%;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 50px auto 0 auto;
  text-align: center;
  padding: 15px 10px;

  @media only screen and (max-width: 800px) {
    padding: 15px 10px;
    width: 50%;
  }
`;
export const TokenDetails = styled.div``;
export const TokenName = styled.h1`
  font-family: typo;
  font-size: 42px;
  text-align: right;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;

  @media only screen and (max-width: 800px) {
    font-size: 32px;
  }
`;
export const Balance = styled.h1`
  font-family: syne;
  font-weight: 300;
  font-size: 16px;
  text-align: right;
  text-transform: capitalize;
`;
export const SwapIcon = styled.div``;
export const ToDiv = styled.div`
  // background: #fff9eb;
  box-shadow: rgba(0,0,0,0.16) 0px 1px 4px;
  border-radius: 8px;
  padding: 20px 40px;
  margin: 50px 0 0 0;

  @media only screen and (max-width: 800px) {
    padding: 20px 5px;
    border-radius: 0;
  }
`;

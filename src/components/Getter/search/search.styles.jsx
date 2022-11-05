import styled from "styled-components";

export const GroupContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 23px 20px;
  height: 36px;
  // background: rgba(72, 77, 88, 0.2);
  background: #eaddff21; 
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  margin: auto 0;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const FormInputContainer = styled.input`
  background: transparent;
  border: none;
  width: 170px;
  height: 20px;

  &:focus {
    color: #000;
    outline: none;
    font-weight: 800;
    font-size: 16px;
    font-family: typo;

    @media screen and (max-width: 800px) {
      color: #000;
    }
  }

  &::placeholder {
    font-weight: 800;
    font-size: 16px;
    font-family: typo;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.45);
    color: #000;

    @media screen and (max-width: 800px) {
      color: #000;
    }
  }

`;

export const SearchImg = styled.img`
  width: 100%;
  color: #fff;
  margin: 3px 0 0 0;
  padding: 0 20px 0 0;

  @media screen and (max-width: 800px) {
   width: 50px;
  }
`;

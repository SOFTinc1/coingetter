import styled from "styled-components";

export const Section6Container = styled.div`
  display: flex;
  gap: 20px;
  margin: 40px 0 0 300px;

  @media screen and (max-width: 800px) {
    margin: 30px 0 0 0;
    display: block;
  }
`;
export const Button = styled.div`
  display: flex;
  gap: 0;
  border: 1px solid #141b29;
  border-radius: 50px;

  @media screen and (max-width: 800px) {
  
  }
`;
export const Black = styled.div`
  background: #141b29;
  color: #fff;
  font-family: euclid;
  text-transform: capitalize;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 50px;
  // border-top-left-radius: 50px;
  // border-bottom-left-radius: 50px;

  @media screen and (max-width: 800px) {\
    
  }
`;
export const White = styled.div`
  background: #fff;
  color: #141b29;
  font-family: euclid;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 50px;

  @media screen and (max-width: 800px) {
  }
`;
export const Text = styled.h1`
  font-family: typo;
  text-transform: lowercase;
  font-size: 30px;
  font-weight: 800;
  margin: auto 0;
  letter-spacing: 1px;

  @media screen and (max-width: 800px) {
    margin: 20px auto 0 auto;
    font-size: 22px;
    text-align: center;
  }
`;

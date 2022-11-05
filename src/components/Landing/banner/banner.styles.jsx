import styled from "styled-components";

export const BannerContainer = styled.div`
  padding: 40px 0;

  @media screen and (max-width: 800px) {
    padding: 80px 10px 0 10px;
  }
`;
// export const Head = styled.h1`
//   background-color: transparent;
//   background-image: linear-gradient(
//     90deg,
//     #a3d5e7 -3.59%,
//     #9074ed 53.05%,
//     #ea3c5c 106.26%
//   );
//   background-size: 100%;
//   -webkit-background-clip: text;
//   -moz-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   -moz-text-fill-color: transparent;
//   margin: 0 auto;
//   color: #fff;
//   font-family: krok;
//   font-weight: 800;
//   letter-spacing: 2px;
//   opacity: 0.1;
//   text-transform: uppercase;
//   font-size: 200px;
//   text-align: center;

//   @media screen and (max-width: 800px) {
//     font-size: 90px;
//     margin: 60px auto;
//   }
// `;
export const H1 = styled.h1`
  font-family: typo;
  font-weight: 800;
  text-align: center;
  margin: 60px auto 0 auto;
  font-size: 50px;
  color: #141B29;
  text-transform: capitalize;
  letter-spacing: 5px;
  gap: 20px;
  line-height: 88px;


  @media screen and (max-width: 800px) {
    font-size: 25px;
    margin: 0;
    line-height: 66px;
    font-family: typo;
    font-weight: 800;
  }
`;
export const Image = styled.img`
  width: 100px;
  height: 50px;
  border-radius: 50px;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    
  }
`;
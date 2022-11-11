import styled from "styled-components";
import Button from "../../button/button";

export const BannerContainer = styled.div`
  padding: 0;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-gap: 0px;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;
export const Col1 = styled.div``;
export const H1 = styled.h1`
  font-family: euclid;
  font-weight: 800;
  text-align: center;
  margin: 120px auto 20px auto;
  font-size: 55px;
  color: #363f4a;
  letter-spacing: 1px;
  line-height: 74px;
  padding: 0 10px;

  @media screen and (max-width: 800px) {
    font-size: 25px;
    margin: 20px auto 20px auto;
  }
`;
export const Details = styled.p`
  font-family: typo;
  font-weight: 800;
  text-align: center;
  font-size: 14px;
  color: #141b29;
  text-transform: lowercase;
  letter-spacing: 2px;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;
export const ButtonC = styled(Button)`
  width: 70%;
  margin: 50px auto 0 auto;
  text-align: center;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 18px;
  color: #000;
  text-transform: lowercase;
  opacity: .6;
  font-weight: 400;

  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 10px auto 30px auto;
  }
`;
export const Image = styled.img`
  width: 100px;
  height: 50px;
  border-radius: 50px;
  margin: 0 auto;
  background: #f5f5f5;
  // opacity: .5;

  @media screen and (max-width: 800px) {
  }
`;
export const Col2 = styled.div`
  background: #d1e3e5;
`;
export const ImageSrc = styled.img`
  width: 100%;
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

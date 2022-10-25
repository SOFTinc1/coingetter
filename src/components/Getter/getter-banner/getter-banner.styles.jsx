import styled from "styled-components";
import Button from "../../button/button";

export const GetterBannerContainer = styled.div``;
export const Section1 = styled.div`
  display: flex;
  background: #eaddff21;
  padding: 18px 80px;

  @media screen and (max-width: 800px) {
    display: block;
    padding: 18px 10px;
    width: 100%;
  }
`;
export const H1 = styled.h1`
  font-size: 16px;
  color: #fff;
  font-family: euclid;
  font-weight: 400;
  margin: 15px 0 0 0;
  // letter-spacing: 2px;
  // line-height: 22px;
`;
export const GreenSpan = styled.span`
  color: #00bdb0;
`;
export const LighGreenSpan = styled.span`
  color: #11bc60;
`;
export const ButtonContainer = styled.div`
  display: flex;
  margin: 0 0 0 60px;
  gap: 20px;

  @media screen and (max-width: 800px) {
    margin: 30px auto;
  }
`;
export const Button1 = styled(Button)`
  padding: 13px;
  text-transform: capitalize;
`;
export const Button2 = styled(Button)`
  padding: 13px;
  text-transform: capitalize;
`;
export const Section2 = styled.div``;
export const BannerText = styled.h1`
  color: #fff;
  font-family: typo;
  font-weight: 800;
  letter-spacing: 2px;
  text-align: center;
  font-size: 78px;
  margin: 50px 0 0 0;
  padding: 24px 200px;

  @media screen and (max-width: 800px) {
    font-size: 52px;
    padding: 0;
  }
`;
export const BannerTextSpan = styled.span`
  color: #00bdb0;
`;
export const BannerDetails = styled.p`
  padding: 0 150px;
  color: #fff;
  opacity: 0.6;
  font-family: typo;
  font-weight: 800;
  letter-spacing: 2px;
  text-align: center;
  font-size: 20px;
  text-transform: capitalize;

  @media screen and (max-width: 800px) {
    padding: 0;
    font-size: 15px;
  }
`;
export const BannerDetailsSpan = styled.span`
  color: #00bdb0;
  font-size: 15px;
`;
export const Section3 = styled.div`
  padding: 44px 80px;

  @media screen and (max-width: 800px) {
    padding: 44px 0;
  }
`;
export const Head = styled.h1`
  color: #fff;
  font-family: typo;
  font-weight: 800;
  letter-spacing: 0.0015em;
  text-align: left;
  font-size: 40px;

  @media screen and (max-width: 800px) {
    padding: 0 0 0 20px;
  }
`;
export const ImageDiv = styled.div`
  display: block;
  gap: 20px;
`;
export const ImageSrc = styled.img`
  width: 100%;
  height: auto;
`;

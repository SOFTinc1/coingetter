import styled from "styled-components";

export const BannerContainer = styled.div`
  padding: 40px 0;
`;
export const Head = styled.h1`
  background-color: transparent;
  background-image: linear-gradient(
    90deg,
    #a3d5e7 -3.59%,
    #9074ed 53.05%,
    #ea3c5c 106.26%
  );
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-family: typo;
  font-weight: 800;
  letter-spacing: 0;
  margin: 0 auto;
  opacity: 0.1;
  text-transform: lowercase;
  font-size: 250px;

  @media screen and (max-width: 800px) {
    font-size: 90px;
    margin: 60px auto;
  }
`;
export const H1 = styled.h1`
  font-family: syne;
  text-align: center;
  margin: 0;
  font-size: 50px;
  padding: 0;
  margin: -120px 0 0 0;

  @media screen and (max-width: 800px) {
    font-size: 40px;
    margin: -100px 0 0 0;
  }
`;
export const P = styled.p`
  font-family: typo;
  text-align: center;
  text-transform: lowercase;
  letter-spacing: 2px;
  padding: 0 0 80px 0;
  font-weight: 800;
  font-size: 16px;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;
export const ImageRow = styled.div`
  display: block;
  padding: 0 80px;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;
export const Image = styled.img`
  width: 100%;
  border: 1px solid #0277bd;
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 800px) {
    border: none;

    &:hover {
      transform: none;
    }
  }
`;

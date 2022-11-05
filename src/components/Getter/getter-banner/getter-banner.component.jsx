import {
  GetterBannerContainer,
  Section1,
  H1,
  GreenSpan,
  ButtonContainer,
  Button1,
  Button2,
  Section2,
  BannerText,
  BannerTextSpan,
  BannerDetails,
  BannerDetailsSpan,
  Section3,
  Head,
  ImageDiv,
  ImageSrc,
} from "./getter-banner.styles";
import Marquee from "react-fast-marquee";
// import High from "../../../assets/image/high.png";
// import High1 from "../../../assets/image/high1.png";
// import High2 from "../../../assets/image/high2.png";
// import High3 from "../../../assets/image/high3.png";

const GetterBanner = () => (
  <GetterBannerContainer>
    <Section1>
      <Marquee gradient={false} speed={100}>
        <H1>
          Cryptos: <GreenSpan>20,835</GreenSpan> Exchanges:{" "}
          <GreenSpan>564</GreenSpan> Market Cap:{" "}
          <GreenSpan>$1,030,638.94M</GreenSpan>{" "}
          <GreenSpan>1.9%</GreenSpan> 24h Vol:{" "}
          <GreenSpan>$59,211.98M</GreenSpan> Dominance:{" "}
          <GreenSpan>BTC 37.4% ETH 18.6% Gas: 10 GWEI</GreenSpan>
        </H1>
      </Marquee>

      {/* <ButtonContainer>
        <Button1>login</Button1>
        <Button2>signup</Button2>
      </ButtonContainer> */}
    </Section1>

    <Section2>
      <BannerText>
        Live Crytocurrency <BannerTextSpan>Prices</BannerTextSpan> and{" "}
        <BannerTextSpan>Market Cap </BannerTextSpan>
      </BannerText>
      <BannerDetails>
        The market cap of all cryptocurrencies is at $1,03T, up{" "}
        <BannerDetailsSpan>2,28%</BannerDetailsSpan> in the last 24 hours
      </BannerDetails>
    </Section2>

    <Section3>
      <Head>Highpoint</Head>
      {/* <ImageDiv>
        <ImageSrc src={High1} />
        <ImageSrc src={High2} />
        <ImageSrc src={High3} />
        <ImageSrc src={High} />
      </ImageDiv> */}
    </Section3>
  </GetterBannerContainer>
);

export default GetterBanner;

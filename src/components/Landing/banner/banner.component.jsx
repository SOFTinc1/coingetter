import { BannerContainer, Head, H1, P, ImageRow, Image } from "./banner.styles";
import bannerImg from "../../../assets/image/cover.jpg";

const Banner = () => (
  <BannerContainer>
    <Head>welcome</Head>
    <H1>we have everything crypto</H1>
    <P>
      discover the wonders of crypto from swap to marketplace to watching and monitoring, coingetter is the complete crypto platform
    </P>
    <ImageRow>
      <Image src={bannerImg} />
    </ImageRow>
  </BannerContainer>
);

export default Banner;

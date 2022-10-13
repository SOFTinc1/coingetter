import { BannerContainer, Head, H1, P, ImageRow, Image } from "./banner.styles";
import bannerImg from "../../assets/image/cover.jpg";

const Banner = () => (
  <BannerContainer>
    <Head>welcome</Head>
    <H1>there's good inside.</H1>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, Voluptatibus,
      aliquid
    </P>
    <ImageRow>
      <Image src={bannerImg} />
    </ImageRow>
  </BannerContainer>
);

export default Banner;

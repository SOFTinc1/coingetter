import { BannerContainer, H1, Image } from "./banner.styles";
import Girl from "../../../assets/image/girl.jpg";

const Banner = () => (
  <BannerContainer>
    <H1>
      we have <Image src={Girl} /> everything crypto, discover the wonders of
      crypto from swap to <Image src={Girl} /> marketplace
    </H1>
  </BannerContainer>
);

export default Banner;

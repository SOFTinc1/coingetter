import { HomePageConatiner } from "./Homepage.styles";
// import Swap from "../../components/swap/swap.component";
import Banner from "../../components/banner/banner.component";
import HeaderHomepage from "../../components/header-homepage/header.component";

const HomePage = () => (
  <HomePageConatiner>
    {/* <Swap /> */}
    <HeaderHomepage />
    <Banner />
  </HomePageConatiner>
);

export default HomePage;

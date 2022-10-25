import { HomePageConatiner } from "./Homepage.styles";
// import Swap from "../../components/swap/swap.component";
import Banner from "../../components/Landing/banner/banner.component";
import HeaderHomepage from "../../components/Landing/header-homepage/header.component";

const HomePage = () => (
  <HomePageConatiner>
    {/* <Swap /> */}
    <HeaderHomepage />
    <Banner />
  </HomePageConatiner>
);

export default HomePage;

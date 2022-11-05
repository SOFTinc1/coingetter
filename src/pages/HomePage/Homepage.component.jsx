import { HomePageConatiner } from "./Homepage.styles";
import Banner from "../../components/Landing/banner/banner.component";
import HeaderHomepage from "../../components/Landing/header-homepage/header.component";
import Section6 from "../../components/Landing/section6/section6.component";

const HomePage = () => (
  <HomePageConatiner>
    <HeaderHomepage />
    <Banner />
    <Section6 />
  </HomePageConatiner>
);

export default HomePage;

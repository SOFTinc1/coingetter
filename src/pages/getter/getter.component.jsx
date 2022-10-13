import { GetterContainer } from "./getter.styles";
import GetterHeader from "../../components/getter-header/getter-header.component";
import GetterBanner from "../../components/getter-banner/getter-banner.component";
import GetterTable from "../../components/getter-table/getter-table.component";

const Getter = () => (
  <GetterContainer>
    <GetterHeader />
    <GetterBanner />
    <GetterTable />
  </GetterContainer>
);

export default Getter;

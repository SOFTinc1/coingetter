import styled from "styled-components";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export const GetterTableContainer = styled.div`
  padding: 24px 80px;
  overflow: scroll;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;
export const TabsContainer = styled(Tabs)``;
export const TabContainer = styled(Tab)``;
export const H1 = styled.h1`
  color: #fff;
  font-weight: 800;
  font-size: 42px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 2px;
  cursor: pointer;
  font-family: typo;
  margin: 30px auto;
`;
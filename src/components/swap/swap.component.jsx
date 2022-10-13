// import { useNavigate } from "react-router-dom";
import {
  SwapContainer,
  Head,
  Title,
  Icons,
  Icon,
  Black,
  FromDiv,
  Row,
  Row2,
  UserInput,
  Input,
  Equivalence,
  Equivalence2,
  ButtonC,
  ButtonC2,
  TokenDetails,
  TokenName,
  Balance,
  SwapIcon,
  ToDiv,
} from "./swap.styles";

const Swap = () => (
  //   let navigate = useNavigate();

  <SwapContainer>
    <Head>
      <Title>swap</Title>
      <Icons>
        <Icon>refresh</Icon>
        <Icon>settings</Icon>
      </Icons>
    </Head>
    <Black>
      <FromDiv>
        <Row>
          <UserInput>
            <Input placeholder="0.00" />
            <Equivalence> =$1.33 </Equivalence>
            <ButtonC>max</ButtonC>
          </UserInput>
          <TokenDetails>
            <TokenName>cope</TokenName>
            <Balance>balance: 200</Balance>
            <Equivalence2> =$12.33 </Equivalence2>
          </TokenDetails>
        </Row>
      </FromDiv>
      <SwapIcon></SwapIcon>
      <ToDiv>
        <Row2>
          <UserInput>
            <Input placeholder="0.00" />
            <Equivalence> =$1.33 </Equivalence>
            <ButtonC>max</ButtonC>
          </UserInput>
          <TokenDetails>
            <TokenName>sol</TokenName>
            <Balance>balance: 200</Balance>
            <Equivalence2> =$12.33 </Equivalence2>
          </TokenDetails>
        </Row2>
      </ToDiv>
    </Black>
    <ButtonC2>swap</ButtonC2>
  </SwapContainer>
);

export default Swap;

import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
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
  HeadContainer,
  Head,
} from "./getter-banner.styles";
import "./getter.css";
import Marquee from "react-fast-marquee";
import GetterHighpoint from "../getter-highpoint/getter-highpoint.component";

export default function GetterBanner() {
  const [open, setOpen] = useState(false);
  return (
    <GetterBannerContainer>
      <Section1>
        <Marquee gradient={false} speed={100}>
          <H1>
            Cryptos: <GreenSpan>20,835</GreenSpan> Exchanges:{" "}
            <GreenSpan>564</GreenSpan> Market Cap:{" "}
            <GreenSpan>$1,030,638.94M</GreenSpan> <GreenSpan>1.9%</GreenSpan>{" "}
            24h Vol: <GreenSpan>$59,211.98M</GreenSpan> Dominance:{" "}
            <GreenSpan>BTC 37.4% ETH 18.6% Gas: 10 GWEI</GreenSpan>
          </H1>
        </Marquee>

        <ButtonContainer>
          <Button1>login</Button1>
          <Button2>signup</Button2>
        </ButtonContainer>
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
        <HeadContainer>
          <Head>Highpoint</Head>
          <Form.Check
            type="switch"
            id="custom-switch"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          />
        </HeadContainer>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <GetterHighpoint />
          </div>
        </Collapse>
      </Section3>
    </GetterBannerContainer>
  );
}

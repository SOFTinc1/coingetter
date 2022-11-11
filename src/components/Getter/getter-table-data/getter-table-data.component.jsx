import {
  GetterTableDataContainer,
  Image0,
  Image1,
  Image2,
  Image3,
} from "./getter-table-data.styles";
import "./getter-table.css";
import Star from "../../../assets/svg/star.svg";
import Bitcoin from "../../../assets/svg/bitcoin.svg";
import Graph from "../../../assets/svg/graph.svg";
import More from "../../../assets/svg/more.svg";

const GetterTableData = (props) => (
  <GetterTableDataContainer>
    <div class="grid-container">
      <div class="grid">

        <div class="grid-col2 grid-col--fixed-left">
          <div class="grid-item grid-item--header">
            <p>#</p>
          </div>
          <div class="grid-item move-away">
            <div className="star-flex">
              <Image0 src={Star} />
              <div className="details">
                <p className="big">
                  1
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid-col grid-col--fixed-left">
          <div class="grid-item grid-item--header">
            <p>Coins</p>
          </div>
          <div class="grid-item move-away move-away-par">
            <div className="coin-flex">
              <Image1 src={Bitcoin} />
              <div className="details">
                <p className="big">
                  BTC <br />
                  {/* Bitcoin{" "} */}
                  {props.student.firstName}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid-col">
          <div class="grid-item grid-item--header">
            <p>Price</p>
          </div>
          <div class="grid-item move-away">
            <p>$19.088.0</p>
          </div>
        </div>

        <div class="grid-col">
          <div class="grid-item grid-item--header">
            <p>1h</p>
          </div>
          <div class="grid-item move-away">
            <p>-0.1%</p>
          </div>
        </div>

        <div class="grid-col">
          <div class="grid-item grid-item--header">
            <p>4h</p>
          </div>
          <div class="grid-item move-away">
            <p>-0.1%</p>
          </div>
        </div>

        <div class="grid-col">
          <div class="grid-item grid-item--header">
            <p>24h</p>
          </div>
          <div class="grid-item move-away">
            <p>12.4%</p>
          </div>
        </div>

        <div class="grid-col">
          <div class="grid-item grid-item--header">
            <p>Last 7 Days</p>
          </div>
          <div class="grid-item move-away">
            <Image2 src={Graph} />
          </div>
        </div>

        <div class="grid-col">
          <div class="grid-item grid-item--header">
            <p>24h Volume</p>
          </div>
          <div class="grid-item move-away">
            <p>23.549.71M </p>
          </div>
        </div>

        <div class="grid-col">
          <div class="grid-item grid-item--header">
            <p>Market Cap</p>
          </div>
          <div class="grid-item move-away">
            <p>$233.549.71M </p>
          </div>
        </div>

        <div class="grid-col">
          <div class="grid-item grid-item--header">
            <p>More</p>
          </div>
          <div class="grid-item move-away">
            <Image3 src={More} />
          </div>
        </div>

        {/* <div class="grid-col grid-col--fixed-right">
          <div class="grid-item grid-item--header">
            <p>#</p>
          </div>
          <div class="grid-item move-away">
            <p>1</p>
          </div>
        </div> */}
      </div>
    </div>
  </GetterTableDataContainer>
);

export default GetterTableData;

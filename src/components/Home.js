import React from "react";
import zomi from "../images/zomi.png";
import zlp from "../images/zlp.png";
import fb from "../images/Contact/facebook.png";
import gith from "../images/Contact/github.png";
import insta from "../images/Contact/instagram.png";
import twitter from "../images/Contact/twitter.png";
import ld from "../images/Contact/linkedin.png";
import logo from "../images/Logo.png";
export default function Home() {
  return (
    <>
      <div className="home1">
        <div className="Home_heading1">
          Decentralized
          <br />
          Perpetual <br /> Exchange
        </div>
        <div className="heading_text">
          Trade BTC, ETH, AVAX and other top
          <br /> cryptocurrencies with up to 30x leverage <br /> directly from
          your wallet
        </div>
        <button
          className="btn btn-outline-success"
          type="submit"
          style={{ marginTop: "9px" }}
        >
          Launch Exchange
        </button>

        <div className="container1">
          <div className="cards">
            <div className="icon">
              <img
                className="fa fa-cog"
                src="https://zomi.finance/static/media/ic_trading.2c53815a.svg"
                alt=""
              ></img>
            </div>
            <div className="content">
              <div className="txt1">Total Trading Volume</div>
              <p>$0</p>
            </div>
          </div>

          <div className="cards">
            <div className="icon">
              <img
                className="fa fa-cog"
                src="https://zomi.finance/static/media/ic_stats.f0a18011.svg"
                alt=""
              ></img>
            </div>
            <div className="content">
              <div className="txt1">Open Interest</div>
              <p>$0</p>
            </div>
          </div>

          <div className="cards">
            <div className="icon">
              <img
                className="fa fa-cog"
                src="https://zomi.finance/static/media/ic_totaluser.ae09b310.svg"
                alt=""
              ></img>
            </div>
            <div className="content">
              <div className="txt1">Total Users</div>
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="home2">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="contents">
                <div className="ico">
                  <img
                    src="https://zomi.finance/static/media/ic_liquidity.505b3f30.svg"
                    alt=""
                  />
                  Reduce Liquidation Risks
                </div>
                <div className="info">
                  An aggregate of high-quality price feeds determine when
                  liquidations occur. This keeps positions safe from temporary
                  wicks.
                </div>
              </div>
            </div>
            <div className="col">
              <div className="contents">
                <div className="ico">
                  <img
                    src="https://zomi.finance/static/media/ic_cost.b4a729d3.svg"
                    alt=""
                  />
                  Save on Costs
                </div>
                <div className="info">
                  Enter and exit positions with minimal spread and zero price
                  impact. Get the optimal price without incurring additional
                  costs.
                </div>
              </div>
            </div>
            <div className="col">
              <div className="contents">
                <div className="ico">
                  <img
                    src="https://zomi.finance/static/media/ic_simpleswaps.2005009f.svg"
                    alt=""
                  />
                  Simple Swaps
                </div>
                <div className="info">
                  Open positions through a simple swap interface. Conveniently
                  swap from any supported asset into the position of your
                  choice.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tokens">
        <div className="tokenhead">
          Two tokens create <br /> our ecosystem
        </div>
        <div className="container my-5">
          <div className="row my-3">
            <div className="col border mx-5 rounded">
              <div className="ico2">
                <img src={zomi} alt="" />
                $ROMI
              </div>
              <div className="contenttok">
                $RLP is the liquidity provider token. Accrues 70% of the
                platform's generated fees.
                <p>Ethereum APR: 1,655,973,738.37%</p>
                <div className="tokenbutton">
                  <button type="button" className="btn btn-success">
                    Buy
                  </button>
                  <button type="button" className="btn btn-dark">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="col border mx-5 rounded">
              <div className="ico2">
                <img src={zlp} alt="" />
                $RLP
              </div>
              <div className="contenttok">
                $RLP is the liquidity provider token. Accrues 70% of the
                platform's generated fees.
                <p>Ethereum APR: 1,655,973,738.37%</p>
                <div className="tokenbutton">
                  <button type="button" className="btn btn-success">
                    Buy
                  </button>
                  <button type="button" className="btn btn-dark">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="contact">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="contacts">
         <a href="#"><img src={gith} alt="" /></a> 
          <a href="#"><img src={fb} alt="" /></a>
          <a href="#"><img src={ld} alt="" /></a>
         <a href="#"><img src={twitter} alt="" /></a> 
        <a href="#"><img src={insta} alt="" /></a>  
        </div>
      </div>

      <div className="footer">
        <a href="#">Terms and Conditions</a>
        <a href="#">Referral Terms</a>
        <a href="#">Media Kit</a>
    </div>
    </>
  );
}

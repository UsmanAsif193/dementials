import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <section className="footerSection">
        <Container>
          <Row>
            <Col md={6} style={{ paddingRight: "30px" }}>
              <div className="footerLogo">
                <img src="./logo/logo.gif" alt="footer logo" />
              </div>
            </Col>
            <Col md={6}>
              <div className="footerInfo">
                <h1>
                  Powered by{" "}
                  <span>
                    <img src="./logo/logo-pixelmind.png" alt="footer logo" />
                  </span>
                </h1>
                <h2>
                  © 2021 Dementals, <span>ALL RIGHTS RESERVED.</span>
                </h2>
                <div className="socialIcon">
                  <ul>
                    <li>
                      <a href="https://discord.gg/Dementals">
                        <img src="./icons/icons8-discord.svg" alt="discord" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/DementalsNFT">
                        <img src="./icons/icons8-twitter.svg" alt="twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="./icons/Group 1231.svg" alt="opensea" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default Footer;

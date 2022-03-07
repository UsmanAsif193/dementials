import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import "./Faq.css";

function Faq() {
  return (
    <>
      <section className="faqSection" id="FAQS">
        <Container>
          <Row>
            <Col md={12}>
              <div className="faqsHeading">
                <h1>FAQS</h1>
              </div>
            </Col>
            <Col md={12}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="heading_faq">
                    How do I get on the Whitelist?
                  </Accordion.Header>
                  <Accordion.Body className="body_faq">
                    We are taking the Whitelisting process very seriously. In
                    our opinion, there is something inherently wrong with the
                    current way the NFT space handles WL. We are fortunate
                    enough to change the way WL works and hopefully set the
                    standard going forward. We are offering a fair and
                    transparent way to be Whitelisted by leveraging The
                    Mentalverse | Season 1. Simply, play the game on Discord,
                    earn enough credits and “buy” your Whitelist role in-game!
                    This way, it’s both fun and fair.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="heading_faq">
                    How much will it cost to mint an NFT?
                  </Accordion.Header>
                  <Accordion.Body className="body_faq">
                    The Dgenesis Collection mint price will be announced prior
                    to the close of Season 1. Stay updated with the Discord and
                    Twitter.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="heading_faq">
                    How long will WHITELIST MEMBERS have to mint their NFTs?
                  </Accordion.Header>
                  <Accordion.Body className="body_faq">
                    Whitelisted members of the community will have 36 hours to
                    mint their Dementals.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className="heading_faq">
                    Is there a limit to how many I can mint?
                  </Accordion.Header>
                  <Accordion.Body className="body_faq">
                    Yes, max 2 per wallet. We would like to keep Dementals NFT’s
                    distributed evenly amongst the community.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="heading_faq">
                    Where will I be able to mint?
                  </Accordion.Header>
                  <Accordion.Body className="body_faq">
                    Minting will happen right here on this site. The date for
                    Private, Whitelist and Public sales will be announced on all
                    socials in the near future.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header className="heading_faq">
                    When is the Presale?
                  </Accordion.Header>
                  <Accordion.Body className="body_faq">
                    Currently, the Presale date for Dementals is unannounced.
                    Follow and keep updated via our socials at the top of the
                    site.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header className="heading_faq">
                    When is the public launch?
                  </Accordion.Header>
                  <Accordion.Body className="body_faq">
                    Currently, the Public Launch date for Dementals is
                    unannounced. Please note that a Public Sale may never take
                    place. Follow and keep updated via our socials at the top of
                    the site.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Faq;

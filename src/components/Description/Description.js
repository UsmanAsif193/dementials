import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//css
import "./Description.css";

function Description() {
  return (
    <div className="bg_image_1" id="DISCOVER">
      <>
        <Container fluid>
          <Row>
            <Col lg={7}>
              <div className="rightSideImg">
                <img src={"/bg_images/bg.png"} alt="IMAGES" />
              </div>
            </Col>
            <Col lg={5}>
              <div className="rightText">
                <p>
                  Dementals are an advanced interplanetary society of degenerate
                  elemental robots existing inside a digital solar-system
                  called, The Mentalverse. The System consists of 5 Planets and
                  1 very special Moon. Each planet contains an individually
                  inherent mineable resource and is home to it’s own species of
                  Dementals. You will learn more about The Mentalverse, it’s
                  planets, their vital resources and the species that originate
                  them as you continue to explore.
                </p>
                <p className="d-none d-lg-block">
                  The Dgenesis Collection of 5,000 individually unique GameFi
                  avatars represent your citizenship and key to The Mentalverse.
                  By holding your Demental, you will have access to play as your
                  avatar in the current, and future Seasons of this Play-2-Earn
                  meta.{" "}
                </p>

                <p className="d-none d-lg-block">
                  Each Season represents an evolutionary milestone for the
                  project. The Mentalverse | Season 1 is our proof-of-concept
                  and is playable NOW! We’ve managed to develop the first-ever
                  P2E metaRPG gamified Discord server for our community to play
                  and enjoy as we build Season 2 and transition The Mentalverse
                  into the 3D realm. We get the added benefit of using S1 to
                  study the economic and behavioral dynamics of our players, to
                  optimize future iterations of the game. Season 1 is packed
                  with features. Players can travel The System, mine resources,
                  complete missions, create or join guilds, work for credits,
                  steal, beg, fight, trade, raid, upgrade stats, make friends or
                  enemies, gamble, and engage in a plethora of .DGEN activites.
                  If you haven’t already, join our Discord and engage with other
                  Dementals in a uniquely fun and immersive meta experience.
                  We’ll see you there, Mental!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </>
      {/* <div className='container-fluid'>
                <div className='row justify-content-end'>
                    <div className='col-md-6 desc'>
                        <p>Dementals are an advanced interplanetary society of degenerate elemental robots existing inside a digital solar-system called, The Mentalverse. The System consists of 5 Planets and 1 very special Moon. Each planet contains an individually inherent mineable resource and is home to it’s own species of Dementals. You will learn more about The Mentalverse, it’s planets, their vital resources and the species that originate them as you continue to explore.</p>
                        <p>The Dgenesis Collection of 5,000 individually unique GameFi avatars represent your citizenship and key to The Mentalverse. By holding your Demental, you will have access to play as your avatar in the current, and future Seasons of this Play-2-Earn meta. </p>
                        <p>Each Season represents an evolutionary milestone for the project. The Mentalverse | Season 1 is our proof-of-concept and is playable NOW! We’ve managed to develop the first-ever P2E metaRPG gamified Discord server for our community to play and enjoy as we build Season 2 and transition The Mentalverse into the 3D realm. We get the added benefit of using S1 to study the economic and behavioral dynamics of our players, to optimize future iterations of the game. Season 1 is packed with features. Players can travel The System, mine resources, complete missions, create or join guilds, work for credits, steal, beg, fight, trade, raid, upgrade stats, make friends or enemies, gamble, and engage in a plethora of .DGEN activites. If you haven’t already, join our Discord and engage with other Dementals in a uniquely fun and immersive meta experience. We’ll see you there, Mental!</p>

                        <div className='flex d-flex flex-row-reverse gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div> */}
    </div>
  );
}

export default Description;

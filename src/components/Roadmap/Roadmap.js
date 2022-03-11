import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Roadmap.css";

function Roadmap() {
  return (
    <>
      <section className="roadmapSection" id="ROADMAP">
        <Container>
          <Row>
            <Col md={12}>
              <div className="roadmapHeading">
                <h1>Roadmap</h1>
              </div>
              <div className="roadmap">
                <ul class="timeline">
                  <li>
                    <h1>SEASON 01:</h1>
                    <h2>DISCORD META_RPG</h2>
                    <div className="pointDescription">
                      <p>
                        - Develop a community-narrative-driven metaverse
                        role-playing-game inside of Discord
                      </p>
                      <p>
                        - Develop and add 3D Mini-Game inside the Discord RPG
                      </p>
                      <p> - Provide Gameplay sneak peeks of Season 2</p>
                      <p> - Mint 5,000 Dgenesis Dementals</p>
                      <p>
                        - Donate 5% of revenue to a Mental Health Charity chosen
                        by the community
                      </p>
                      <p>
                        - Distribute 10% of revenue back into The Treasury to
                        fund development of Season 3
                      </p>
                    </div>
                  </li>
                  <li>
                    <h1>SEASON 02:</h1>
                    <h2>3D BATTLE ROYALE SHOOTER</h2>
                    <div className="pointDescription">
                      <p>
                        - Release $MNTL token as well as tokenized mineable
                        resources
                      </p>
                      <p>
                        - [Currently In Development] Complete development and
                        launch of P2E 2v2v2v2v2 Battle Royale style shooter
                      </p>
                      <p> - Announce P2E mechanics</p>
                      <p> - Release the follow-up 5K Dementals Collection</p>
                      <p>
                        - Donate 10% of revenue to the same Mental Health
                        Charity previously chosen by the community.
                      </p>
                      <p>
                        - Distribute 20% of revenue back into The Treasury to
                        fund development of Season 3
                      </p>
                    </div>
                  </li>
                  <li>
                    <h1>SEASON 03:</h1>
                    <h2>P2E OPEN-SYSTEM AAA STYLE SPACE EXPLORER</h2>
                    <div className="pointDescription">
                      <p>
                        - Begin development of our flagship P2E open-world AAA
                        style space explorer game
                      </p>
                      <p>
                        - Model and airdrop 3D counterparts for all 10,000
                        Dementals useable for Season 3
                      </p>
                      <p>
                        {" "}
                        - Model and mint in-game assets useable for Season 3{" "}
                      </p>
                      <p>
                        {" "}
                        - Donate 15% of revenue to the same Mental Health
                        Charity previously chosen by the community
                      </p>
                      <p>
                        - Distribute 30% of revenue from the sale of in-game
                        assets back to $MNTL holders
                      </p>
                      <p>
                        - Work with the community to further enhance The
                        Mentalverse for Season 4
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Roadmap;

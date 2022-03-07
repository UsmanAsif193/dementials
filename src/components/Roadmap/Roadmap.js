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
                        {" "}
                        - Develop a community-narrative-driven metaverse
                        role-playing-game inside of Discord
                      </p>
                      <p>
                        {" "}
                        - Develop and add 3D Mini-Game inside the Discord RPG
                      </p>
                      <p> - Provide Gameplay sneak peeks of Season 2</p>
                      <p> - Mint 5,000 Dgenesis Dementals</p>
                      <p>
                        {" "}
                        - Donate 5% of revenue to a Mental Health Charity chosen
                        by the community
                      </p>
                      <p>
                        {" "}
                        - Distribute 10% of revenue back into The Treasury to
                        fund development of Season 3
                      </p>
                    </div>
                  </li>
                  <li>
                    <h1>SEASON 02:</h1>
                    <h2>DISCORD META_RPG</h2>
                    <div className="pointDescription">
                      <p>
                        {" "}
                        - Develop a community-narrative-driven metaverse
                        role-playing-game inside of Discord
                      </p>
                      <p>
                        {" "}
                        - Develop and add 3D Mini-Game inside the Discord RPG
                      </p>
                      <p> - Provide Gameplay sneak peeks of Season 2</p>
                      <p> - Mint 5,000 Dgenesis Dementals</p>
                      <p>
                        {" "}
                        - Donate 5% of revenue to a Mental Health Charity chosen
                        by the community
                      </p>
                      <p>
                        {" "}
                        - Distribute 10% of revenue back into The Treasury to
                        fund development of Season 3
                      </p>
                    </div>
                  </li>
                  <li>
                    <h1>SEASON 03:</h1>
                    <h2>DISCORD META_RPG</h2>
                    <div className="pointDescription">
                      <p>
                        {" "}
                        - Develop a community-narrative-driven metaverse
                        role-playing-game inside of Discord
                      </p>
                      <p>
                        {" "}
                        - Develop and add 3D Mini-Game inside the Discord RPG
                      </p>
                      <p> - Provide Gameplay sneak peeks of Season 2</p>
                      <p> - Mint 5,000 Dgenesis Dementals</p>
                      <p>
                        {" "}
                        - Donate 5% of revenue to a Mental Health Charity chosen
                        by the community
                      </p>
                      <p>
                        {" "}
                        - Distribute 10% of revenue back into The Treasury to
                        fund development of Season 3
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

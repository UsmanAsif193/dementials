import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//css
import "./Mentalverse.css";

function Mentalverse() {
  return (
    <section className="bg_mentalverse_1" id="PRICING">
      <div className="text-show">
        <img src={"./bg_images/Mask_Group_8.png"} alt="Snow" />
        <div className="mentalverse-top">
          <h2 className="mentalverse-heading">THE MENTALVERSE</h2>
          <h3>- Season 1 -</h3>
        </div>
        <div className="mentalverse-bottom">
          <h3 className="mentalverse-heading">
            <a
              href="https://discord.gg/Dementals"
              target="_blank"
              rel="noopener noreferrer"
            >
              Begin New Game
            </a>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Mentalverse;

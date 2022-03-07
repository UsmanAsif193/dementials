import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//css
import "./Mentals.css";
const options = {
  margin: 8,
  loop: true,
  responsiveClass: true,
  nav: false,
  dots: false,
  autoplay: true,
  // navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 2,
      dots: true,
    },
    400: {
      items: 2,
      dots: true,
    },
    600: {
      items: 2,
      dots: true,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
};
function Mentals() {
  return (
    <section className="meantals" id="THE-MENTALS">
      <Container fluid>
        <div className="meantalsHeading">
          <h1>THE MENTALS</h1>
        </div>

        <OwlCarousel
          className="owl-theme text-center mentalCarousel"
          {...options}
        >
          <div className="item">
            <img alt="user-logo" src={"./user-logo/IMG_0905.png"} />
            <div className="text-center mt-2">
              <h4 className="userName">MoonboyBAYC</h4>
              <p className="userPos">Discoverer</p>
              <p className="userDesc">Just a smol-brained Ape</p>
            </div>
          </div>
          <div className="item">
            <img alt="user-logo" src={"./user-logo/IMG_0904.png"} />
            <div className="text-center mt-2">
              <h4 className="userName">Adam B. Levine</h4>
              <p className="userPos">Project Advisor</p>
              <p className="userDesc">
                Managing Editor of Coindesk Founder of Pixelmind & Tokenly Host
                for Speaking of Bitcoin Podcast
              </p>
            </div>
          </div>
          <div className="item">
            <img alt="user-logo" src={"./user-logo/F5.png"} />
            <div className="text-center mt-2">
              <h4 className="userName">Feral</h4>
              <p className="userPos">Lead Unity Dev</p>
              <p className="userDesc">
                Experienced UI / UX Designer Licensed Console Game Developer
                Studio Director at Feralblast
              </p>
            </div>
          </div>
          <div className="item">
            <img
              alt="user-logo"
              src={"./user-logo/92614c47-7239-4a50-a207-8f20a2f93e52.png"}
            />
            <div className="text-center mt-2">
              <h4 className="userName">SPPR</h4>
              <p className="userPos">Blockchain Engineer</p>
              <p className="userDesc">
                Experienced Smart Contract Dev Full Stack Web Dev
              </p>
            </div>
          </div>
          <div className="item">
            <img alt="user-logo" src={"./user-logo/IMG_0903.png"} />
            <div className="text-center mt-2">
              <h4 className="userName">8KGOD</h4>
              <p className="userPos">Soundtrack Composers</p>
              <p className="userDesc">
                Composers of the Official Soundtrack for the Dementals
              </p>
            </div>
          </div>
        </OwlCarousel>
      </Container>
    </section>
  );
}

export default Mentals;

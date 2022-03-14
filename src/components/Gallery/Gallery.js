import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
//css
import "./Gallery.css";

const options = {
  margin: 15,
  loop: true,
  responsiveClass: true,
  nav: false,
  dots: false,
  autoplay: true,
  // navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};

const options1 = {
  margin: 15,
  loop: true,
  responsiveClass: true,
  nav: false,
  dots: false,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 2,
    },
    400: {
      items: 2,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};

function Gallery() {
  return (
    <>
      <section className="gallerySection" id="DISCOVER__1">
        <Container>
          <Row>
            <div className="galleryHeading">
              <h1>DGENESIS GALLERY</h1>
            </div>

            <div className="pcCarousel">
              <OwlCarousel className="owl-theme mt-2 text-center" {...options}>
                <div className="item">
                  <img src={"./user-logo/E7.png"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/F2.png"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/F3 (1).png"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/N5.png"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/E4.jpeg"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/F3.jpeg"} alt="gallery" />
                </div>
              </OwlCarousel>
              <OwlCarousel className="owl-theme mt-3 text-center" {...options}>
                <div className="item">
                  <img src={"./user-logo/F4.png"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/E1.png"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/E5.png"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/N2.png"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/F4.jpeg"} alt="gallery" />
                </div>

                <div className="item">
                  <img src={"./user-logo/E3.jpeg"} alt="gallery" />
                </div>
              </OwlCarousel>
            </div>

            <div className="mobileCarousel">
              <OwlCarousel className="owl-theme mt-2 text-center" {...options1}>
                <div className="item">
                  <img src={"./user-logo/E7.png"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/F2.png"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/F3 (1).png"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/N5.png"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/F4.jpeg"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/E3.jpeg"} alt="E3vdsav" />
                </div>
              </OwlCarousel>
              <OwlCarousel className="owl-theme mt-3 text-center" {...options1}>
                <div className="item">
                  <img src={"./user-logo/F4.png"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/E1.png"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/E5.png"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/N2.png"} alt="gallery" />
                </div>
                <div className="item">
                  <img src={"./user-logo/F3.jpeg"} alt="F3dfdasd" />
                </div>

                <div className="item">
                  <img src={"./user-logo/E4.jpeg"} alt="gallery" />
                </div>
              </OwlCarousel>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Gallery;

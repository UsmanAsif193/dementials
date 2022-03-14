import React, { useState } from "react";

//css
import "./Counter.css";

function Counter() {
  const [value, setValue] = useState(0);
  const handleChange = (e) => {
    setValue(parseInt(e.target.value) + 1);
  };
  if (value < 0) setValue(0);
  return (
    <section
      class="subscribe-area "
      id="MINT"
<<<<<<< HEAD
      style={{ height: "50vh", display: "flex", alignItems: "center" }}
=======
      style={{ padding: "10vh 0", display: "flex", alignItems: "center" }}
>>>>>>> 6d0f8c886ae10e53d2d8f42a4576aab2cf090b6d
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="subscribe-text">
              <h2 className="h2_text">MINT A DEMENTAL</h2>
              <span className="span_text">MINT DATE: TBA</span>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div class="col-md-5 mt-3">
            <div class="subscribe-wrapper subscribe2-wrapper">
              <div class="subscribe-form">
                <form action="#" className="d-flex align-items-center">
                  {/* <div className='number-input'> */}

                  <input
                    type="number"
                    className="input___mint_demental"
                    value={value}
                    onChange={handleChange}
                  />
                  <div className="d-flex w-auto position-relative justify-content-around flex-column text-black input____arrows">
                    <i
                      class="fas fa-arrow-up"
                      onClick={() => setValue(value + 1)}
                    ></i>
                    <i
                      class="fas fa-arrow-down"
                      onClick={() => setValue(value - 1)}
                    ></i>
                  </div>
                  {/* <div className='plus-minus'>
                                            <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
                                            <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
                                        </div> */}

                  {/* </div> */}

                  <button>MINT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;

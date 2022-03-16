import React, { useState } from "react";

//import CSS
import "./NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div class="nav">
        <input type="checkbox" id="nav-check" checked={isOpen} />
        <div class="nav-header">
          <div class="nav-title">
            <img src="./logo/logo.gif" id="logo" alt="logo" />
          </div>
        </div>
        <div class="nav-btn">
          {!isOpen ? (
            <label for="nav-check" onClick={() => setIsOpen(true)}>
              <span></span>
              <span></span>
              <span></span>
            </label>
          ) : (
            <i
              class="fa fa-times close____icon___navbar"
              onClick={() => setIsOpen(false)}
            ></i>
          )}
        </div>

        <div class="nav-links">
          <ul>
            <li>
              <a href="#MINT">MINT</a>
            </li>
            <li>
              <a href="#EXPLORE">EXPLORE</a>
            </li>
            <li>
              <a href="#PRICING">PLAY</a>
            </li>
            <li>
              <a href="#GALLERY">GALLERY</a>
            </li>
            <li>
              <a href="#ROADMAP">ROADMAP</a>
            </li>
            <li>
              <a href="#THE-MENTALS">THE MENTALS</a>
            </li>
            <li>
              <a href="#FAQS">FAQS</a>
            </li>
            <a class="icon" href="https://discord.gg/Dementals">
              <img alt="discord" src="./icons/icons8-discord.svg" />
            </a>
            <a class="icon" href="https://twitter.com/DementalsNFT">
              <img alt="twitter" src="./icons/icons8-twitter.svg" />
            </a>
            <a class="icon" href="#">
              <img alt="opensea" src="./icons/Group 1231.svg" />
            </a>
            <li className="walletBtn">
              <a href="#ROADMAP">Connect wallet</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;

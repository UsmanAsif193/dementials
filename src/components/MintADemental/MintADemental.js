import React, { useEffect, useState } from "react";

import "./MintADemental.css";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);
  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    audio.addEventListener("click", () => {
      setPlaying(true);
      setTimeout(() => {
        audio.play();
      }, 1000);
    });
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

function MintADemental() {
  const [playing, toggle] = useAudio("/songs/allSongs.mp3");
  return (
    <div id="MintADemental">
      <div className="img_div">
        <img className="user_g9 " src="./user-logo/Group 9.png" alt="user" />
      </div>
      <div onClick={toggle} className="icon__spectrum">
        <img
          src="/icons/open-audio-spectrum.png"
          className={playing ? "animation___icon__spectrum" : ""}
          alt=""
        />
      </div>
    </div>
  );
}

export default MintADemental;

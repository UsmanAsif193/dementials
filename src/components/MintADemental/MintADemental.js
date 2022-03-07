import React, { useEffect, useState } from "react";

import "./MintADemental.css";

const useAudio = (url) => {
  const [playing, setPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState(null);
  const toggle = () => {
    if (audioRef) {
      // console.log(audioRef);

      if (audioRef.src !== url) {
        audioRef.src = url;
      }
      // audioRef.load();

      if (!playing) {
        audioRef.play();
      } else {
        audioRef.pause();
      }
    }

    setPlaying(!playing);
  };

  useEffect(() => {
    console.log("useEffect" + audioRef);
    if (audioRef) {
      audioRef.src = url;
      audioRef.load();
    }
  }, [audioRef, url]);

  return [playing, toggle, setAudioRef];
};

function MintADemental() {
  const [playing, toggle, setAudioRef] = useAudio("/songs/allSongs.mp3");
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
        <audio ref={(c) => setAudioRef(c)} />
      </div>
    </div>
  );
}

export default MintADemental;

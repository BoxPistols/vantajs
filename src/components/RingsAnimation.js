import React, { useState, useEffect, useRef } from "react";
// import BIRDS from "vanta/dist/vanta.birds.min";
// import RINGS from "vanta/dist/vanta.rings.min";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

export const RingsAnimation = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 400.0,
          minWidth: 400.0,
          speed: 1.5,
          scale: 1.0,
          scaleMobile: 1.0,
          sunColor: 0xff2727,
          sunGlareColor: 0x283dd2,
          sunlightColor: 0xf6ffb3
          // color1: "#0000ff",
          // color2: "#ffffff"
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={vantaRef}>
      <h1 style={{ color: "#fff", paddingTop: "4vh" }}>
        Animated website backgrounds in a few lines of code.
      </h1>
    </div>
  );
};

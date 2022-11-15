/**
VANTA.GLOBE({
  el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x6b6bfa,
  color2: 0xc3d6eb,
  size: 1.10,
  backgroundColor: 0x0
})
 */

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";
// import WAVES from "vanta/dist/vanta.waves.min";

export const VtGlobe = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          size: 1.1,
          minHeight: 400.0,
          minWidth: 320.0,
          scale: 1.2,
          scaleMobile: 1.0,
          backgroundColor: 0x0,
          color: 0x6b6bfa,
          color1: 0x1eff,
          color2: 0xc3d6eb,
          birdSize: 1.9,
          wingSpan: 12.0,
          speedLimit: 3.0,
          separation: 31.0,
          alignment: 67.0,
          cohesion: 31.0,
          quantity: 4.0, // background: false
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div
      ref={vantaRef}
      style={{
        color: "#cdf",
        marginTop: "0px",
        padding: "8vh 4vw 400px",
      }}
    >
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p style={{ color: "#cdf", paddingTop: "4vh" }}>
        Animated website backgrounds in a few lines of code.
      </p>
    </div>
  );
};

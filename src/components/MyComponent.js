import React, { useState, useEffect, useRef } from "react";
// https://www.vantajs.com/?effect=waves
// https://dev.to/0xkoji/animated-website-backgrounds-easily-with-vantajs-lfp?signin=true
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";
// import WAVES from "vanta/dist/vanta.waves.min";

export const MyComponent = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 300.0,
          scale: 1.2,
          scaleMobile: 1.0,
          color1: 0x1eff,
          birdSize: 1.9,
          wingSpan: 12.0,
          speedLimit: 3.0,
          separation: 31.0,
          alignment: 67.0,
          cohesion: 31.0,
          quantity: 4.0 // background: false
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
        marginTop: "400px",
        background: "transparent",
        paddingTop: "10vh"
      }}
    >
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p style={{ color: "#cdf", paddingTop: "10vh" }}>
        Animated website backgrounds in a few lines of code.
      </p>
    </div>
  );
};

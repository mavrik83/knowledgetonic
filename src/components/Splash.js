import React from "react";
import Particles from "react-particles-js";
import HideOnScroll from "./HideOnScroll";

const Splash = (props) => {
  return (
    <HideOnScroll {...props}>
      <Particles
        params={{
          backgroundMode: {
            enable: true,
            zIndex: 1,
          },
          particles: {
            color: "#C96C08",
            number: {
              value: 100,
            },
            opacity: {
              value: 1,
            },
            size: {
              value: 2,
            },
            links: {
              color: "#000000",
              opacity: 0.4,
            },
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </HideOnScroll>
  );
};

export default Splash;

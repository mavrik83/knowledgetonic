import React from "react";
import { useScrollTrigger, Fade } from "@material-ui/core";

const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({ disableHysteresis: true });

  return (
    <Fade in={!trigger} timeout={2000}>
      <div>{children}</div>
    </Fade>
  );
};

export default HideOnScroll;

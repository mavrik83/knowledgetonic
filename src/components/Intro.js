import {
  Grid,
  Box,
  Typography,
  makeStyles,
  Fade,
  useScrollTrigger,
} from "@material-ui/core";
import { VscFoldDown } from "react-icons/vsc";

import React from "react";

const useStyles = makeStyles((theme) => ({
  customColor: {
    color: "#C96C08",
  },
}));

const Intro = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true });
  return (
    <Fade in={!trigger} direction="down" timeout={2000}>
      <Box
        height="95vh"
        id="back-to-top-anchor"
        style={{ zIndex: 1, position: "relative" }}
      >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "50%" }}
        >
          <Typography variant="h2">
            <span className={classes.customColor}>H</span>ello!
          </Typography>
          <Typography variant="h1" align="center">
            I'm Ryan Huber
          </Typography>
        </Grid>

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "30%" }}
        >
          <Typography variant="h4">
            Fullstack <span className={classes.customColor}>D</span>eveloper
          </Typography>
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "20%" }}
        >
          <Typography variant="h6">Scroll for more</Typography>
          <br />
          <Typography variant="h4">
            <VscFoldDown />
          </Typography>
        </Grid>
      </Box>
    </Fade>
  );
};

export default Intro;

import React from "react";
import {
  makeStyles,
  Box,
  useScrollTrigger,
  Zoom,
  Fab,
} from "@material-ui/core";
import { VscFoldUp } from "react-icons/vsc";
import About from "./components/About";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Splash from "./components/Splash";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(#262626 30%, #858585 90%)",
  },
  scroll: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ScrollTop = (props) => {
  const classes = useStyles();
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} className={classes.scroll}>
        {children}
      </div>
    </Zoom>
  );
};

const App = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Splash />
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <VscFoldUp />
        </Fab>
      </ScrollTop>
      <Intro />
      <Skills />
      <About />
      <Experience />
      <Footer />
    </Box>
  );
};

export default App;

import React from "react";
import {
  Container,
  Grid,
  Typography,
  useScrollTrigger,
  Fade,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import {
  SiJavascript,
  SiRuby,
  SiRails,
  SiReact,
  SiRedux,
  SiMaterialUi,
  SiBootstrap,
  SiPostgresql,
  SiAdobephotoshop,
} from "react-icons/si";

const useStyles = makeStyles((theme) => ({
  customColor: {
    color: "#C96C08",
  },
}));

const renderSkills = (matches) => {
  if (matches) {
    return (
      <>
        <Grid
          spacing={6}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h1">
              <SiRuby />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">
              <SiRails />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">
              <SiJavascript />
            </Typography>
          </Grid>
        </Grid>
        <Grid
          spacing={6}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h1">
              <SiReact />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">
              <SiRedux />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">
              <SiPostgresql />
            </Typography>
          </Grid>
        </Grid>
        <Grid
          spacing={6}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h1">
              <SiBootstrap />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">
              <SiMaterialUi />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">
              <SiAdobephotoshop />
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <Grid
          spacing={6}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h3">
              <SiRuby />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3">
              <SiRails />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3">
              <SiJavascript />
            </Typography>
          </Grid>
        </Grid>
        <Grid
          spacing={6}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h3">
              <SiReact />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3">
              <SiRedux />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3">
              <SiPostgresql />
            </Typography>
          </Grid>
        </Grid>
        <Grid
          spacing={6}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h3">
              <SiBootstrap />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3">
              <SiMaterialUi />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3">
              <SiAdobephotoshop />
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  }
};

const Skills = () => {
  const matches = useMediaQuery("(min-width:450px)");
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true });
  return (
    <Fade in={trigger} timeout={1000}>
      <Container display="flex">
        <hr
          style={{
            width: "50vw",
            marginBottom: "50px",
            borderTop: "2px solid",
          }}
        />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ marginBottom: "50px" }}
        >
          <Typography variant="h3" align="center">
            Currently in my <span className={classes.customColor}>t</span>
            oolbox:
          </Typography>
        </Grid>
        {renderSkills(matches)}
        <hr
          style={{
            width: "50vw",
            marginTop: "50px",
            borderTop: "2px solid",
          }}
        />
      </Container>
    </Fade>
  );
};

export default Skills;

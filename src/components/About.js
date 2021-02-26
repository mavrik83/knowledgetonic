import React from "react";
import { Container, Grid, Typography, makeStyles } from "@material-ui/core";

import profilePic from "../img/65F226D5-5605-4F8F-8E17-ED57B85D5D5C_1_105_c.jpeg";

const useStyles = makeStyles((theme) => ({
  customColor: {
    color: "#C96C08",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container
      display="flex"
      style={{ marginTop: "20vh", marginBottom: "10vh" }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ marginBottom: "50px" }}
      >
        <Typography variant="h3" align="center">
          My <span className={classes.customColor}>J</span>ourney...
        </Typography>

        <Typography variant="h4" align="center">
          Helicopter Mechanic{" "}
          <span className={classes.customColor}>&#10142;</span> Philosopher{" "}
          <span className={classes.customColor}>&#10142;</span> Software
          Engineer
        </Typography>
      </Grid>
      <Grid
        container
        spacing={4}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ marginTop: "50px" }}
      >
        <Grid item>
          <img
            src={profilePic}
            style={{
              filter: "grayscale(100%)",
              minWidth: "150px",
              maxWidth: "300px",
              border: "2px solid white",
              borderRadius: "15px",
            }}
            alt="profile"
          />
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            style={{
              minWidth: "200px",
              maxWidth: "500px",
              padding: "10px",
              borderRadius: "15px",
            }}
          >
            Curiosity has been the driving force in my life. I want to know
            'how' and 'why'. I want to understand the meaning, the reason, and
            the 'what-for?'.
            <br />
            <br />I strive for clean code and simplicity of design; I believe
            that less is, actually, more. You can see this approach in my
            designs and projects.
            <br />
            <br />I am a fullstack developer, bringing to bear the mental
            fortitude and critical thinking gained through philosophy and the
            troubleshooting skills and attention to detail gained through
            aviation maintenance.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;

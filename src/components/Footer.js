import React from "react";
import { Grid } from "@material-ui/core";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
      style={{ minHeight: "5vh" }}
    >
      <a href="https://github.com/mavrik83">
        <h1 style={{ fontSize: "50px", color: "black", marginRight: "20px" }}>
          <SiGithub />
        </h1>
      </a>
      <a href="https://www.linkedin.com/in/mavrik83/">
        <h1>
          <SiLinkedin
            style={{ fontSize: "50px", color: "black", marginLeft: "20px" }}
          />
        </h1>
      </a>
    </Grid>
  );
};

export default Footer;

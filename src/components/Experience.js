import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiHelicopter } from "react-icons/gi";
import { AiFillCode } from "react-icons/ai";
import { IoSchoolSharp } from "react-icons/io5";
import { Container, Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  customColor: {
    color: "#C96C08",
  },
}));

const Experience = () => {
  const classes = useStyles();
  return (
    <Container display="flex" maxWidth="md">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ marginBottom: "50px" }}
      >
        <Typography variant="h3" align="center">
          E<span className={classes.customColor}>x</span>perience and Education
        </Typography>
      </Grid>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#595959", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #262626" }}
          date="2020 - 2021"
          iconStyle={{ background: "#C96C08", color: "#fff" }}
          icon={<AiFillCode />}
        >
          <Typography variant="h5" className="vertical-timeline-element-title">
            Fullstack Software Engineering Program
          </Typography>
          <Typography
            variant="h6"
            className="vertical-timeline-element-subtitle"
          >
            Flatiron School
          </Typography>
          <ul>
            <li>Skilled in modern React.js (including Hooks)</li>
            <li>
              Proven ability in Front End/Client-Side Development with JS, CSS,
              and HTML
            </li>
            <li>
              Highly capable of building APIs and understands HTTP and REST
              architecture
            </li>
            <li>Experienced in Backend Development frameworks</li>
            <li>Strong knowledge in Object Oriented Languages</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#595959", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #262626" }}
          date="2018 - 2020"
          iconStyle={{ background: "#C96C08", color: "#fff" }}
          icon={<IoSchoolSharp />}
        >
          <Typography variant="h5" className="vertical-timeline-element-title">
            Bachelor of Arts - Philosophy
          </Typography>
          <Typography
            variant="h6"
            className="vertical-timeline-element-subtitle"
          >
            American University
          </Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#595959", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #262626" }}
          date="2016 - 2018"
          iconStyle={{ background: "#C96C08", color: "#fff" }}
          icon={<IoSchoolSharp />}
        >
          <Typography variant="h5" className="vertical-timeline-element-title">
            Associate of Science - Philosophy
          </Typography>
          <Typography
            variant="h6"
            className="vertical-timeline-element-subtitle"
          >
            Northern Virginia Community College
          </Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#595959", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #262626" }}
          date="2013 - 2018"
          iconStyle={{ background: "#C96C08", color: "#fff" }}
          icon={<GiHelicopter />}
        >
          <Typography variant="h5" className="vertical-timeline-element-title">
            Site Helicopter Mechanic
          </Typography>
          <Typography
            variant="h6"
            className="vertical-timeline-element-subtitle"
          >
            Metro Aviation, Inc.
          </Typography>
          <ul>
            <li>
              Operated a satellite hangar facility, successfully maintaining the
              daily operations of an EMS helicopter.
            </li>
            <li>
              Organized and implemented associated administrative tasks,
              focusing on timeliness and greatest efficiency.
            </li>
            <li>
              Ordered and maintained inventory of parts and supplies for optimal
              level of operational readiness.
            </li>
            <li>
              Complied with all FAA, state, and local regulations, while
              exceeding standards of quality control measures.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#595959", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #262626" }}
          date="2001 - 2011"
          iconStyle={{ background: "#C96C08", color: "#fff" }}
          icon={<GiHelicopter />}
        >
          <Typography variant="h5" className="vertical-timeline-element-title">
            Helicopter Mechanic
          </Typography>
          <Typography
            variant="h6"
            className="vertical-timeline-element-subtitle"
          >
            United States Army
          </Typography>
          <ul>
            <li>
              Worked individually and as part of a team to maintain fleets of
              scout helicopters both during war and in peacetime with an
              operational readiness rating of 95%.
            </li>
            <li>
              Engaged in multiple deployments, such as Operation: Iraqi Freedom
              and Operation: Enduring Freedom.
            </li>
            <li>
              Led 10-15 squads and platoons of soldiers during tenure with
              direct responsibility for subordinates’ professional and personal
              lives and through successful completion of maintenance and
              Army-directed goals.
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
};

export default Experience;

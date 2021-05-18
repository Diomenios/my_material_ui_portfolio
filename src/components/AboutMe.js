import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import PersonnalDescription from "./PersonnalDescription";
import me from "../images/me.jpg";
import developper from "../images/developper_image.webp"

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  image: {
    height: "auto",
    width: "75%",
    margin: "10% 5% 10% 10%",
  },
}));

const PERSONNAL_TITLE = "About me";
const PERSONNAL_DESCRIPTION = "I'm a student in BAC 3 in Computing Technology at the EPHEC school in Louvain-la-Neuve. \
  I chose to do computer science because i like to take on comlex challenges.";
const PROFESSIONNAL_PROJECT_TITLE = "Professionnal project" 
const PROFESSIONNAL_PROJECT_DESCRIPTION = "I would like to work as a fullstack web developper, a software developper or as a DevOps.\
  If I want to do these jobs it's because they will allow me to grow and develop my know-how, while allowing me to face various challenges. \
  "


const AboutMe = () => {

  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <img className={classes.image} src={me}/>
        </Grid>
        <Grid item xs={6}>
          <PersonnalDescription
            title={PERSONNAL_TITLE}
            description={PERSONNAL_DESCRIPTION}
          />
        </Grid>
        <Grid item xs={6}>
          <PersonnalDescription
            title={PROFESSIONNAL_PROJECT_TITLE}
            description={PROFESSIONNAL_PROJECT_DESCRIPTION}
          />
        </Grid>
        <Grid item xs={6}>
          <img className={classes.image} src={developper}/>
        </Grid>
      </Grid>
    </Box>
  );
};


export default AboutMe;

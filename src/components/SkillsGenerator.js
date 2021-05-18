import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import SkillBar from 'react-skillbars';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
    width: "100%",
    color: "tan",
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: "10% 10% 5% 10%",
  },
}));

const SkillsGenerator = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer}>
      <Typography className={classes.title} variant="h2"> 
        {props.title}
      </Typography>
      <SkillBar skills={props.skills}/>       
    </Container>
  );
};


export default SkillsGenerator;

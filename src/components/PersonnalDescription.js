import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: "80%",
    width: "80%",
    margin: "10% 10% 10% 0%",
    color: "tan",
  },
  title: {
    margin: "10% 10% 5% 10%",
  },
  description: {
    margin: "5% 10% 10% 10%",
  },
}));

const PersonnalDescription = (props) => {

  const classes = useStyles();
  return (
    <Container className={classes.mainContainer}>
      <Typography className={classes.title} variant="h2" gutterBottom> 
        {props.title} 
      </Typography>
      <Typography className={classes.description} variant="body1" gutterBottom> 
        {props.description} 
      </Typography>
    </Container>
  );
};


export default PersonnalDescription;
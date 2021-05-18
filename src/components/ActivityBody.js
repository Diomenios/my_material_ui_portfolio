import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: "100%",
    width: "100%",
    color: "tan",
  },
  description: {
    paddingTop: "3%",
    paddingBottom: "3%",
  },
}));
const FIRST_PART_TITLE = "Description"
const SECUND_PART_TITLE = "Reflective analysis"

const ActivityBody = (props) => {
  const classes = useStyles();

  return (
    <Container name={props.title} className={classes.mainContainer}>
      <Typography className={classes.title} variant="h3" align="center" gutterBottom> 
        {props.title} 
      </Typography>
      <Typography className={classes.title} variant="h4" align="left" gutterBottom> 
        {FIRST_PART_TITLE} 
      </Typography>
      <Typography className={classes.description} variant="body1" align="left" gutterBottom> 
        {props.description}
      </Typography>
      <Typography className={classes.title} variant="h4" align="left" gutterBottom> 
        {SECUND_PART_TITLE} 
      </Typography>
      <Typography className={classes.description} variant="body1" align="left" gutterBottom> 
        {props.analysis}
        {props.addLink ? 
          <a href={'https://github.com/Diomenios/game_jam_3.0'}> link. </a> :  
          undefined
        }
      </Typography>
    </Container>
  );
};


export default ActivityBody;
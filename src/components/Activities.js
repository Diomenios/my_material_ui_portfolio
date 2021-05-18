import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ActivityBody from "./ActivityBody";

const useStyles = makeStyles((theme) => ({
  image: {
    height: "auto",
    width: "80%",
    marginLeft: "10%",
    marginTop: "10%",
  },
  text: {
    marginTop: "5%",
  },
  text2: {
    marginTop: "5%",
  },
}));

const Activities = (props) => {
  const classes = useStyles();
  
  const renderGridBody = (gridParts) => {

    return gridParts.map((part, index) => {
      const imgGrid = <Grid key={part.alt} className={classes.text2} item xs={6}>
        <img className={classes.image} src={part.img} alt={part.alt}/>
      </Grid>
      const textGrid = <Grid key={part.title} className={classes.text} item xs={6}>
        <ActivityBody
          title={part.title}
          description={part.description}
          analysis={part.analysis}
          addLink={part.addLink}
        />
      </Grid>

      return index%2 === 0 ? [imgGrid, textGrid] : [textGrid, imgGrid]
    })
  }

  return (
      <Grid container spacing={3}>
        {renderGridBody(props.gridData)}
      </Grid>
  );
};


export default Activities;

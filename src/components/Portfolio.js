import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from '@material-ui/core/Modal';
import ModalTable from './ModalTable';

import project1 from "../images/react_logo.jpg";
import project2 from "../images/symfony_logo.png";
import project3 from "../images/louvainlinux.png";
import project4 from "../images/python_logo.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
  cardAction: {
    justifyContent: "center",
  },
  modalBody: {
    width: '35%',
    height: '52%',
    transform: `translate(90%,50%)`,
    position: 'absolute',
    backgroundColor: '#711',
    border: '1px solid #000',
    borderRadius: '5%',
    display: 'flex  ',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 4, 3),
    color: 'tan',
  },
  modal: {
    width: '100%',
    height: '100%',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));

const projects = [
  {
    name: "React.js online learning",
    description: `I have follow an online formation in order to learn the basis of React.js framework.`,
    image: project1,
  },
  {
    name: "PHP Symfoni online learning",
    description: `I have follow an online formation in order to learn the basis of React.js framework.`,
    image: project2,
  },
  {
    name: "Louvain-li-Nux member",
    description: `I have been a member of the Louvain-li-Nux KAP since september 2017 to june 2020. 
    During this period, I gave lectures on Git, Gimp and Latex. I gave also help during informatics permanences during with 
    I worked on Linux problems resolutions. Finally, I gave a workshoop to teach Python to beginners. Curious about Louvain-li-Nux KAP ? Click on this `,
    image: project3,
  },
  {
    name: "GameJam participation",
    description: `I took part in a GameJam organize by the Louvain-li-Nux KAP in March 2021. 
    During this gameJam, I made the game Redneck Ramble with 3 other people, using Python langage, in 24 hours. You will find 
    this game on Github or by clicking on this`,
    image: project4,
  },
];

const AboutMe = () => {
  const [open, setOpen] = useState(false);

  const reverseOpenState = () => {
    setOpen(false);
  };

  const openModal = () => {
    if (!open){
      setOpen(true);
    }
  };

  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                    {project.name === projects[3].name || project.name === projects[2].name ? 
                      <a href={project.name === projects[3].name ? 'https://github.com/Diomenios/game_jam_3.0' : 'https://louvainlinux.org/'}> link. </a> :  
                      undefined
                    }
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardAction} onClick={openModal}>
                <Button size="small" color="primary">
                  Show Hours Table
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={reverseOpenState}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <div className={classes.modalBody} onClick={reverseOpenState}>
            <h1> Hours Table </h1>
            <ModalTable/>
        </div>
      </Modal>
    </Box>
  );
};


export default AboutMe;

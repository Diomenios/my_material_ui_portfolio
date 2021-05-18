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
import { Link } from 'react-scroll'
import ModalTable from './ModalTable';
import Activities from './Activities'

import project1 from "../images/react_logo.jpg";
import project2 from "../images/symfony_logo.png";
import project3 from "../images/louvainlinux.png";
import project4 from "../images/python_logo.png";
import reactProof from "../images/react_proof.png";
import symfonyProof from "../images/symfony_proof.png";
import linuxProof from "../images/linux.jpg";


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
    description: `I followed an online formation in order to learn the basis of React.js framework.`,
    image: project1,
  },
  {
    name: "PHP Symfony online learning",
    description: `I followed an online formation in order to learn the basis of React.js framework.`,
    image: project2,
  },
  {
    name: "Louvain-li-Nux member",
    description: `I was a member of the Louvain-li-Nux KAP from september 2017 to june 2020. 
      During this period, I gave lectures on Git, Gimp and Latex. I also helped during informatics permanences where 
      I worked on Linux problems resolution. Finally, I gave a workshop to teach Python to beginners. Curious about 
      Louvain-li-Nux KAP ? Click on this `,
    image: project3,
  },
  {
    name: "GameJam participation",
    description: `I took part in a GameJam organized by the Louvain-li-Nux KAP in March 2021. 
      During this gameJam, I made the game Redneck Ramble with 3 other people, using Python langage, in 24 hours straight. You will find 
      this game on Github or by clicking on this `,
    image: project4,
  },
];
const gridData = [
  {
    img: reactProof,
    alt: 'React.js logo',
    title: projects[0].name,
    description: projects[0].description,
    analysis: `I made this formation in order to have abilities to make my internship in Opal Solutions.
      This helped me to understand the React basis concepts like Component usage, or React Classes, ... These basis have
      been very usefull to start my internship.`,
  },
  {
    img: symfonyProof,
    alt: 'Symfony logo',
    title: projects[1].name,
    description: projects[1].description,
    analysis: `I made this formation in order to have abilities to make my internship in Opal Solutions.
      this formation gave me the basis to start with symfony as the concept of container of Services or the standart
      library to use in order to make Unit Tests. These basis have been very usefull to start my internship.`,
  },
  {
    img: linuxProof,
    alt: 'Louvain-li-Nux photo',
    title: projects[2].name,
    description: projects[2].description,
    analysis: `During these 3 years of membership I learnt a lot of things. The weekly meetings organized in order 
      to prepare the incomings events taught me teamwork and organization. We had to present our activities to a 
      lot of people and also we organized multiple workshops, so I had to improve my presentation skills. Every 
      Monday evening, we had an activity called 'Permanence' during which we repaired physical or software problem 
      of different people coming for that. With these 'Permanence', I learnt a lot about how Linux works and how to 
      solve regular problems on it. In conclusion, these 3 years taught me a lot of soft skills like communication, 
      autonomy, teamwork, Open Source love, ...`,
  },
  {
    img: project4,
    alt: 'Python logo',
    title: projects[3].name,
    description: projects[3].description,
    analysis: `These 24 straight hours of work were very funny. Success to make a game in only one day of work is 
      very satisfying and working hard on a project with multiple people is a good experience to have. For me, it 
      was the opportunity to code again with python after more than a year of pause. It was a very good experience 
      and a very good training. I don't have pictures as proof of my participation to this event but you can check-it 
      on my github account with this `,
    addLink: true,
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
                <Link to={project.name} spy={true} smooth={true} duration={500}>
                  <CardMedia
                    component="img"
                    alt="Project 1"
                    height="140"
                    image={project.image}
                  />
                </Link>
                  <CardContent>
                    <Link to={project.name} spy={true} smooth={true} duration={500}>
                      <Typography variant="h5" gutterBottom>
                        {project.name}
                      </Typography>
                    </Link>
                    <Typography variant="body2" color="textSecondary">
                      <Link to={project.name} spy={true} smooth={true} duration={500}>
                        {project.description}
                      </Link>
                      {project.name === projects[3].name || project.name === projects[2].name ? 
                        <a 
                          href={project.name === projects[3].name ? 'https://github.com/Diomenios/game_jam_3.0' : 'https://louvainlinux.org/'}
                          target="_blank"
                          rel="noopener noreferrer"
                        > 
                          link. 
                        </a> :  
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
      <Activities
        gridData={gridData}
      />
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

import Grid from '@mui/material/Grid';
import { Paper, Typography } from "@mui/material";
import useMediaHooks from '../hooks/MediaHooks';

const About = () => {
  const [sm, md, lg] = useMediaHooks();
  const sectionWidth = lg ? "50%" : md ? '75%' : '90%';
  return(
    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{width: sectionWidth, pt:'60px'}} id="about">
      <Grid item xs={5}>
        <Typography variant="h3">About Me</Typography>
      </Grid>
      <Grid item xs={5}>
        <Paper elevation={2} sx={{padding: '2rem'}}>
          <Typography variant="h5">
            Thanks for visiting my website! I'm Jacob, a Software Developer based in Ontario, Canada.
          </Typography>
          <br/>
          <Typography variant="h5">
            I'm a recent graduate of Western University, where I acquired my B.Sc. Honours, Specializing 
            in Computer Science and Minoring in Software Engineering. During my time at Western, I had the opportunity 
            to participate in the Science Internship program, where I spent a year working at Ontario Power Generation. 
            I experienced many new technologies, and this is where my interest in web development began. After graduating, 
            I accepted a position to return to Ontario Power Generation and am now doing full-stack web development.
          </Typography>
          <br/>
          <Typography variant="h5">
            Outside of my professional life, I have lots of hobbies! I'm an avid gamer (I blame old DoS games I used to play on the family PC), 
            chess player, aspiring home cook (I love Gordan Ramsey), Rubik's cuber, and a terrible golfer.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default About;
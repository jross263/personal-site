import { Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import useMediaHooks from '../hooks/MediaHooks';

const About = () => {
  const [, md, lg] = useMediaHooks();
  const sectionWidth = lg ? '50%' : md ? '75%' : '90%';
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ width: sectionWidth, pt: '60px' }} id="about" spacing={4}>
      <Grid item xs={5}>
        <Typography variant="h3">About Me</Typography>
      </Grid>
      <Grid item xs={5}>
        <Paper elevation={2} sx={{ padding: '2rem' }}>
          <Typography variant="h5">
            Thanks for visiting my website! I&apos;m Jacob, a Full Stack Engineer based in Ontario, Canada.
          </Typography>
          <br />
          <Typography variant="h5">
            I&apos;m a graduate of Western University, where I acquired my B.Sc. Honours, Specializing
            in Computer Science and Minoring in Software Engineering. During my time at Western, I interned at
            Ontario Power Generation, where I returned to work full-time after graduating. In October of 2022,
            I joined Phreesia&apos;s Early Career Program, and quickly advanced to be a Software Engineer II, 2 years later I am a proud Phreesian!
          </Typography>
          <br />
          <Typography variant="h5">
            Outside of my professional life, I have lots of hobbies! I&apos;m an avid gamer (I blame old DOS games I used to play on the family PC),
            chess player, aspiring home cook (I love Gordan Ramsey), Rubik&apos;s cuber, and a terrible golfer.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default About;
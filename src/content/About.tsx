import Grid from '@mui/material/Grid';
import { Paper, Typography } from "@mui/material";
import useMediaHooks from '../hooks/MediaHooks';

const About = () => {
  const [sm, md, lg] = useMediaHooks();
  const sectionWidth = lg ? "50%" : md ? '75%' : '90%';
  return(
    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{width: sectionWidth}}>
      <Grid item xs={5}>
        <Typography variant="h3" id="about">About Me</Typography>
      </Grid>
      <Grid item xs={5}>
        <Paper elevation={2} sx={{padding: '2rem'}}>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default About;
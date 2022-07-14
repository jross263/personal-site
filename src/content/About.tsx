import Grid from '@mui/material/Grid';
import { Avatar, Typography } from "@mui/material";

const About = () => {
  return(
    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{width:'50%'}} >
      <Grid item xs={5}><Typography variant="h3">About Me</Typography></Grid>
      <Grid item xs={5}>
        <Typography variant="h5" className="customh1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Grid>
    </Grid>
  );
}
export default About;
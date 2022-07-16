import Grid from '@mui/material/Grid';
import { Avatar, Typography } from "@mui/material";
import Project from '../components/Project';

const Projects = () => {
  return(
    <Grid container direction="column" alignItems="center" justifyContent="center" sx={{width:'50%'}} id="about" spacing={4}>
      <Grid item xs={5}><Typography variant="h3">Projects</Typography></Grid>
      <Grid item xs={5}>
        <Project />
        <Project right/>
        <Project />
        <Project right/>
        <Project />
      </Grid>
    </Grid>
  );
}
export default Projects;
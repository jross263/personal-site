import Grid from '@mui/material/Grid';
import { Avatar, Typography } from "@mui/material";
import Project from '../components/Project';

const Projects = () => {
  return(
    <Grid container direction="column" alignItems="center" justifyContent="center" spacing={4}>
      <Grid item><Typography variant="h3" id="projects">Projects</Typography></Grid>
      <Grid container item justifyContent="center" spacing={2}>
        <Grid container item justifyContent="center">
          <Project />
        </Grid>
        <Grid container item justifyContent="center">
          <Project right />
        </Grid>
        <Grid container item justifyContent="center">
          <Project />
        </Grid>
        <Grid container item justifyContent="center">
          <Project right />
        </Grid>
        <Grid container item justifyContent="center">
          <Project />
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Projects;
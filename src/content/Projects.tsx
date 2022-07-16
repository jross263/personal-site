import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import Project from '../components/Project';


const projectData = [1, 2, 3, 4, 5, 6]

const Projects = () => {
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" spacing={4}>
      <Grid item>
        <Typography variant="h3" id="projects">Projects</Typography>
      </Grid>
      <Grid container item justifyContent="center" spacing={2}>
        {projectData.map((e, i) => (
          <Grid container item justifyContent="center">
            <Project right={i % 2 != 0} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
export default Projects;
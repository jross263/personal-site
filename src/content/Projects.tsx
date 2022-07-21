import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Project from '../components/Project';
import projectData from './projectData';

const Projects = () => {
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" spacing={4} sx={{ pt: '60px', pb: '60px' }} id="projects">
      <Grid item>
        <Typography variant="h3">Projects</Typography>
      </Grid>
      <Grid container item justifyContent="center" spacing={2}>
        {projectData.map((e, i) => (
          <Grid container item justifyContent="center" key={i}>
            <Project right={i % 2 != 0} {...e} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default Projects;
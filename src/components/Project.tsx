import { Chip, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import thumbnail from './img_forest.jpg';

interface ProjectProps {
  right?: boolean
};

const Project = ({ right }: ProjectProps) => {

  const picture =  <Grid container item lg={4} xl={4} alignItems="center" justifyContent="center">
    <img src={thumbnail} style={{ width: '100%', height: '100%', maxWidth: '300px'}}></img>
  </Grid>
  const theme = useTheme()
  const mobileView = useMediaQuery(theme.breakpoints.down("lg"))

  return (
        <Paper elevation={3} sx={{ width: '75%', padding:"1rem"}}>
    <Grid container spacing={2} flexDirection={mobileView && right ? "column-reverse" : 'row'}  justifyContent="center" alignItems="center" >
        {!right && picture}
        <Grid container item flexDirection="column" lg={8} xl={8}>
          <Typography variant="h4" className="decoratedHeader">Project 1</Typography>
          <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
          <Grid container item spacing={2}>
            <Grid item>
              <Chip sx={{background:"#276FBF", color:"white"}} label="Chip Filled" />
            </Grid>
            <Grid item>
              <Chip sx={{background:"#276FBF", color:"white"}} label="Chip Filled" />
            </Grid>
            <Grid item>
              <Chip sx={{background:"#276FBF", color:"white"}} label="Chip Filled" />
            </Grid>
            <Grid item>
              <Chip sx={{background:"#276FBF", color:"white"}} label="Chip Filled" />
            </Grid>
            <Grid item>
              <Chip sx={{background:"#276FBF", color:"white"}} label="Chip Filled" />
            </Grid>
          </Grid>
        </Grid>
        {right && picture}
      </Grid>
      </Paper>
  );
}
export default Project;
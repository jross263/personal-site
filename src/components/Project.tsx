import { Chip, Grid, Typography } from "@mui/material";
import thumbnail from './img_forest.jpg';


const Project = ({right}) => {
  return(
    <Grid container spacing={2}>
      {!right && <Grid item xs={4}>
        <img src={thumbnail} style={{width: 300, height:200}}></img>
      </Grid>}
      <Grid container item flexDirection="column" xs={8}>
        <Typography variant="h4">Project 1</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
        <Grid container item spacing={2}>
          <Grid item>
            <Chip label="Chip Filled" />
          </Grid>
          <Grid item>
            <Chip label="Chip Filled" />
          </Grid>
          <Grid item>
            <Chip label="Chip Filled" />
          </Grid>
          <Grid item>
            <Chip label="Chip Filled" />
          </Grid>
          <Grid item>
            <Chip label="Chip Filled" />
          </Grid>
        </Grid>
      </Grid>
      {right && <Grid item xs={4}>
        <img src={thumbnail} style={{width: 300, height:200}}></img>
      </Grid>}
    </Grid>
  );
}
export default Project;
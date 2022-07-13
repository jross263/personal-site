import Grid from '@mui/material/Grid';
import { Avatar, Typography } from "@mui/material";

const Landing = () => {
  return(
    <Grid container alignItems="center" justifyContent="center" sx={{height:'100%'}} >
      <Grid item md={6} lg={6} xl={6} order={{ xs: 2, sm: 2, md: 1, lg: 1, xl: 1 }} sx={{padding:'2rem'}}>
        <Typography variant="h2" component="div">Hi 👋 I'm Jacob, A Full Stack Web Developer Working @ </Typography>
      </Grid>
      <Grid item md={6} lg={6} xl={6} order={{ xs: 1, sm: 1, md:2, lg: 2, xl: 2 }} sx={{display:'flex', justifyContent:'center'}}>
        <Avatar sx={{height:320, width:320}}>JR</Avatar>
      </Grid>
    </Grid>
  );
}
export default Landing;
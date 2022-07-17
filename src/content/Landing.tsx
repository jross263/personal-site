import Grid from '@mui/material/Grid';
import { Avatar, Paper, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import useMediaHooks from '../hooks/MediaHooks';

const Landing = () => {
  const [sm, md] = useMediaHooks()
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      flexDirection={md || sm ? 'column-reverse' : 'row'}
      sx={{ height: '100vh', background: '#183059'}}
    >
      <Grid item md={6} lg={6} xl={6} sx={{ padding: '2rem' }}>
        <Paper elevation={3} sx={{ width: '100%', height: '100%', background: "#F6F4F3" }}>
          <div style={{ padding: '1rem' }}>
            <Typography variant="h5" component="div">Hi There 👋, I'm</Typography>
            <Typography variant="h2" component="div">Jacob Ross</Typography>
            <Typography variant="h4" component="div">A Full Stack Web Developer Powering the Future @ OPG</Typography>
            <GitHubIcon />
            <LinkedInIcon />
            <MailIcon />
          </div>
        </Paper>
      </Grid>
      <Grid
        item
        md={6} lg={6} xl={6}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Avatar sx={{ height: 320, width: 320 }}>JR</Avatar>
      </Grid>
    </Grid>
  );
}
export default Landing;
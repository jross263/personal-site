import Grid from '@mui/material/Grid';
import { Avatar, Paper, styled, Typography } from "@mui/material";
import { useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';


const Root = styled(Grid)(({ theme }) => ({
  textAlign: "center", [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  }
}));


const Landing = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ height: '100vh', background: '#183059' }}
    >
      <Root item md={6} lg={6} xl={6} order={{ xs: 2, sm: 2, md: 1, lg: 1, xl: 1 }} sx={{ padding: '2rem' }}>
        <Paper elevation={3} sx={{width: '100%', height: '100%', background:"#F6F4F3"}}>
          <div style={{padding: '1rem'}}>
            <Typography variant="h5" component="div">Hi There 👋, I'm</Typography>
            <Typography variant="h2" component="div">Jacob Ross</Typography>
            <Typography variant="h4" component="div">A Full Stack Web Developer Powering the Future @ OPG</Typography>
            <GitHubIcon />
            <LinkedInIcon />
            <MailIcon />
          </div>
        </Paper>
      </Root>
      <Grid
        item
        md={6} lg={6} xl={6}
        order={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Avatar sx={{ height: 320, width: 320 }}>JR</Avatar>
      </Grid>
    </Grid>
  );
}
export default Landing;
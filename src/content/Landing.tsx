import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton, Link, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import useMediaHooks from '../hooks/MediaHooks';
import ArticleIcon from '@mui/icons-material/Article';

import headshot from '../pictures/headshot.jpg';
import resume from '../pictures/Resume.pdf';


const Landing = () => {
  const [sm, md] = useMediaHooks();
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      flexDirection={md || sm ? 'column-reverse' : 'row'}
      sx={{ minHeight: '100vh', background: '#183059', paddingTop: '60px' }}
    >
      <Grid item md={6} lg={6} xl={6} sx={{ padding: '2rem' }}>
        <Paper elevation={3} sx={{ width: '100%', height: '100%', background: '#F6F4F3' }}>
          <div style={{ padding: '1rem' }}>
            <Typography variant="h5" component="div">Hi There 👋, I&apos;m</Typography>
            <Typography variant="h2" component="div">Jacob Ross</Typography>
            <Typography variant="h4" component="div">A Full Stack Developer Enpowering Patients @ <Link href="https://www.phreesia.com/" target="_blank" rel="noopener" color="#f56631">Phreesia</Link></Typography>
            <IconButton href="https://github.com/jross263" target="_blank" rel="noopener"><GitHubIcon color='info' /></IconButton>
            <IconButton href="https://www.linkedin.com/in/jacob-ross-61476b245/" target="_blank" rel="noopener"><LinkedInIcon color='info' /></IconButton>
            <IconButton href="mailto:jacob@jacobross.ca"><MailIcon color='info' /></IconButton>
            <IconButton href={resume} target="_blank" rel="noopener"><ArticleIcon color='info' /></IconButton>
          </div>
        </Paper>
      </Grid>
      <Grid
        container
        justifyContent="center"
        item
        md={6} lg={6} xl={6}
      >
        <img src={headshot} style={{
          borderRadius: '50%',
          width: sm ? 320 : 400,
          aspectRatio: '1'
        }}></img>
      </Grid>
    </Grid>
  );
};
export default Landing;
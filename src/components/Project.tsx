import { Chip, Dialog, Grid, Link, Paper, Typography } from '@mui/material';
import { Theme } from '@mui/system';
import { CSSProperties, useState } from 'react';
import useMediaHooks from '../hooks/MediaHooks';

interface ProjectProps {
  right?: boolean,
  thumbnail: string,
  title: string,
  description: string,
  skills: string[]
  link?: string,
  caption?: string
}

const Project = ({ right, thumbnail, title, description, skills, link, caption }: ProjectProps) => {

  const [open, setOpen] = useState(false);
  const [, , , xl] = useMediaHooks();

  const imgStyles: CSSProperties = { width: '100%', height: '100%', maxWidth: '300px' };
  const chipStyles = (theme: Theme) => ({ background: theme.palette.info.main, color: 'white' });

  const picture =
    <Grid container item lg={4} xl={4} alignItems="center" justifyContent="center">
      <img src={thumbnail} style={imgStyles} onClick={() => setOpen(true)}></img>
    </Grid>;

  const titleContent = link ? <Link href={link} target="_blank" rel="noopener">{title}</Link> : title;

  return (
    <Paper elevation={3} sx={{ width: '75%', padding: '1rem' }}>
      <Grid container spacing={2} flexDirection={!xl && right ? 'column-reverse' : 'row'} justifyContent="center" alignItems="center" >
        {!right && picture}
        <Grid container item flexDirection="column" lg={8} xl={8} sx={{ gap: '0.5rem' }}>
          <Typography variant="h4">{titleContent}</Typography>
          {caption && <Typography variant="caption">{caption}</Typography>}
          <Typography variant="body1">{description}</Typography>
          <Grid container item spacing={2}>
            {skills.map((e, i) => (
              <Grid item key={i}>
                <Chip sx={chipStyles} label={e} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {right && picture}
      </Grid>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth={true}>
        <img src={thumbnail}></img>
      </Dialog>
    </Paper>
  );
};
export default Project;
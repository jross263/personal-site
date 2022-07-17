import { useState } from 'react';
import { Chip, Grid, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaHooks from '../hooks/MediaHooks';

const Header = () => {
  const [open, setOpen] = useState(false);

  const headerStyles = {
    height: 'auto',
    maxHeight: open ? '250px' : '60px',
    position: 'fixed',
    top: 0,
    transition: 'max-height 0.5s ease-in-out',
    zIndex: 1,
    background: '#183059',
    overflow: 'hidden'
  };


  const [sm] = useMediaHooks();

  return (
    <Grid container alignItems={open ? "-moz-initial" :"center"} sx={headerStyles}>
      {sm && <Grid item>
        <IconButton aria-label="delete" sx={{ height: '60px', width: '60px' }} onClick={()=>{
          setOpen(!open)
        }}><MenuIcon sx={{ color: "white" }} /></IconButton>
      </Grid>
      }
      <Grid container direction={sm ? "column" : "row"} justifyContent="flex-end" spacing={3} sx={{mr:'30px', p:'1rem'}} item>
        <Grid item>
          <Chip
            label="About"
            component="a"
            href="#about"
            color="info"
            clickable
          />
        </Grid>
        <Grid item >
          <Chip
            label="Experience"
            component="a"
            href="#experience"
            color="info"
            clickable
          />
        </Grid>
        <Grid item>
          <Chip
            label="Projects"
            component="a"
            href="#projects"
            color="info"
            clickable
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Header;
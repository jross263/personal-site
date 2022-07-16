
import { useWindowScroll } from '@mantine/hooks';
import { Chip, Grid, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import useMediaHooks from '../hooks/MediaHooks';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [scroll] = useWindowScroll();
  const [lastScroll, setLastScroll] = useState({ x: 0, y: 0 })
  const [showHeader, setShowHeader] = useState(false)
  const [open, setOpen] = useState(false);

  const headerStyles = {
    height: open ? 'auto' : '60px',
    maxHeight: open ? '1000px' : '60px',
    position: 'fixed',
    visibility: showHeader ? 'visible' : 'hidden',
    opacity: showHeader ? 1 : 0,
    top: 0,
    transition: 'visibility 0.3s linear, opacity 0.3s linear, max-height 0.5s ease-in-out',
    zIndex: 1,
    background: '#183059',
    overflow: 'hidden'
  };


  const [sm] = useMediaHooks();

  useEffect(() => {
    setShowHeader(lastScroll.y >= scroll.y)
    setLastScroll(scroll)
  }, [scroll])

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
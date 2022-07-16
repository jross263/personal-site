
import { useWindowScroll } from '@mantine/hooks';
import { Chip } from '@mui/material';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scroll] = useWindowScroll();
  const [lastScroll, setLastScroll] = useState({ x: 0, y: 0 })
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    setShowHeader(lastScroll.y >= scroll.y)
    setLastScroll(scroll)
  }, [scroll])

  return (
    <header className={`${showHeader ? 'sticky' : ''}`}>
      <Chip
        label="Projects"
        component="a"
        href="#projects"
        color="info"
        sx={{mr:'30px'}}
        clickable
      />
      <Chip
        label="Experience"
        component="a"
        href="#experience"
        color="info"
        clickable
      />
      <Chip
        label="About"
        component="a"
        href="#about"
        color="info"
        clickable
      />
    </header>
  )
}
export default Header;
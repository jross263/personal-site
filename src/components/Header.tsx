
import { useWindowScroll } from '@mantine/hooks';
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
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#about">About</a>
    </header>
  )
}
export default Header;
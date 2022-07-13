
import { useWindowScroll } from '@mantine/hooks';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scroll] = useWindowScroll();
  const [lastScroll, setLastScroll] = useState({x:0,y:0})
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    setShowHeader(lastScroll.y >= scroll.y)
    setLastScroll(scroll) 
  }, [scroll])

  return(
    <header className={`${showHeader?'sticky':''}`}>
      <button>Projects</button>
      <button>Experience</button>
      <button>Skills</button>
      <button>About</button>
    </header>
  )
}
export default Header;
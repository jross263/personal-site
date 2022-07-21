import { createTheme, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import About from './content/About';
import Experience from './content/Experience';
import Landing from './content/Landing';
import Projects from './content/Projects';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#183059'
      },
      secondary: {
        main: '#F6F4F3'
      },
      info: {
        main: '#276FBF'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Landing />
        <About />
        <Experience />
        <Projects />
      </main>
    </ThemeProvider>
  );
};

export default App;

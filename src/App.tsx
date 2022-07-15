import Header from './components/Header';
import Landing from './content/Landing';
import About from './content/About'
import Experience from './content/Experience';
import Projects from './content/Projects';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <About />
        <Experience />
        <Projects />
      </main>
    </>
  )
}

export default App

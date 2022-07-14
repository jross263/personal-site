import Header from './components/Header';
import Landing from './content/Landing';
import About from './content/About'
import Experience from './content/Experience';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <About />
        <Experience />
      </main>
    </>
  )
}

export default App

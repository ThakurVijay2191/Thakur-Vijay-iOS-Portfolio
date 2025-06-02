import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  // Update document title
  React.useEffect(() => {
    document.title = 'Jonathan Doe | iOS Developer';
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;
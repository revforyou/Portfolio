import { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ToolsTechnologies from './components/ToolsTechnologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';      
import Footer from './components/Footer';
import Greetings from './components/greetings';

const App = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleFinishGreetings = () => {
    setShowMainContent(true);
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 scroll-smooth">
      {!showMainContent ? (
        <Greetings onFinish={handleFinishGreetings} />
      ) : (
        <>
          {/* Background Gradient */}
          <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          </div>

          <div className="container mx-auto px-8">
            <NavBar />

            <div id="home">
              <Hero />
            </div>

            <div id="skills">
              <ToolsTechnologies />
            </div>

            <div id="experience">
              <Experience />
            </div>

            <div id="projects">
              <Projects />
            </div>

            <div id="education">
              <Education />
            </div>

            <div id="contact">  {/* NEW SECTION */}
              <Contact />
            </div>

            <div id="footer">
              <Footer />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;

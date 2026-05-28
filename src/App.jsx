import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        {/* HERO */}
        <Hero />

        {/* ABOUT */}
        <section id="about" className="section">
          <About />
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <Skills />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <Projects />
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-glow"></div>

        <h2>Rushikesh</h2>

        <p>
          © 2026 Rushikesh Portfolio • Built with React & Passion
        </p>
      </footer>

      {/* TOAST */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
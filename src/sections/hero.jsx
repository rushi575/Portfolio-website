import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const Hero = () => {

  const fullText = "Rushikesh";
  const [text, setText] = useState("");

  useEffect(() => {

    let i = 0;

    const interval = setInterval(() => {

      setText(fullText.substring(0, i + 1));

      i++;

      if (i >= fullText.length) {
        clearInterval(interval);
      }

    }, 150);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="hero" id="home">

      {/* LEFT SIDE */}

      <motion.div

        className="hero-left"

        initial={{
          opacity: 0,
          y: 80
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1
        }}
      >

        <motion.h1

          initial={{
            opacity: 0,
            y: 50
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            delay: 0.2,
            duration: 1
          }}
        >

          Hi, I'm <span>{text}</span>

          <span className="cursor">|</span>

        </motion.h1>

        <motion.p

          initial={{
            opacity: 0,
            y: 40
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            delay: 0.5,
            duration: 1
          }}
        >

          Computer Science Graduate & Frontend Developer
          focused on building premium responsive web
          applications using React, JavaScript and modern UI.

        </motion.p>

        {/* BUTTONS */}

        <motion.div

          className="btn-group"

          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            delay: 0.8,
            duration: 1
          }}
        >

          <a
            href="/Rushikesh_Resume.pdf"
            download
            className="btn primary"
          >
            📄 Download Resume
          </a>

          <a
            href="#projects"
            className="btn secondary"
          >
            🚀 View Projects
          </a>

        </motion.div>

      </motion.div>

      {/* RIGHT SIDE */}

      <motion.div

        className="hero-design"

        initial={{
          opacity: 0,
          scale: 0.8
        }}

        animate={{
          opacity: 1,
          scale: 1
        }}

        transition={{
          delay: 0.5,
          duration: 1
        }}
      >

        {/* GLOW */}

        <div className="glow-circle"></div>

        {/* CARD */}

        <div className="glass-card">

          {/* TOP BUTTONS */}

          <div className="code-header">

            <span></span>
            <span></span>
            <span></span>

          </div>

          {/* CODE */}

          <div className="code-content">

            <p>
              <span className="purple">const</span> developer = {"{"}
            </p>

            <p>
              &nbsp;&nbsp;name:
              <span className="blue"> "Rushikesh"</span>,
            </p>

            <p>
              &nbsp;&nbsp;role:
              <span className="blue"> "Fullstack Developer"</span>,
            </p>

            <p>
              &nbsp;&nbsp;skills:
              <span className="blue">
                ["React", "JavaScript", "CSS"]
              </span>,
            </p>

            <p>
              &nbsp;&nbsp;passion:
              <span className="blue">
                "Building Premium UI"
              </span>
            </p>

            <p>{"}"}</p>

          </div>

        </div>

        {/* FLOATING ICONS */}

        <div className="floating floating-1">⚛️</div>

        <div className="floating floating-2">💻</div>

        <div className="floating floating-3">🚀</div>

      </motion.div>

      {/* SCROLL */}

      <motion.div

        className="scroll-indicator"

        animate={{
          y: [0, 10, 0]
        }}

        transition={{
          repeat: Infinity,
          duration: 1.5
        }}
      >

        ↓

      </motion.div>

    </section>
  );
};

export default Hero;
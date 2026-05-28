import { motion } from "framer-motion";

const cardVariants = {
  hiddenLeft: {
    opacity: 0,
    x: -120,
    rotate: -8,
    scale: 0.9,
  },

  hiddenRight: {
    opacity: 0,
    x: 120,
    rotate: 8,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,

    transition: {
      type: "spring",
      stiffness: 90,
      damping: 12,
    },
  },
};

const Skills = () => {

  return (

    <section className="section" id="skills">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="skills-grid">

        {/* LANGUAGES */}
        <motion.div
          className="skill-card"
          variants={cardVariants}
          initial="hiddenLeft"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            rotateX: 6,
            rotateY: -6,
            y: -10,
          }}
        >
          <div className="card-glow"></div>

          <h3>Languages</h3>

          <p>Java</p>
          <p>Python</p>
          <p>JavaScript</p>
          <p>Android</p>
        </motion.div>

        {/* WEB */}
        <motion.div
          className="skill-card"
          variants={cardVariants}
          initial="hiddenRight"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{
            scale: 1.05,
            rotateX: 6,
            rotateY: 6,
            y: -10,
          }}
        >
          <div className="card-glow"></div>

          <h3>Web Technologies</h3>

          <p>React.js</p>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Tailwind CSS</p>
          <p>Bootstrap</p>
          <p>Framer Motion</p>
          <p>PHP</p>
        </motion.div>

        {/* DATABASE */}
        <motion.div
          className="skill-card"
          variants={cardVariants}
          initial="hiddenLeft"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{
            scale: 1.05,
            rotateX: 6,
            rotateY: -6,
            y: -10,
          }}
        >
          <div className="card-glow"></div>

          <h3>Database</h3>

          <p>MySQL</p>
          <p>MongoDB</p>
          <p>PostgreSQL</p>
          <p>Firebase</p>
        </motion.div>

        {/* TOOLS */}
        <motion.div
          className="skill-card"
          variants={cardVariants}
          initial="hiddenRight"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          whileHover={{
            scale: 1.05,
            rotateX: 6,
            rotateY: 6,
            y: -10,
          }}
        >
          <div className="card-glow"></div>

          <h3>Tools & Platforms</h3>

          <p>Git</p>
          <p>GitHub</p>
          <p>VS Code</p>
          <p>IntelliJ IDEA</p>
          <p>Android Studio</p>
          <p>Eclipse</p>
          <p>Vite</p>
          <p>Netlify</p>
        </motion.div>

      </div>

    </section>
  );
};

export default Skills;
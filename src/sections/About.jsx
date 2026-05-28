import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="section about-section"
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>

      <motion.p
        className="about-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        I am Rushikesh Mahulkar, a Computer Science graduate and Software Developer passionate about building modern web applications. I have experience in frontend development using HTML, CSS, JavaScript, and React, along with strong knowledge of Java, Python, REST APIs, and databases. I enjoy creating clean, responsive, and user-friendly interfaces and continuously improving my development skills to build better digital experiences.

        <br /><br />

        Currently, I am improving my frontend development skills using
        React, JavaScript, and modern UI technologies.

        <br /><br />

        I enjoy solving real-world problems through code and continuously
        learning new technologies to grow as a software developer.
      </motion.p>
    </motion.section>
  );
};

export default About;
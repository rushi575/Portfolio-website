


const Projects = () => {
  return (
    <section className="section" id="projects">

      <h2>Projects</h2>

      <div className="projects">

        {/* PROJECT 1 */}

        <div className="project-card ai-card">

          <div className="project-glow"></div>
           
          <div className="project-top">
            <span className="project-tag">AI Project</span>
            <span className="project-icon">🤖</span>
          </div>

          <h3>Concise AI – AI Document Summarizer</h3>

          <p className="project-tech">
            Python • Flask • MySQL • BART Model
          </p>

          <p className="project-desc">
            AI-powered document summarization tool capable of processing
            large documents efficiently using transformer models.
          </p>

          <ul className="project-points">
            <li>✔ Integrated BART transformer model</li>
            <li>✔ Flask REST API backend</li>
            <li>✔ MySQL document storage</li>
            <li>✔ Optimized processing pipeline</li>
            <li>✔ Improved summarization accuracy</li>
          </ul>

        </div>

        {/* PROJECT 2 */}

        <div className="project-card bird-card">

          <div className="project-glow"></div>
           
          <div className="project-top">
            <span className="project-tag">AI Web App</span>
            <span className="project-icon">🐦</span>
          </div>

          <h3>AvionAI – Bird Species Prediction</h3>

          <p className="project-tech">
            HTML • CSS • JavaScript • Gemini API
          </p>

          <p className="project-desc">
            Developed an AI-based bird species prediction platform with
            intelligent image analysis and chatbot integration.
          </p>

          <ul className="project-points">
            <li>✔ Gemini API integration</li>
            <li>✔ AI image-based prediction</li>
            <li>✔ Community forum using Supabase</li>
            <li>✔ Backend & database integration</li>
            <li>✔ Responsive UI design</li>
          </ul>

        </div>

        {/* PROJECT 3 */}

        <div className="project-card inventory-card">

          <div className="project-glow"></div>
          

          <div className="project-top">
            <span className="project-tag">Dashboard System</span>
            <span className="project-icon">📦</span>
          </div>

          <h3>Inventory Management System</h3>

          <p className="project-tech">
            React • Node.js • MySQL • REST API
          </p>

          <p className="project-desc">
            Developed a real-world inventory management system with dashboard,
            stock tracking, analytics, and backend database connectivity.
          </p>

          <ul className="project-points">
            <li>✔ Product & stock management</li>
            <li>✔ Real-time dashboard UI</li>
            <li>✔ Backend API integration</li>
            <li>✔ MySQL database handling</li>
            <li>✔ Responsive admin panel design</li>
          </ul>

        </div>

        {/* PROJECT 4 */}

        <div className="project-card ecommerce-card">

          <div className="project-glow"></div>
         

          <div className="project-top">
            <span className="project-tag">Full Stack</span>
            <span className="project-icon">🛒</span>
          </div>

          <h3>E-Commerce Website</h3>

          <p className="project-tech">
            React • Node.js • Express • MongoDB
          </p>

          <p className="project-desc">
            Built a complete full-stack e-commerce platform with authentication,
            product filtering, cart system, and secure checkout flow.
          </p>

          <ul className="project-points">
            <li>✔ Responsive frontend using React</li>
            <li>✔ Authentication & protected routes</li>
            <li>✔ Cart and order management</li>
            <li>✔ Backend APIs using Express & Node.js</li>
            <li>✔ MongoDB database integration</li>
          </ul>

        </div>

      </div>

    </section>
  );
};

export default Projects;
import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 80; // FIX: navbar height adjustment

      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop;
          const scrollPos = window.scrollY + 120; // FIXED offset for navbar

          if (scrollPos >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>

      <ul>
        <li
          className={active === "home" ? "active" : ""}
          onClick={() => scrollToSection("home")}
        >
          Home
        </li>

        <li
          className={active === "about" ? "active" : ""}
          onClick={() => scrollToSection("about")}
        >
          About
        </li>

        <li
          className={active === "skills" ? "active" : ""}
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </li>

        <li
          className={active === "projects" ? "active" : ""}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </li>

        <li
          className={active === "contact" ? "active" : ""}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
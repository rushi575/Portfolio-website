import { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // SEND EMAIL

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      "service_o3dhw6a",
      "template_5hifsuc",
      formRef.current,
      "IZt8wPyVdD5SIROcZ"
    )

    .then(() => {

      toast.success("Message sent successfully 🚀");

      setForm({
        name: "",
        email: "",
        message: "",
      });

    })

    .catch((error) => {

      toast.error("Failed to send message ❌");

      console.log(error);

    });
  };

  return (

    <section className="section contact-section" id="contact">

      <h2>Contact Me</h2>

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <h3>Let’s Work Together</h3>

          <p>
            I’m open to internships,
            frontend roles,
            freelance projects,
            and collaborations.
          </p>

          <div className="contact-links">

            <a href="mailto:mahulkarrushi0@gmail.com">
              📧 Email
            </a>

            <a
              href="https://www.linkedin.com/in/rushikesh-mahulkar/"
              target="_blank"
              rel="noreferrer"
            >
              🔗 LinkedIn
            </a>

            <a
              href="https://github.com/rushi575"
              target="_blank"
              rel="noreferrer"
            >
              💻 GitHub
            </a>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}

        <form
          ref={formRef}
          className="contact-form"
          onSubmit={sendEmail}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;
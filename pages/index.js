import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Skill from "../component/Skill";
import Button from "../component/Button";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import emailjs from "emailjs-com";
import ProjectData from "../component/projectData";
import ProjectRow from "../component/ProjectRow";

export default function Home() {
  const [aboutVisibility, setAboutVisibility] = useState(false);
  const [skillVisibility, setSkillVisibility] = useState(false);
  const [magic, setMagic] = useState(false);
  const [dis, setDis] = useState(false);
  const [hot, setHot] = useState(false);
  const [con, setCon] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sent, setSent] = useState(null);
  const [sentFailed, setSentFailed] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateId = "template_viw4uiv";
    const serviceId = "service_bwm1iic";
    const userId = "user_tkf3tGUWfozrAkBgy2TiO";
    emailjs
      .send(
        serviceId,
        templateId,
        { from_name: name, message: message, reply_to: email },
        userId
      )
      .then(
        (response) => {
          setSent(response.status);
        },
        (err) => setSentFailed(err)
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  // const handleAbout = (isVisible) => {
  //   console.log(isVisible);
  // };

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="satanrout, satyaranjan rout, bhuinpur, odisha, satyaranjan rout web developer, javascript, react.js, node.js, web developer"
        />
        <meta
          name="description"
          content="Portfolio Website of Satyaranjan Rout aka satanrout"
        />
        <meta name="author" content="Satyaranjan Rout"></meta>
        <title>Satyaranjan Rout | Web And Mobile Developer</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="top">
        {/* HERO SECTION */}
        <section id="hero" className={styles.hero}>
          <motion.h1
            initial={{ fontSize: "10px" }}
            animate={{ fontSize: "55px" }}
            className={styles.hero_content}
          >
            Hi, my name is{" "}
            <span style={{ color: "#6dd5ed" }}>Satyaranjan Rout</span>
            <br /> I Build Web Based Products.
          </motion.h1>
          <div className="hero_btn">
            <a href="#about">
              <motion.button
                whileHover={{
                  backgroundColor: "#6dd5ed",
                  color: "#fff",
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ fontSize: "12px" }}
                animate={{ fontSize: "24px" }}
                className={styles.btn}
              >
                About Me
              </motion.button>
            </a>
            <a href="#projects">
              <motion.button
                whileHover={{
                  backgroundColor: "#6dd5ed",
                  color: "#fff",
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ fontSize: "12px" }}
                animate={{ fontSize: "24px" }}
                className={styles.btn}
              >
                {" "}
                Projects
              </motion.button>
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          style={{
            backgroundColor: "#00cdac",
            backgroundImage: "linear-gradient(135deg, #6dd5ed, #00cdac)",
          }}
          className={styles.section}
          id="about"
        >
          <VisibilitySensor
            partialVisibility={true}
            minTopValue={200}
            onChange={(isVisible) => setAboutVisibility(isVisible)}
          >
            <div>
              <motion.div
                initial={{ x: "100vw" }}
                animate={aboutVisibility ? { x: 0 } : null}
                className={`${styles.section_content} about_container`}
              >
                <h2>ABOUT ME</h2>
                <p
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    margin: "0 0 15px 0",
                  }}
                >
                  I am Satyaranjan Rout. I specialize in creating beautiful,
                  maintainable, professional websites using best practices and
                  the latest technologies resulting in a fast and user-friendly
                  experience.
                </p>
                <p
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    margin: "0 0 15px 0",
                  }}
                >
                  I am primarily a front-end React developer although I have
                  decent knowledge of backend tools like Nodejs, Express,
                  MongoDB etc. I also have good knowledge of React Native for
                  mobile development.
                </p>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1IzvT1ENO_cCrPMek5tRtdiRWp3lFxq_X/view?usp=sharing"
                >
                  <motion.button
                    whileHover={{
                      backgroundColor: "#fff",
                      color: "#00cdac",
                      fontSize: "18px",
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={styles.btn_secondary}
                  >
                    View Resume
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </VisibilitySensor>
          <VisibilitySensor
            partialVisibility={true}
            minTopValue={200}
            onChange={(isVisible) => setSkillVisibility(isVisible)}
          >
            <div>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={skillVisibility ? { x: 0 } : null}
                style={{ marginTop: "30px" }}
                className={`${styles.section_content} skills_container`}
              >
                <h2>SKILLS</h2>
                <p className="skills">
                  <Skill>
                    <img src="/html5.svg" height="16px" /> Html
                  </Skill>
                  <Skill>
                    <img src="/css.svg" height="16px" /> css
                  </Skill>
                  <Skill>
                    <img src="/sass.svg" height="16px" /> sass
                  </Skill>
                  <Skill>
                    <img src="/bootstrap.svg" height="16px" /> bootstrap
                  </Skill>
                  <Skill>
                    <img src="/tailwind.svg" height="16px" /> tailwind
                  </Skill>
                  <Skill>
                    <img src="/javascript.svg" height="16px" /> javascript
                  </Skill>
                  <Skill>
                    <img src="/react.svg" height="16px" /> react
                  </Skill>
                  <Skill>
                    <img src="/redux.svg" height="16px" /> redux
                  </Skill>
                  <Skill>
                    <img src="/next.svg" height="16px" /> next js
                  </Skill>
                  <Skill>
                    <img src="/framer.svg" height="16px" /> framer motion
                  </Skill>
                  <Skill>
                    <img src="/node.svg" height="16px" /> node js
                  </Skill>
                  <Skill>
                    <img src="/express.svg" height="16px" /> express js
                  </Skill>
                  <Skill>
                    <img src="/mongodb.svg" height="16px" /> mongo db
                  </Skill>
                  <Skill>
                    <img src="/git.svg" height="16px" /> git
                  </Skill>
                  <Skill>
                    <img src="/aws.svg" height="16px" /> aws
                  </Skill>
                  <Skill>
                    <img src="/linux.svg" height="16px" /> linux
                  </Skill>
                  <Skill>
                    <img src="/vim.svg" height="16px" /> vim
                  </Skill>
                  <Skill>
                    <img src="/typescript.svg" height="16px" /> typescript
                  </Skill>
                  <Skill>
                    <img src="/react.svg" height="16px" /> react native
                  </Skill>
                </p>
              </motion.div>
            </div>
          </VisibilitySensor>
        </section>

        {/* PROJECT SECTION */}

        <section
          style={{ backgroundColor: "#fff" }}
          className={styles.section}
          id="projects"
        >
          <div className={`${styles.section_content} projects_container`}>
            <h2 style={{ color: "#272341" }}>PROJECTS</h2>

            {ProjectData.slice(0, 4).map((project) => (
              <div key={project.id}>
                <div>
                  <div className="project">
                    <div className="project_left">
                      <h3>{project.name}</h3>
                      <p>{project.info}</p>
                      <a href={project.live} target="_blank">
                        <Button>See Live</Button>
                      </a>
                      <span
                        style={{
                          color: "#6dd5ed",
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                      >
                        <a
                          style={
                            project.isProprietary
                              ? { pointerEvents: "none", opacity: "0.6" }
                              : null
                          }
                          href="#"
                        >
                          {project.isProprietary
                            ? "Proprietary"
                            : "Source Code"}
                        </a>
                      </span>
                    </div>
                    <div className="project_image">
                      <Image
                        unoptimized={true}
                        priority={true}
                        width="541"
                        height="277"
                        src={project.image}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="more-btn">
              <a href="/projects">
                <Button>MORE</Button>
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section id="contact">
          <VisibilitySensor
            partialVisibility={true}
            minTopValue={400}
            onChange={(isVisible) => setCon(isVisible)}
          >
            <div
              className="form_content"
              style={{ width: "80%", margin: "auto" }}
            >
              <h2 style={{ color: "#272341", marginTop: "10rem" }}>
                CONTACT ME
              </h2>
              <div className="contact_container" style={{ display: "flex" }}>
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={con ? { y: 80, opacity: 1 } : null}
                  className="contact_left"
                >
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "24px",
                      marginTop: "20px",
                    }}
                  >
                    Want a quick conversion?
                  </p>
                  <a href="tel:+919658869681" target="_blank">
                    <motion.button
                      whileHover={{
                        backgroundColor: "#fff",
                        color: "#00cdac",
                        fontSize: "18px",
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={styles.btn_secondary}
                    >
                      Call Me
                    </motion.button>
                  </a>
                </motion.div>
                <div className="form_container">
                  <motion.form
                    initial={{ scale: 0.1, opacity: 0 }}
                    animate={con ? { scale: 1, opacity: 1 } : null}
                  >
                    <label htmlFor="name">Name</label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      name="email"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      name="message"
                      rows="4"
                      cols="50"
                      placeholder="Write something..."
                    />
                    <div>
                      <motion.button
                        onClick={handleSubmit}
                        whileHover={{
                          backgroundColor: "#fff",
                          color: "#00cdac",
                          fontSize: "18px",
                        }}
                        whileTap={{ scale: 0.9 }}
                        className={styles.btn_secondary}
                      >
                        Send
                      </motion.button>
                    </div>
                    {sent === 200 ? (
                      <p style={{ color: "green" }}>
                        Message sent successfully I will get back to you sortly{" "}
                        {name}.
                      </p>
                    ) : sentFailed ? (
                      <p style={{ color: "red" }}>
                        Sorry something went wrong!
                      </p>
                    ) : null}
                  </motion.form>
                </div>
              </div>
            </div>
          </VisibilitySensor>
        </section>
      </main>
    </div>
  );
}

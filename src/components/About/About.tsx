import styles from "./About.module.scss";
import ava from "/Avatar.jpg";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
const About = () => {
  return (
    <>
      <h2>About Me</h2>
      <section className={styles.about} id="about">
        <article className={styles.article}>
          <div className={styles.content}>
            <h1>Ivan Litomin</h1>
            <ReactTypingEffect text="Frontend developer" />
          </div>
        </article>
        <Tilt className={styles.tilt}>
          <img src={ava} alt="avatar" />
        </Tilt>
      </section>
    </>
  );
};
export default About;

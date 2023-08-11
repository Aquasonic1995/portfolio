import styles from "./About.module.scss";
import ava from "/Avatar.jpg";
import ReactTypingEffect from "react-typing-effect";
const About = () => {
  return (
    <>
      <h2>About Me</h2>
      <section className={styles.about} id="about-me">
        <article className={styles.article}>
          <div className={styles.content}>
            <h1>Ivan Litomin</h1>
            <ReactTypingEffect text="Frontend developer" />
          </div>
        </article>
        <img src={ava} alt="avatar" />
      </section>
    </>
  );
};
export default About;

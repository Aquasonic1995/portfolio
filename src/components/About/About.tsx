import styles from "./About.module.scss";
import ava from "/Avatar.jpg";
const About = () => {
  return (
    <section className={styles.about} id="about-me">
      <article className={styles.article}>
        <h2>About Me:</h2>
        <div className={styles.content}>
          <h3>Ivan Litomin</h3>
          <p>Frontend developer</p>
        </div>
      </article>
      <img src={ava} alt="avatar" />
    </section>
  );
};
export default About;

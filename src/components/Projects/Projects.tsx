import styles from "./Projects.module.scss";
import { projects } from "../../data.ts";
const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>
      <div className={styles.wrapper}>
        {projects.map((item) => (
          <a href={item.href} target="_blank">
            <div className={styles.project}>
              <img src={item.img} alt="img" />
              <div className={styles.title}>{item.title}</div>
              <div className={styles.desc}>{item.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

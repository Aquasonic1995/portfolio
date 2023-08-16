import styles from "./Projects.module.scss";
import { projects } from "../../data.ts";

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>
      <div className={styles.wrapper}>
        {projects.map((item) => (
          <div className={styles.project}>
            <img src={item.img} alt="img" />{" "}
            <div>
              <div className={styles.desc}>
                {item.desc}
                <div className={styles.buttons}>
                  <a href={item.srcHref} target="_blank">
                    Source
                  </a>
                  <a href={item.devHref} target="_blank">
                    Development
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.title}>{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

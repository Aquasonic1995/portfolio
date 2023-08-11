import styles from "./Projects.module.scss";
const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>
      <div className={styles.project}>
        <img src="/img.png" alt="img" />
        <div>Project</div>
      </div>
      <div className={styles.project}>
        <img src="/img.png" alt="img" />
        <div>Project</div>
      </div>
      <div className={styles.project}>
        <img src="/img.png" alt="img" />
        <div>Project</div>
      </div>
    </section>
  );
};

export default Projects;

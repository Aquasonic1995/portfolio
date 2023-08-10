import styles from "./Skills.module.scss";
import data from "../../data.ts";
const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2>Skills:</h2>
      <div className={styles.items}>
        {data.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div className={styles.item} key={idx}>
              <div>{item.title}</div>
              <Icon />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

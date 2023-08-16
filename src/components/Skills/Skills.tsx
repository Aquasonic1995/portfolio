import styles from "./Skills.module.scss";
import data from "../../data.ts";
import Tilt from "react-parallax-tilt";
const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <h2>Skills</h2>
      <div className={styles.items}>
        {data.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Tilt tiltEnable={true}>
              <div className={styles.item} key={idx}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.icon}>
                  <Icon />
                </div>
              </div>
            </Tilt>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

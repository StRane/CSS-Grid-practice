import styles from "./Realtors.module.scss";

import img1 from "../../img/realtor-1.jpeg";
import img2 from "../../img/realtor-2.jpeg";
import img3 from "../../img/realtor-3.jpeg";

const Realtors = () => {
  return (
    <div className={styles.realtors}>
      <h3>Top 3 Realtors</h3>
      <div className={styles.list}>
        <img src={img1} alt="Realtor 1" />
        <div className={styles.details}>
          <h4>Erik Supaman</h4>
          <p>335 Houses sold</p>
        </div>
        <img src={img2} alt="Realtor 2" />
        <div className={styles.details}>
          <h4>Kimberly green</h4>
          <p>265 Houses sold</p>
        </div>
        <img src={img3} alt="Realtor 3" />
        <div className={styles.details}>
          <h4>Tomas Jack</h4>
          <p>193 Houses sold</p>
        </div>
      </div>
    </div>
  );
};

export default Realtors;

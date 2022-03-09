import styles from "./Features.module.scss";
import { Icons } from "../../img/svg/Icons";

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        <Icons name="global" className={styles.icon} />
        <h4 className="dark">Worlds best luxury homes</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus.
        </p>
      </div>
      <div className={styles.feature}>
        <Icons name="trophy" className={styles.icon} />
        <h4 className="dark">Only the best properties</h4>
        <p>
          Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
          rerum sed a eligendi aut quia.
        </p>
      </div>
      <div className={styles.feature}>
        <Icons name="map" className={styles.icon} />
        <h4 className="dark">All homes in top locations</h4>
        <p>
          Tenetur distinctio necessitatibus pariatur voluptatibus quidem
          consequatur harum.
        </p>
      </div>
      <div className={styles.feature}>
        <Icons name="key" className={styles.icon} />
        <h4 className="dark">New home in one week</h4>
        <p>
          Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
      </div>
      <div className={styles.feature}>
        <Icons name="presentation" className={styles.icon} />
        <h4 className="dark">Top 1% realtors</h4>
        <p>
          Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
          necessitatibus pariatur voluptatibus.
        </p>
      </div>
      <div className={styles.feature}>
        <Icons name="lock" className={styles.icon} />
        <h4 className="dark">Secure payments on nexter</h4>
        <p>
          Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
          quae.
        </p>
      </div>
    </section>
  );
};

export default Features;

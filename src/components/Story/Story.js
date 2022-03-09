import styles from "./Story.module.scss";

import img1 from "../../img/story-1.jpeg";
import img2 from "../../img/story-2.jpeg";

const Story = () => {
  return (
    <>
      <div className={styles.pictures}>
        <img src={img1} alt="Couple with new house" className={styles.img1} />
        <img src={img2} alt="New house" className={styles.img2} />
      </div>
      <div className={styles.content}>
        <h3 className={`mb-sm`}>Happy Customers</h3>
        <h2 className={`dark mb-md`}>
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button>Find your own home</button>
      </div>
    </>
  );
};

export default Story;

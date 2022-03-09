import styles from "./Gallery.module.scss";

import img1 from "../../img/gal-1.jpeg";
import img2 from "../../img/gal-2.jpeg";
import img3 from "../../img/gal-3.jpeg";
import img4 from "../../img/gal-4.jpeg";
import img5 from "../../img/gal-5.jpeg";
import img6 from "../../img/gal-6.jpeg";
import img7 from "../../img/gal-7.jpeg";
import img8 from "../../img/gal-8.jpeg";
import img9 from "../../img/gal-9.jpeg";
import img10 from "../../img/gal-10.jpeg";
import img11 from "../../img/gal-11.jpeg";
import img12 from "../../img/gal-12.jpeg";
import img13 from "../../img/gal-13.jpeg";
import img14 from "../../img/gal-14.jpeg";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <figure className={styles.item_1}>
        <img src={img1} alt="Gallery house 1" />
      </figure>
      <figure className={styles.item_2}>
        <img src={img2} alt="Gallery house 2" />
      </figure>
      <figure className={styles.item_3}>
        <img src={img3} alt="Gallery house 3" />
      </figure>
      <figure className={styles.item_4}>
        <img src={img4} alt="Gallery house 4" />
      </figure>
      <figure className={styles.item_5}>
        <img src={img5} alt="Gallery house 5" />
      </figure>
      <figure className={styles.item_6}>
        <img src={img6} alt="Gallery house 6" />
      </figure>
      <figure className={styles.item_7}>
        <img src={img7} alt="Gallery house 7" />
      </figure>
      <figure className={styles.item_8}>
        <img src={img8} alt="Gallery house 8" />
      </figure>
      <figure className={styles.item_9}>
        <img src={img9} alt="Gallery house 9" />
      </figure>
      <figure className={styles.item_10}>
        <img src={img10} alt="Gallery house 10" />
      </figure>
      <figure className={styles.item_11}>
        <img src={img11} alt="Gallery house 11" />
      </figure>
      <figure className={styles.item_12}>
        <img src={img12} alt="Gallery house 12" />
      </figure>
      <figure className={styles.item_13}>
        <img src={img13} alt="Gallery house 13" />
      </figure>
      <figure className={styles.item_14}>
        <img src={img14} alt="Gallery house 14" />
      </figure>
    </section>
  );
};

export default Gallery;

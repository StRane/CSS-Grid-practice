import styles from "./Homes.module.scss";

import img1 from "../../img/house-1.jpeg";
import img2 from "../../img/house-2.jpeg";
import img3 from "../../img/house-3.jpeg";
import img4 from "../../img/house-4.jpeg";
import img5 from "../../img/house-5.jpeg";
import img6 from "../../img/house-6.jpeg";

import { Icons } from "../../img/svg/Icons";

const Homes = () => {
  return (
    <section className={styles.homes}>
      <div className={styles.home}>
        <img src={img1} alt="House 1" />
        <Icons name="hearthfull" className={styles.hearth} />
        <h5>Beautiful Family House</h5>
        <div className={styles.location}>
          <Icons name="map" className={styles.icon} />
          <p>USA</p>
        </div>

        <div className={styles.rooms}>
          <Icons name="maleico" className={styles.icon} />
          <p>5 rooms</p>
        </div>
        <div className={styles.area}>
          <Icons name="expand" className={styles.icon} />
          <p>
            325 m<sub>2</sub>
          </p>
        </div>
        <div className={styles.location}>
          <Icons name="key" className={styles.icon} />
          <p>$1,200,000</p>
        </div>
        <button>Contact realtor</button>
      </div>

      <div className={styles.home}>
        <img src={img2} alt="House 1" />
        <Icons name="hearthfull" className={styles.hearth} />
        <h5>Modern Glass Villa</h5>
        <div className={styles.location}>
          <Icons name="map" className={styles.icon} />
          <p>Canada</p>
        </div>

        <div className={styles.rooms}>
          <Icons name="maleico" className={styles.icon} />
          <p>6 rooms</p>
        </div>
        <div className={styles.area}>
          <Icons name="expand" className={styles.icon} />
          <p>
            450 m<sub>2</sub>
          </p>
        </div>
        <div className={styles.location}>
          <Icons name="key" className={styles.icon} />
          <p>$2,750,000</p>
        </div>
        <button>Contact realtor</button>
      </div>

      <div className={styles.home}>
        <img src={img3} alt="House 1" />
        <Icons name="hearthfull" className={styles.hearth} />
        <h5>Cozy Country House</h5>
        <div className={styles.location}>
          <Icons name="map" className={styles.icon} />
          <p>UK</p>
        </div>

        <div className={styles.rooms}>
          <Icons name="maleico" className={styles.icon} />
          <p>4 rooms</p>
        </div>
        <div className={styles.area}>
          <Icons name="expand" className={styles.icon} />
          <p>
            250 m<sub>2</sub>
          </p>
        </div>
        <div className={styles.location}>
          <Icons name="key" className={styles.icon} />
          <p>$850,000</p>
        </div>
        <button>Contact realtor</button>
      </div>

      <div className={styles.home}>
        <img src={img4} alt="House 1" />
        <Icons name="hearthfull" className={styles.hearth} />
        <h5>Large Rustical Villa</h5>
        <div className={styles.location}>
          <Icons name="map" className={styles.icon} />
          <p>Portugal</p>
        </div>

        <div className={styles.rooms}>
          <Icons name="maleico" className={styles.icon} />
          <p>6 rooms</p>
        </div>
        <div className={styles.area}>
          <Icons name="expand" className={styles.icon} />
          <p>
            480 m<sub>2</sub>
          </p>
        </div>
        <div className={styles.location}>
          <Icons name="key" className={styles.icon} />
          <p>$1,950,000</p>
        </div>
        <button>Contact realtor</button>
      </div>

      <div className={styles.home}>
        <img src={img5} alt="House 1" />
        <Icons name="hearthfull" className={styles.hearth} />
        <h5>Majestic Palace House</h5>
        <div className={styles.location}>
          <Icons name="map" className={styles.icon} />
          <p>Germany</p>
        </div>

        <div className={styles.rooms}>
          <Icons name="maleico" className={styles.icon} />
          <p>18 rooms</p>
        </div>
        <div className={styles.area}>
          <Icons name="expand" className={styles.icon} />
          <p>
            4350 m<sub>2</sub>
          </p>
        </div>
        <div className={styles.location}>
          <Icons name="key" className={styles.icon} />
          <p>$11,240,000</p>
        </div>
        <button>Contact realtor</button>
      </div>

      <div className={styles.home}>
        <img src={img6} alt="House 1" />
        <Icons name="hearthfull" className={styles.hearth} />
        <h5>Modern Family Apartment</h5>
        <div className={styles.location}>
          <Icons name="map" className={styles.icon} />
          <p>Italy</p>
        </div>

        <div className={styles.rooms}>
          <Icons name="maleico" className={styles.icon} />
          <p>3 rooms</p>
        </div>
        <div className={styles.area}>
          <Icons name="expand" className={styles.icon} />
          <p>
            180 m<sub>2</sub>
          </p>
        </div>
        <div className={styles.location}>
          <Icons name="key" className={styles.icon} />
          <p>$600,000</p>
        </div>
        <button>Contact realtor</button>
      </div>
    </section>
  );
};

export default Homes;

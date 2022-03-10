import styles from "./Header.module.scss";

import logo1 from "../../img/logo.png";
import logo2 from "../../img/logo-bbc.png";
import logo3 from "../../img/logo-forbes.png";
import logo4 from "../../img/logo-techcrunch.png";
import logo5 from "../../img/logo-bi.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo1} alt="Nexter logo" className={styles.clogo} />
      <h3>Your own home</h3>
      <h1>The ultimate personal freedom</h1>
      <button>View our properties</button>
      <div className={styles.text}>Seen on</div>
      <div className={styles.logos}>
        <img src={logo2} alt="BBC logo" />
        <img src={logo3} alt="Forbes logo" />
        <img src={logo4} alt="Techcrunch logo" />
        <img src={logo5} alt="Bussiness Insider logo" />
      </div>
    </header>
  );
};

export default Header;

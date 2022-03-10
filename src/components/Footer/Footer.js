import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <NavLink to="/">Find your dream home</NavLink>
        </li>
        <li>
          <NavLink to="/">Request proposal</NavLink>
        </li>
        <li>
          <NavLink to="/">Download home planner</NavLink>
        </li>
        <li>
          <NavLink to="/">Contact us</NavLink>
        </li>
        <li>
          <NavLink to="/">Submit your property</NavLink>
        </li>
        <li>
          <NavLink to="/">Work with us</NavLink>
        </li>
      </ul>
      <p>
        &copy; Done for practice puposes to use react with sass and experiment
        with features
      </p>
    </footer>
  );
};

export default Footer;

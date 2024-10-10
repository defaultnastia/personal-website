import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav>
      <ul className={css.navbar}>
        <li>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="/signin">
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

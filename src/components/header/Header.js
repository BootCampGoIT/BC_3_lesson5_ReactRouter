import { Link, NavLink, useLocation } from "react-router-dom";
import { header, list, listItem, link, active } from "./Header.module.css";

const Header = () => {
  const location = useLocation();
  return (
    <div className={header}>
      <ul className={list}>
        <li className={listItem}>
          <NavLink
            to={{
              pathname: "/",
              state: { from: location.pathname },
            }}
            exact
            className={link}
            activeClassName={active}>
            Home
          </NavLink>
        </li>
        <li className={listItem}>
          <NavLink to='/about' className={link} activeClassName={active}>
            About
          </NavLink>
        </li>
        <li className={listItem}>
          <NavLink to='/contacts' className={link} activeClassName={active}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;

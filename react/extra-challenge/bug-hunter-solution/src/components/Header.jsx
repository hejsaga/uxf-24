import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;

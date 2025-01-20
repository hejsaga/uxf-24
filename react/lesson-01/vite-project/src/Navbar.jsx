const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <p className="logo">Logo</p>
        <ul className="nav-links">
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <button className="nav-cta">Sign up</button>
      </nav>
    </>
  );
};

export default Navbar;

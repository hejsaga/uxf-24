const Navbar = ({ links }) => {
  return (
    <div className="navbar">
      Navbar
      <ul>
        {links.map((link) => (
          <a key={link.name} href={link.href}>
            {link.name}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Special School", href: "#special-school" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* ================= BRAND ================= */}
        <a
          href="#home"
          className="brand"
          aria-label="Win In Life Child Development Centre home"
          onClick={closeMenu}
        >
          <div className="brand-text">
            <span className="brand-name">Win In Life</span>

            <span className="brand-subtitle">
              Child Development Centre
            </span>
          </div>
        </a>

        {/* ================= NAVIGATION ================= */}
        <nav
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            <Phone size={17} />
            <span>Book an Assessment</span>
          </a>
          <a href="/admin/login" className="admin-button" onClick={closeMenu}>
  Admin
</a>
        </nav>

        {/* ================= MOBILE MENU ================= */}
        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
"use client";
import Link from "next/link";
import { useState } from "react";

const SpotterLogo = () => (
  <div className="spotter-logo">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 20" height="16">
      <circle fill="#008080" cx="10" cy="10" r="6" />
      <circle fill="#F84960" cx="22" cy="10" r="6" />
      <circle fill="#BCD0DE" cx="34" cy="10" r="6" />
      <circle fill="#BCD0DE" cx="46" cy="10" r="6" />
    </svg>
    <span className="spotter-text">spotter</span>
  </div>
);

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Solutions",
      dropdown: [
        { name: "Trucking Automation", href: "/solutions/trucking" },
        { name: "AI Recruiting Engine", href: "/solutions/recruiting" },
      ],
    },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="left-side">
            <Link href="/" className="logo-link">
              <SpotterLogo />
            </Link>
            <ul className="nav-menu">
              {navItems.map((item, i) =>
                item.dropdown ? (
                  <li
                    key={i}
                    className="nav-item dropdown"
                    onMouseEnter={() => setOpenDropdown(i)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <span className="nav-link">
                      {item.name}{" "}
                      <span className="dropdown-icon">
                        {openDropdown === i ? "▲" : "▼"}
                      </span>
                    </span>
                    {openDropdown === i && (
                      <ul className="dropdown-menu">
                        {item.dropdown.map((drop, j) => (
                          <li key={j}>
                            <Link href={drop.href} className="dropdown-link">
                              {drop.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={i} className="nav-item">
                    <Link href={item.href} className="nav-link">
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <Link href="/get-started" className="cta-btn">
            Get Started
          </Link>
        </div>
      </nav>

      <div className="banner">
        <h3>
          Trucking <span className="navbar-highlight">Automation</span>
          <br />
          that works for you.
        </h3>
      </div>
    </>
  );
}

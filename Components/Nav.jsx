import React from "react";
import Link from "next/link";

import nav from "../styles/Nav.module.css";

function Nav() {
  return (
    <nav className={nav.nav}>
      <ul>
        <li>
          <Link href="/" className={nav.btn}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={nav.btn}>
            About
          </Link>
        </li>
        <li>
          <Link href="/explore" className={nav.btn}>
            Explore
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

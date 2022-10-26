import React from 'react'
import Link from 'next/link'

import nav from '../styles/Nav.module.css'

function Nav() {
  return (
    <nav className={nav.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
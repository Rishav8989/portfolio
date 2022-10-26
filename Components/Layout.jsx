import React from 'react'
import layout from '../styles/Layout.module.css'
import Nav from './Nav'


function Layout({children}) {
  return (
    <div className={layout.container}>
        <main className={layout.main}>
          <Nav/>
            {children}
        </main>
    </div>
  )
}

export default Layout
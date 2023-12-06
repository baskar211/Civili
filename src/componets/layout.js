import React from 'react'
import { Link ,Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <center><h1>Layout page</h1></center>
    <nav>
        <ul>
             <li><Link to={"/"}>home</Link></li>
             <li><Link to={'/service'}>service</Link></li>
             <li><Link to={'/content'}>content</Link></li>
        </ul>
    </nav>
    <Outlet/>
    
    </>
  )
}

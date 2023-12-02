import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import { FaReact } from "react-icons/fa6";
export default function FOOTER() {
  return (
    <Navbar>
      <NavbarBrand href="/" style={{
        display:'flex',
        flexDirection:'column',
        paddingLeft:'40%',
      }}>
        <h1>&copy;REACTSTRAP</h1>
        <div className="footer_icon" style={{alignSelf:'center'}}><FaReact /></div>
      </NavbarBrand>
    </Navbar>
  )
}

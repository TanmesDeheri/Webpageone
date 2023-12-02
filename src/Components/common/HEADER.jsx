import React from 'react'
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
export default function HEADER() {
  return (
      <Navbar
        className="headernavbar"
      >
        <NavbarBrand href="/">
          <h3 style={{color:'whitesmoke',display:'flex',flexDirection:'row',marginRight:'2em',padding:'1em',}}>Profile</h3>
        </NavbarBrand>
      </Navbar>
  )
}

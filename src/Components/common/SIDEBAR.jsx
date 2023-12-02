import React, { useState } from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaTableList } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import 'D:/ReactApps/webpageone/src/App.css'
import 'D:/ReactApps/webpageone/src/Components/sidebarcomponents/sidebar.css'
export default function SIDEBAR({ children }) {
  const [isOpen, setisOpen] = useState(false)
  const toggle = () => setisOpen(!isOpen)
  const menuItem = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <MdSpaceDashboard />
    },
    {
      path: '/product',
      name: 'Product',
      icon: <FaCartShopping />
    },
    {
      path: '/about',
      name: 'About',
      icon: <FcAbout />
    },
    {
      path: '/analytics',
      name: 'Analytics',
      icon: <IoAnalyticsSharp />
    },
    {
      path: '/tabledata',
      name: 'TableData',
      icon: <FaTableList />
    },
    {
      path:'/file',
      name:'Files',
      icon:<GoFileDirectoryFill />
    }
  ]
  return (
    <div className="container" style={{marginLeft:'0',paddingLeft:'0'}}>
      <div className="sidebar" style={{ width: isOpen ? "35%" : "5%" }}>
        <div className="top_section">
          <h1 className="logo" style={{ display: isOpen ? 'block' : 'none' }}>REACT</h1>
          <div className="bars" onClick={toggle} style={{ marginLeft: isOpen ? '100px' : '0px', fontSize: isOpen ? '5em' : '2em' }}><FaReact /></div>
        </div>
        {
          menuItem.map((item, index) => {
            return (<NavLink to={item.path} key={index} className='link' activeclassname='active'>
              <div className="icon">{item.icon}</div>
              <div className="link_text" style={{ display: isOpen ? "block" : 'none' }}>{item.name}</div>
            </NavLink>)
          })
        }

      </div>
      <main>{children}</main>
    </div>
  )
}

import Analytics from 'Components/sidebarcomponents/Analytics'
import Dashboard from 'Components/sidebarcomponents/Dashboard'
import Product from 'Components/sidebarcomponents/Product'
import About from 'Components/sidebarcomponents/About'
import React from 'react'
import SIDEBAR from 'Components/common/SIDEBAR'
import TableData from 'Components/TableData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Files from 'Components/sidebarcomponents/Files'
export default function Controller() {
  return (
    <BrowserRouter>
      <SIDEBAR>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/product' element={<Product />} />
          <Route path='/tabledata' element={<TableData/>}/>
          <Route path='/file' element={<Files/>}/>
        </Routes>
      </SIDEBAR>
    </BrowserRouter>
  )
}

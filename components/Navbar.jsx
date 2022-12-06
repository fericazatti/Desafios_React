import React from 'react'
import Title from './Title'
import Link from 'next/link'
import green from '@mui/material/colors/green'
import { Air } from '@mui/icons-material'
import { Box } from '@mui/material'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light"  > 
  <div className="container-fluid">

    <Link className="navbar-brand" href="#">
      Homtec
      <Air sx={{color:green[300], fontSize: 35 }}/>
    </Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">        
      </ul>
      
      <div className="d-flex">        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#"><Title /></Link>            
            </li>
            
            <li className="nav-item">
            <Link className="nav-link" href="#">Nosotros</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" href="#" tabindex="-1" aria-disabled="true">Data from API</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</Link>
            </li>
        </ul>
        
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar

import React from 'react'
import Title from './Title'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">React App</Link>
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
            <Link className="nav-link" href="#">About Project</Link>
            </li>
            {/* <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" href="#">Action</Link></li>
                <li><Link className="dropdown-item" href="#">Another action</Link></li>
                <li><hr className="dropdown-divider"></li>
                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
            </ul>
            </li> */}
            <li className="nav-item">
            <Link className="nav-link" href="#" tabindex="-1" aria-disabled="true">Data from API</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</Link>
            </li>
        </ul>
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button> */}
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar

import React from 'react'
// import { NavLink } from 'react-router-dom'


export default function Navbar (props){
    return(
      
  <nav className={`navbar navbar-expand-lg bg-${props.modeName}-subtle`} data-bs-theme={props.modeName}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li> */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nav
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Pricing</a></li>
            <li><a className="dropdown-item" href="#">Features</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">About Us</a></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <div className="dropdown">
        <button className={`btn btn-${props.modeName} dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Set Theme
        </button>
        <ul className="dropdown-menu setTheme">
          <li><a onClick={props.modeExtra} className="dropdown-item">Default</a></li>
          <li><a onClick={props.mode2} className="dropdown-item">Red</a></li>
          <li><a onClick={props.mode3} className="dropdown-item">Blue</a></li>
          <li><a onClick={props.mode4} className="dropdown-item">Green</a></li>
        </ul>
      </div>
      <div className="form-check ms-4 form-switch" >
        <input className="form-check-input" type="checkbox" onClick={props.mode} role="switch" id="flexSwitchCheckDefault" />
        <label className={`form-check-label text-${props.textMode}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
    )
}


/*
import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar (props){
    return(
      
  <nav className={`navbar navbar-expand-lg bg-${props.modeName}-subtle`} data-bs-theme={props.modeName}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/">Link</NavLink>
        </li> */

       /* <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nav
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/pricing">Pricing</NavLink></li>
            <li><NavLink className="dropdown-item" to="/features">Features</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
            <li><NavLink className="dropdown-item" to="/about">About Us</NavLink></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link disabled" aria-disabled="true">Disabled</NavLink>
        </li> */
    /*  </ul>
      <div className="dropdown">
        <button className={`btn btn-${props.modeName} dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Set Theme
        </button>
        <ul className="dropdown-menu setTheme">
          <li><a onClick={props.modeExtra} className="dropdown-item">Default</a></li>
          <li><a onClick={props.mode2} className="dropdown-item">Red</a></li>
          <li><a onClick={props.mode3} className="dropdown-item">Blue</a></li>
          <li><a onClick={props.mode4} className="dropdown-item">Green</a></li>
        </ul>
      </div>
      <div className="form-check ms-4 form-switch" >
        <input className="form-check-input" type="checkbox" onClick={props.mode} role="switch" id="flexSwitchCheckDefault" />
        <label className={`form-check-label text-${props.textMode}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
    )
}


 */
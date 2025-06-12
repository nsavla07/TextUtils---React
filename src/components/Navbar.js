import React,{useState} from 'react'
import PropTypes from 'prop-types'
// import {Link} from "react-router-dom";

export default function Navbar(props) {

  const [mode,setMode] = useState('light');

const changeTheme = (color) =>{
  document.body.style.backgroundColor = color;


}
const colors = ['green', 'blue', 'red', 'yellow', 'purple'];
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
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
              <a className="nav-link active" aria-current="page" href="/about">About</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/about">{props.aboutText}</a>
            </li>
          </ul>
          {colors.map(color => (
  <button
    key={color}
    style={{ backgroundColor: color, margin: "10px" }}
    onClick={() => changeTheme(color)}
  >
    {color}
  </button>
))}
          {/* <button style={{backgroundColor:"green", margin:"10px"}} onClick= {() => changeTheme("green")}>Green</button>
          <button style={{backgroundColor:"blue", margin:"10px"}} onClick= {() => changeTheme("blue")}>Blue</button> */}

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3 my-3`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
</div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
 aboutText: PropTypes.string.isRequired}

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About text here"
};
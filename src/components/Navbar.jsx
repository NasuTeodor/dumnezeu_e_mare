import React from "react";
import { Link } from "react-router-dom"
import LoginButton from './LoginButton';
import './styles/Navbar.css';

function Navbar() {

  return (
    <div className='navbar'>
      <div className='logo'>
      <img src={require('./media/logo.png')} alt='' width={"50px"} height={"50px"} />
      </div>
      <div className='spacing'>
        <div className='links'>
          <Link className='link' to={"/"}>Home</Link>
          <Link className='link' to={"/about"}>About</Link>
          <Link className='link' to={"/projects"}>Projects</Link>
          <Link className='link' to={"/knowledge"}>Knowledge</Link>
        </div>
        <div className='login'>
          <LoginButton />
        </div>
      </div>
    </div>
  )
}

export default Navbar
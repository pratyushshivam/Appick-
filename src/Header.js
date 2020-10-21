import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import {
    Link
  } from "react-router-dom";

function Header() {
    return (
        <div className="welcome__header">
           <div className="welcome__header__main">
               <div className="welcome__header__main__left">
                   <div className="welcome__header__main__left__searchInputDiv">
                       <input type="text" placeholder="What do you want to do today?"></input>
                   </div>
                   <div className="welcome__header__main__left__searchBarDiv">
                       <SearchIcon />
                   </div>
               </div>
               <div className="welcome__header__main__right">

                   <div className="welcome__header__main__right__login">
                   <Link className="linkmodlogin welcome__header__main__right__Link" to="/login">Login</Link>
                   </div>
                   <hr className="rightHorizontal" />
                   <div className="welcome__header__main__right__register">
                   <Link className=" linkmodregister  welcome__header__main__right__Link" to="/registration">Register</Link>
                   </div>
              </div>
           </div>
            
        </div>
    )
}

export default Header

import React from 'react'
import './Caption.css'
import {
    Link
  } from "react-router-dom";

function Caption() {
    return (
        <div className="welcome__caption">
            <div className="welcome__caption__left">
            <Link className="welcome__caption__link" to="/AppickManager">Entertainment</Link>
            <Link className="welcome__caption__link" to="/AppickManager">Music</Link>
            <Link className=" social welcome__caption__link" to="/AppickManager">Social Networking</Link>
            <Link className="welcome__caption__link" to="/AppickManager">Productivity</Link>
            <Link className="welcome__caption__link" to="/AppickManager">Essentials</Link>
            </div>
            <div className="welcome__caption__right">

            </div>
            
        </div>
    )
}

export default Caption

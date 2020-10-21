import React from 'react'
import './AppickManager.css'
import Button from '@material-ui/core/Button';
// import SearchIcon from '@material-ui/icons/Search';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import logo from './laptop.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {
Link
} from "react-router-dom";


function AppickManager() {
    return (
        <div className="welcome__appickManager">
            <div className="welcome__appickManager__main">
                <div className="welcome__appickManager__main__content">
                    <div className="welcome__appickManager__main__content__sameline">
                      <div className="welcome__appickManager__main__content__header">
                        <h1>Appick Manager</h1>
                      </div>
                      <div className="welcome__appickManager__main__content__para">
                        <p>Easy way of managing and tracking your subscriptions</p>
                      </div>
                      <div className="welcome__appickManager__main__content__buttons">
                         <div className="welcome__appickManager__main__content__buttons__know">
                           <Button className="welcome__body__main__middle__buttons__buttonstore buttonmain buttonleft" variant="contained" color="primary" >Know more</Button>
                         </div>
                        <div className="welcome__appickManager__main__content__buttons__get">
                           <Button className="welcome__body__main__middle__buttons__buttonstore buttonmain buttonright " variant="contained" color="primary" >Get it for free</Button>


                        </div>


                    </div>
                    </div>
                    <div className="welcome__appickManager__main__content__materialui">
                        <div className="welcome__appickManager__main__content__materialui__mat1">
                        <AddAlertIcon />
                        <h1>Reminders</h1>

                        </div>
                        <div className="welcome__appickManager__main__content__materialui__mat2">
                        <CreditCardIcon />
                        <h1>Track payments</h1>

                        </div>
                        <div className="welcome__appickManager__main__content__materialui__mat3">
                        <TouchAppIcon />
                        <h1>One click <br/>cancellation/renewal</h1>

                        </div>
                    </div>
                    <div className="viewall">
                     <ArrowBackIcon />
                     <Link className="colorblack linkmodregister  welcome__header__main__right__Link" to="/viewall">View all</Link>
                     <ArrowForwardIcon />
                      
                      
                    </div>
                </div>
                <div className="welcome__appickManager__main__image">
                <img src={logo} alt="Monitor" />
                </div>
            </div>
            
            
        </div>
    )
}

export default AppickManager

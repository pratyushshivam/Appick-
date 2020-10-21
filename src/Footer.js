import React from 'react'
import './Footer.css'
import Button from '@material-ui/core/Button';

function Footer() {
    return (
        <div className="welcome__footer">
            
            <div className="welcome__footer__main">
            <div className="welcome__footer__button">
               <Button className="welcome__body__main__middle__buttons__buttonstore buttonanother buttonagain" variant="contained" color="primary" >Go Back Up</Button>


            </div>
                <div className="welcome__footer__main__upper">
                    <div className="welcome__footer__main__upper__left">
                        <div className="welcome__footer__main__upper__left__header">
                            <h1>Popular Features</h1>
                        </div>
                        <div className="welcome__footer__main__upper__left__content">
                            <div className="welcome__footer__main__upper__left__content__leftdiv">
                                <h1>Manage Subscriptions</h1>
                                <h1>Track expense</h1>
                                <h1>Billing Data reminders</h1>
                                <h1>Optimise expenditure</h1>

                            </div>
                            <div className="welcome__footer__main__upper__left__content__rightdiv">
                              <h1>Compare apps</h1>
                              <h1>Make a wishlist</h1>
                              <h1>Price drop alerts</h1>
                              <h1>Verified Sellers</h1>
                                
                            </div>
                        </div>

                    </div>
                    <div className="horline"></div>
                    <div className="welcome__footer__main__upper__right">
                        <div className="welcome__footer__main__upper__right__one">
                            <div className="welcome__footer__main__upper__right__header">
                                <h1>Company</h1>
                            </div>
                            <div className="welcome__footer__main__upper__right__one__content">
                                <h2>About Us</h2>
                                <h2>Careers</h2>
                                <h2>Meet the Team</h2>
                                <h2>Contact Us</h2>
                            </div>
                        </div>
                        <div className="welcome__footer__main__upper__right__two">
                          <div className="welcome__footer__main__upper__left__header widthinc">
                                <h1>Make money with us</h1>
                          </div>
                          <div className="welcome__footer__main__upper__right__one__content overruled acc">
                                <h2>Sell on Appick Store</h2>
           
                           </div>

                        </div>
                        <div className="welcome__footer__main__upper__right__three">

                        <div className="welcome__footer__main__upper__left__header">
                                <h1>Let us help you</h1>
                          </div>
                          <div className="welcome__footer__main__upper__right__one__content">
                                <h2 className="dec" >Contact Support</h2>
                                <ul className="bullet">
                                    <li>Seller</li>
                                    <li>Customer</li>
                                </ul>
           
                           </div>




                        </div>
                        
                    </div>



                </div>
                <div className="welcome__footer__main__lower">
                    <div className="welcome__footer__main__lower__line"></div>
                    <div className="welcome__footer__main__lower__circles">
                        <div className="welcome__footer__main__lower__circles__circle"></div>
                        <div className="welcome__footer__main__lower__circles__circle"></div>
                        <div className="welcome__footer__main__lower__circles__circle"></div>
                    </div>
                    <div className="welcome__footer__main__lower__line"></div>
                    
                </div>
            </div>
          
        
        </div>
    )
}

export default Footer

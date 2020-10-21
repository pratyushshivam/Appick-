import React from 'react'
import './Registration.css'
import Button from '@material-ui/core/Button';

function Registration() {
    return (
        <div className="registration">
            <div className="registration__main">
                <div className="registration__main__header">
                    <h1>Registration Demo</h1>
                </div>
                <div className="registration__main__content">
                    <div className="registration__main__content__form">
                      
                      
                        <div className="registration__main__content__form__row">
                            <h2>First Name</h2>
                            <input type="text" placeholder="Enter Your First Name" />


                        </div>
                        <div className="registration__main__content__form__row">
                            <h2>Last Name</h2>
                            <input id="man" type="text" placeholder=" Last Name" />


                        </div>
                        <div className="registration__main__content__form__row">
                            <h2> Your Email</h2>
                           <input type="text" placeholder="Enter Your Email" />

                        </div>
                        <div className="registration__main__content__form__row">
                            <h2> Your Password</h2>
                            <input type="password" placeholder="Enter Your Password" />


                        </div>




                       
                    </div>
                </div>
            </div>
            <div className="registration__main__submit">
      <Button className="welcome__body__main__middle__buttons__buttonstore buttonanother buttonreg" variant="contained" color="primary" >Submit</Button>

                  
                </div>
            
        </div>
    )
}

export default Registration

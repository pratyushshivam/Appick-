import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";

function Login() {
  return (
    <div className="login">
        <form method="POST" action="https://appickdemo.web.app/welcome" >
      <div className="registration__main">
        <div className="registration__main__header">
          <h1>Login Demo</h1>
        </div>
        <div className="registration__main__content">
          <div className="registration__main__content__form">
             
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
        <Button
          
          className="welcome__body__main__middle__buttons__buttonstore buttonanother buttonreg"
          variant="contained"
          color="primary"
          onclick="window.location.href = 'https://appickdemo.web.app/welcome';"
        >
          Submit
        </Button>
       
      </div>
      </form>
    </div>
  );
}

export default Login;

'use strict';

import React from 'react';
import {Link} from 'react-router';
import SignIn from './signup.jsx';

const SignUp=React.createClass({
    render:function(){
        return(
            <div className="signup">
                <div className="signup__box">
                 <p className="navbar__logo signin__logo">
                        <span className="navbar__vr">vr</span>STUDIO
                </p>
                <div className="sign__info">
                    <input className="sign__name" type="text" name="fullname" placeholder="FULL NAME"/>
                    <input className="sign__email" type="email" name="email" placeholder="EMAIL" />
                    <input className="sign__pass" type="password" name="password" placeholder="PASSWORD" />
                    <input className="sign__pass" type="password" name="password" placeholder="CONFIRM PASSWORD" />
                    <div className="sign__buttons">
                             <Link to="" className="button_signin">Sign Up</Link>
                            <Link to="/signin" className="button_register">Sign In</Link>
                              <p className="sign__account">Do you have account?</p> 
                           
                    </div>
                    <p className="signin__or">or sign up with </p>
                        <div className="sign__socials">
                        <Link to=""><img src="../../assets/images/google.png"/></Link>
                        <Link to=""><img src="../../assets/images/fb.png"/></Link>
                        </div>
                </div>
            </div>
            </div>
        );
    }
});

export default SignUp;
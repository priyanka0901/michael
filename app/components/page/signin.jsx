'use strict';

import React from 'react';
import {Link} from 'react-router';
import SignUp from './signup.jsx';

const SignIn= React.createClass({
    render:function(){
        return(
            <div className="signin">
               <div className="signin__box">
                    <p className="navbar__logo signin__logo">
                        <span className="navbar__vr">vr</span>STUDIO
                     </p>
                     <div className="sign__info">
                        <input className="sign__email" type="email" name="email" placeholder="EMAIL" />
                        <input className="sign__pass" type="password" name="password" placeholder="PASSWORD" />
                        <input className="sign__check" type="checkbox" name="keep" />
                        <Link to="">Keep me logged in</Link>
                        <Link to="" className="signin__forget">Forget email or password?</Link>
                        <div className="sign__buttons">
                             <Link to="" className="button_signin">Sign In</Link>
                            <Link to="/signup" className="button_register">Sign Up</Link>
                            <p className="sign__account">Don't have account?</p> 
                           
                        </div>
                        <p className="signin__or">or sign in with </p>
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
export default SignIn;
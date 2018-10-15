import React, { Component } from "react";
import { Link } from 'react-router-dom';
import CustomInput from '../Forms/CustomInput';
import BtnPrimary from '../Buttons/BtnPrimary';

// sign in, sign up, sign up confirmation, password recovery, password recovery confirmation

class SignRegister extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentView: 'signin'
        }
    }
    changeView(view){
        this.setState({currentView:view})
    }
    render(){
        const { currentView } = this.state;
        return (
            <div className="text-center mt-2">
                {/* Sign In */}
                { currentView === 'signin' &&
                    <div data-aos="fade">
                        <h4 className="mb-4">Already have an account?</h4>
                        <CustomInput label="EMAIl" placeholder="Enter your email" />
                        <CustomInput label="Password" placeholder="Enter your password" />
                        <div className="form-group text-center">
                            <button className="btn btn-link text-white text-uppercase" onClick={()=>this.changeView('recover-password')}>Forgot Password ?</button>
                        </div>
                        <div className="form-group text-center">
                            <Link to={'/profile/general'}>
                                <BtnPrimary content="Sign In"/>
                            </Link>
                        </div>
                        <span>If you have no account then <button className="font-weight-bold px-0 btn btn-link text-white" onClick={()=>this.changeView('signup')}>SIGN UP</button></span>
                    </div>    
                }
                {/* Sign UP */}
                {currentView === 'signup' && 
                    <div data-aos="fade">
                        Signup
                    </div>
                }
                {/* SignUp Confirmation */}
                {currentView === 'signup-confirm' && 
                    <div data-aos="fade">
                        Signup Confirmation
                    </div>
                }
                {/* Recover Password */}
                {currentView === 'recover-password' && 
                    <div data-aos="fade">
                        Recover Password
                    </div>
                }
                {/* Recover Password Confirmation */}
                {currentView === 'recover-confirm' && 
                    <div data-aos="fade">
                        Recover Password Confirmation
                    </div>
                }

            </div>
        );
    }
}

export default SignRegister;

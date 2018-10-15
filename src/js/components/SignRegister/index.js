import React, { Component } from "react";
import { Link } from 'react-router-dom';
import CustomInput from '../Forms/CustomInput';
import BtnPrimary from '../Buttons/BtnPrimary';
import $ from 'jquery';

// sign in, sign up, sign up confirmation, password recovery, password recovery confirmation

class SignRegister extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentView: 'signin'
        }
    }
    toggleModal() {
        $(`#sign-registerModal`).modal('hide')
    }
    changeView(view){
        this.setState({currentView:view})
    }
    render(){
        const { currentView } = this.state;
        return (
            <div className="text-center mt-5">
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
                            <Link to={'/profile/general'} onClick={()=>{this.toggleModal()}}>
                                <BtnPrimary content="Sign In"/>
                            </Link>
                        </div>
                        <span>If you have no account then <button className="font-weight-bold px-0 btn btn-link text-white" onClick={()=>this.changeView('signup')}>SIGN UP</button></span>
                    </div>    
                }
                {/* Sign UP */}
                {currentView === 'signup' && 
                    <div data-aos="fade">
                        <h4 className="mb-4">Create Your Account</h4>
                        <CustomInput label="Nickname" placeholder="Enter your nickname" />
                        <CustomInput label="Email" placeholder="Enter your email" />
                        <CustomInput label="Password" placeholder="Enter your password" />
                        <div className="form-check mb-4">
                            <input className="form-check-input" type="checkbox" value="" id="agreeCheck"/>
                            <label className="form-check-label" htmlFor="agreeCheck">
                                I agree with the Privacy Policy and <span className="font-weight-bold">Terms and Conditions</span>
                            </label>
                        </div>
                        <div className="form-group text-center">
                            <span onClick={()=>{this.changeView('signup-confirm')}}>
                                <BtnPrimary content="Sign Up" />
                            </span>
                        </div>
                        <span>If you already have an account then <button className="font-weight-bold px-0 btn btn-link text-white" onClick={() => this.changeView('signin')}>SIGN IN</button></span>
                    </div>
                }
                {/* SignUp Confirmation */}
                {currentView === 'signup-confirm' && 
                    <div data-aos="fade">
                        <h4 className="mb-4">Email Verification</h4>
                        <p>We have just sent you a message on your email with a verification link to your account.</p>
                        <span onClick={() => { this.changeView('signin') }}>
                            <BtnPrimary content="Go Back to Login" />
                        </span>
                    </div>
                }
                {/* Recover Password */}
                {currentView === 'recover-password' && 
                    <div data-aos="fade">
                        <h4 className="mb-4">Password Recovery</h4>
                        <p>Use your email and we will send the instruction for recovering your password.</p>
                        <CustomInput label="Email" placeholder="Enter your email"/>
                        <span onClick={() => { this.changeView('recover-confirm') }}>
                            <BtnPrimary content="Send Instruction" />
                        </span>
                    </div>
                }
                {/* Recover Password Confirmation */}
                {currentView === 'recover-confirm' && 
                    <div data-aos="fade">
                        <h4 className="mb-4">Password Recovery</h4>
                        <p>We have just sent you a message on your email with the instructions to create a new password</p>
                        <span onClick={() => { this.changeView('signin') }}>
                            <BtnPrimary content="Go Back to Login" />
                        </span>
                    </div>
                }

            </div>
        );
    }
}

export default SignRegister;

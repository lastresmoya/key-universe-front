import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../../components/Navigation/Breadcrumbs';
import CustomInput from '../../../components/Forms/CustomInput';
import BtnPrimary from '../../../components/Buttons/BtnPrimary';
import iconGuaranteed from './assets/icon-guaranteed.png';
import iconSecurity from './assets/icon-security.png';


import FaIcon from '@fortawesome/react-fontawesome';
import {
    faCreditCard
} from '@fortawesome/fontawesome-free-solid';
import { 
    faBitcoin,
    faCcPaypal
 } from '@fortawesome/fontawesome-free-brands';


class CheckoutForm extends Component  {
    constructor(props){
        super(props);
        this.state ={
            payMethod: "CC"
        }
    }
    render(){
        console.log(this.state.payMethod)
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link to={'/checkout/cart'}>
                                <Breadcrumbs content="Go back to order details" />
                            </Link>
                            <div className="row">
                                <div className="col-sm-8">
                                    <h3>Checkout form</h3>
                                    <p>All transactions are secure and encripted. Credit card information is never stored.</p>

                                    <form>
                                        <h5 className="font-weight-normal font-spacing pt-4 pb-2">PAYMENT METHOD</h5>

                                        <div className="form-group mb-5">
                                            <div className="custom-control custom-radio my-2">
                                                <input type="radio" onChange={()=> this.setState({payMethod:"PP"})} id="customRadio1" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label " htmlFor="customRadio1">
                                                    <span className="h5 font-weight-light mr-2"><FaIcon icon={faCcPaypal} /></span> Paypal
                                            </label>
                                            </div>
                                            <div className="custom-control custom-radio my-2">
                                                <input type="radio" onChange={() => this.setState({ payMethod: "BTC" })} id="customRadio2" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="customRadio2">
                                                    <span className="h5 font-weight-light mr-3"><FaIcon icon={faBitcoin} /></span>
                                                    Bitcoin</label>
                                            </div>
                                            <div className="custom-control custom-radio my-2">
                                                <input type="radio" defaultChecked onChange={() => this.setState({ payMethod: "CC" })} id="customRadio3" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="customRadio3">
                                                    <span className="h5 font-weight-light mr-2"><FaIcon icon={faCreditCard} /> </span>
                                                    Credit Card
                                            </label>
                                            </div>
                                        </div>

                                        {/* If Paypal */}
                                        {this.state.payMethod === 'PP' && 
                                            <div className="card bg-dark p-3">Here goes paypal login</div>
                                        }
                                        {/* If Bitcoin */}
                                        {this.state.payMethod === 'BTC' && 
                                            <div className="card bg-dark p-3">Here Goes Bitcoin Code to deposit</div>
                                        }
                                        {/* If CreditCard */}
                                        {this.state.payMethod === 'CC' &&
                                            <div>
                                                <div className="form-row">
                                                    <div className="col-sm-6">
                                                        <CustomInput label="Card Number" placeholder="**** **** **** ****" />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <CustomInput label="Card Holder" placeholder="Name on the card" />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-sm-6">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <CustomInput label="Exp Date" placeholder="MM/YY" />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <CustomInput label="CVC" placeholder="***" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        
                                        <h5 className="font-weight-normal font-spacing pt-4 pb-2">BILLING ADDRESS</h5>

                                        <div className="form-row">
                                            <div className="col-sm-6">
                                                <CustomInput label="Address line 1" placeholder="Street Address" />
                                            </div>
                                            <div className="col-sm-6">
                                                <CustomInput label="Address line 2" placeholder="Street Address" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-sm-3">
                                                <CustomInput label="City" placeholder="City Name" />
                                            </div>
                                            <div className="col-sm-3">
                                                <CustomInput label="Country" placeholder="Select" />
                                            </div>
                                            <div className="col-sm-3">
                                                <CustomInput label="ZIP Code" placeholder="000000" />
                                            </div>
                                        </div>

                                        <div className="form-row my-4 d-flex justify-content-end">
                                            <Link to={"/checkout/success"} className="shadow-lg">
                                                <BtnPrimary content="Continue" />
                                            </Link>
                                        </div>

                                    </form>





                                </div>
                                <div className="col-sm-4">
                                    <div className="card bg-secondary" data-aos="fade">
                                        <div className="card-body">
                                            <h4 className="font-spacing font-weight-normal py-3">ORDER SUMARY</h4>

                                            <div className="d-flex justify-content-between align-items-baseline my-3">
                                                <div className="d-flex flex-column">
                                                    <span className="font-weight-bold">The Witcher 3: Wild Hunt</span>
                                                    2 key(s)
                                            </div>
                                                <span className="font-weight-bold">€24.00</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-baseline my-3">
                                                <div className="d-flex flex-column">
                                                    <span className="font-weight-bold">The Witcher 3: Wild Hunt</span>
                                                    2 key(s)
                                            </div>
                                                <span className="font-weight-bold">€24.00</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-baseline mt-3">
                                                <div className="d-flex flex-column">
                                                    <span className="font-weight-bold">The Witcher 3: Wild Hunt</span>
                                                    2 key(s)
                                            </div>
                                                <span className="font-weight-bold">€25.00</span>
                                            </div>
                                        </div>
                                        <div className="card-footer d-flex justify-content-end py-4" >
                                            <span className="font-weight-normal mr-2">TOTAL:</span> <span className="h4 m-0 font-weight-bold">€66.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row pt-4">
                                <div className="col-sm-4">
                                    <div className="card bg-secondary text-center ">
                                        <div className="card-body px-4 py-5">
                                            <img src={iconGuaranteed} alt="" data-aos="fade-down" />
                                            <h5 className="mb-2 mt-3">Guarantee</h5>
                                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non massa turpis. In non bibendum erat. Duis pulvinar vulputate ligula a rhoncus.</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card bg-secondary text-center">
                                        <div className="card-body px-4 py-5">
                                            <img src={iconSecurity} alt="" data-aos="fade-down" />
                                            <h5 className="mb-2 mt-3">Secure</h5>
                                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non massa turpis. In non bibendum erat. Duis pulvinar vulputate ligula a rhoncus.</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card bg-secondary text-center">
                                        <div className="card-body px-4 py-5">
                                            <img src={iconGuaranteed} alt="" data-aos="fade-down" />
                                            <h5 className="mb-2 mt-3">Trusted</h5>
                                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non massa turpis. In non bibendum erat. Duis pulvinar vulputate ligula a rhoncus.</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default CheckoutForm;
import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../../components/Navigation/Breadcrumbs';
import CustomInput from '../../../components/Forms/CustomInput';
import BtnPrimary from '../../../components/Buttons/BtnPrimary';

import FaIcon from '@fortawesome/react-fontawesome';
import {
    faCreditCard
} from '@fortawesome/fontawesome-free-solid';
import { 
    faAmazonPay,
    faCcPaypal
 } from '@fortawesome/fontawesome-free-brands';


function CheckoutFormPage(props) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to={'/checkout'}>
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
                                            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                                            <label className="custom-control-label " for="customRadio1">
                                                <span className="h5 font-weight-light mr-2"><FaIcon icon={faCcPaypal} /></span> Paypal
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio my-2">
                                            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                                            <label className="custom-control-label" for="customRadio2">
                                                <span className="h5 font-weight-light mr-2"><FaIcon icon={faAmazonPay} /></span>
                                                Amazon Pay</label>
                                        </div>
                                        <div className="custom-control custom-radio my-2">
                                            <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                                            <label className="custom-control-label" for="customRadio3">
                                                <span className="h5 font-weight-light mr-2"><FaIcon icon={faCreditCard} /> </span>
                                                Credit Card
                                            </label>
                                        </div>
                                    </div>

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
                                        <Link to={`/checkout-success`} className="shadow-lg">
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

                    </div>
                </div>
            </div>


        </div>
    )
}

export default CheckoutFormPage;
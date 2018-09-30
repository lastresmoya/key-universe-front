import React from 'react';
import thumbImg from './assets/thumb-witcher-md.png';
import DescriptionItem from '../../../components/DescriptionItem';
import BtnPrimaryOutline from '../../../components/Buttons/BtnPrimaryOutline';

function CheckoutSuccessPage(props) {
    return (
        <div className="my-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Thank you for the order!</h1>
                        <p>We would like to thank you for your purchase, it really means something!</p>
                        <p>You can get your keys now or check it later in your Dashboard in My Purchases tab. Also we want to mention that you only have <strong>14 days to activate</strong> the key and informs us about their work.</p>
                        <div className="row">
                            <div className="col-sm-4">
                                <dl className="row">
                                    <dt className="col-3">Order:</dt>
                                    <dd className="col-9">#1009</dd>
                                    <dt className="col-3">Date:</dt>
                                    <dd className="col-9">02/07/18</dd>
                                </dl>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-10 m-auto">
                                <div className="card mb-4 bg-transparent border-light shadow-lg" data-aos="fade">
                                    <div className="card-header d-flex justify-content-between">
                                        <h5 className="card-title m-0">The Witcher 3: Wild Hunt</h5>
                                        <h5 className="m-0">€12.00</h5>
                                    </div>
                                    <div className="card-body d-flex align-items-start justify-content-start">
                                        <div className="col-2 mr-2 p-0">
                                            <img src={thumbImg} alt="" className="img-fluid"/>
                                        </div>
                                        <div className="d-flex w-100 align-items-baseline justify-content-between">
                                            <div className="w-100 container">
                                                <DescriptionItem title="Product Key" desc="1978-9875-XXXX-XXX"/>
                                                <DescriptionItem title="Seller" desc="CAPTAIN_PEROXIDE" />
                                                <DescriptionItem title="Date" desc="11/07/2018" />
                                                <DescriptionItem title="Invoice ID" desc="#000000"/>
                                            </div>
                                            <BtnPrimaryOutline content="Report Issue"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-4 bg-transparent border-light shadow-lg" data-aos="fade">
                                    <div className="card-header d-flex justify-content-between">
                                        <h5 className="card-title m-0">The Witcher 3: Wild Hunt</h5>
                                        <h5 className="m-0">€12.00</h5>
                                    </div>
                                    <div className="card-body d-flex align-items-start justify-content-start">
                                        <div className="col-2 mr-2 p-0">
                                            <img src={thumbImg} alt="" className="img-fluid" />
                                        </div>
                                        <div className="d-flex w-100 align-items-baseline justify-content-between">
                                            <div className="w-100 container">
                                                <DescriptionItem title="Product Key" desc="1978-9875-XXXX-XXX" />
                                                <DescriptionItem title="Seller" desc="CAPTAIN_PEROXIDE" />
                                                <DescriptionItem title="Date" desc="11/07/2018" />
                                                <DescriptionItem title="Invoice ID" desc="#000000" />
                                            </div>
                                            <BtnPrimaryOutline content="Report Issue" />
                                        </div>
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

export default CheckoutSuccessPage;
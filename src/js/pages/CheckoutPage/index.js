import React from 'react';
import OrderListItem from './OrderListItem';
import CheckoutFormModal from './CheckoutFormModal';

function CheckoutPage (props) {
    return(
        <div className="my-4 pt-4 pb-5">
            <div className="container">
                <h4 className="font-spacing font-weight-normal">Order Details</h4>

                <div className="row my-4">
                    <div className="col">
                        <div className="order-list">
                            <OrderListItem />
                            <OrderListItem />
                            <OrderListItem />
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="d-flex justify-content-end align-items-center">
                    <div className="font-spacing">TOTAL AMOUNT:</div><div className="h4 m-0 px-5">€30.00</div>
                </div>
                <div className="d-flex justify-content-end my-5">
                    <button className="btn px-5 btn-primary btn-gradient font-spacing btn-lg" data-toggle="modal" data-target="#checkoutModal"><small>BUY KEYS</small></button>
                </div>
                <CheckoutFormModal/>
            </div>
        </div>
    )
}

export default CheckoutPage;
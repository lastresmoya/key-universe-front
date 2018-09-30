import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../../components/Navigation/Breadcrumbs';

function CheckoutFormPage(props) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to={'/checkout'}>
                            <Breadcrumbs content="Go back to order details" />
                        </Link>
                        <Link to={`/checkout-success`} className="btn px-5 btn-primary btn-gradient font-spacing btn-lg"><small>PAY €30.00</small></Link>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default CheckoutFormPage;
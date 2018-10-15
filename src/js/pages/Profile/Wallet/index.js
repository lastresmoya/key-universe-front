import React from "react";
import ProfileNav from '../';
import BtnLink from '../../../components/Buttons/BtnLink';
import TransactionsList from './TransactionsList';

function Wallet(props) {
    return (
        <ProfileNav>
            <h4>My Wallet</h4>
            <div className="row py-3">
                <div className="col-md-4 col-sm-12"></div>
                <div className="col-md-4 col-sm-6">
                    <div className="card bg-secondary">
                        <div className="card-body py-2 d-flex justify-content-between align-items-center">
                            <small className="font-weight-bold">YOUR BALANCE</small>
                            <span className="h5 m-0">€000.00</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 d-flex align-items-center justify-content-end">
                    <BtnLink content="WITHDRAW"/>
                </div>
            </div>
            <TransactionsList/>
        </ProfileNav>
    );
}

export default Wallet;

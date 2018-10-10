import React from "react";
import { Link } from 'react-router-dom';
import ProfileMain from '../';


function BankAccounts(props) {
    return (
        <ProfileMain>
           Bank Accounts
           <Link to={"/profile/accounts/new"}>Add Bank Account</Link>
        </ProfileMain>
    );
}

export default BankAccounts;

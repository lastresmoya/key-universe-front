import React from "react";
import { Link } from 'react-router-dom';
import ProfileMain from '../../';

function NewBankAccount (props) {
    return (
        <ProfileMain>
            New Bank account
            <Link to={"/profile/accounts/my-accounts"}>Go Back</Link>
        </ProfileMain>
    );
}

export default NewBankAccount;

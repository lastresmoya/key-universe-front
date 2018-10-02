import React from "react";
import ProfileMain from '../';
import CustomSelect from '../../../components/Forms/CustomSelect';

function Offers(props) {
    return (
        <ProfileMain>
            <h4>My Offers</h4>
            <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                    <a className="nav-link active" href="/">ACTIVE</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">ARCHIVE</a>
                </li>
            </ul>
            <CustomSelect label="Sort By" opts={["A-Z", "Z-A"]} />

        </ProfileMain>
    );
}

export default Offers;

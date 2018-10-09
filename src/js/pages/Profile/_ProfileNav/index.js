import React from "react";
import FaIcon from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import {
    faUser,
    faBriefcase,
    faCloud,
    faTags,
    faCreditCard
} from '@fortawesome/fontawesome-free-solid';

function ProfileNav(props) {
    return (
        <ul className="nav flex-column nav-custom">
            <li className="nav-item">
                <NavLink to={'/profile/general'} activeClassName="active" className="nav-link"><FaIcon icon={faUser} /> PROFILE</NavLink>
            </li>
            <li className="nav-item">
                <a className=" nav-link" href="#"><FaIcon icon={faBriefcase} /> BUSINESS PROFILE</a>
            </li>
            <li className="nav-item">
                <NavLink to={'/profile/purchases/my-purchases'} activeClassName="active" className="nav-link"><FaIcon icon={faCloud} /> MY PURCHASES</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'/profile/offers/my-offers'} activeClassName="active" className="nav-link"><FaIcon icon={faTags} /> MY OFFERS</NavLink>
                {/* <ul>
                    <li className="nav-item">
                        <NavLink to={'/profile/offers/new'} activeClassName="active" className="nav-link" href="#">Create new offer</NavLink>
                    </li>
                </ul> */}
            </li>
            <li className="nav-item">
                <a className="nav-link"><FaIcon icon={faCreditCard} /> BANK ACCOUNT</a>
            </li>
        </ul>
    );
}

export default ProfileNav;

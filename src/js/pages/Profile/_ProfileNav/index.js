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
                <NavLink to={'/profile/general'} activeClassName="active" className="nav-link" href="#"><FaIcon icon={faUser} /> PROFILE</NavLink>
            </li>
            <li className="nav-item">
                <a className=" nav-link" href="#"><FaIcon icon={faBriefcase} /> BUSINESS PROFILE</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><FaIcon icon={faCloud} /> MY PURCHASES</a>
            </li>
            <li className="nav-item">
                <NavLink to={'/profile/offers/my-offers'} activeClassName="active" className="nav-link" href="#"><FaIcon icon={faTags} /> MY OFFERS</NavLink>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><FaIcon icon={faCreditCard} /> BANK ACCOUNT</a>
            </li>
        </ul>
    );
}

export default ProfileNav;

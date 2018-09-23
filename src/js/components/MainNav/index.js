import React from 'react';
import logo from './assets/logo-keyuniverse.png';
import FaIcon from '@fortawesome/react-fontawesome';
import { 
    faShoppingCart,
    faSearch
 } from '@fortawesome/fontawesome-free-solid';



function MainNav (props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-secondary d-flex justify-content-center">
            <div className="col-3">
                <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
            </div>
            <ul className="navbar-nav col-6 d-flex justify-content-center">
                <li className="nav-item  active">
                    <a className="nav-link" href="#">ABOUT US <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" href="#">COMMUNITY</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" href="#">SELL YOUR KEYS</a>
                </li>
                <li className="nav-item ">
                    <span className="nav-link d-flex align-items-center" href="#">
                        <span className="h6 mb-0 mr-2"><FaIcon icon={faSearch} /></span>
                        <span>SEARCH</span>
                    </span>
                </li>
            </ul>
            <div className="navbar-nav col-3 d-flex justify-content-sm-end">
                <li className="nav-item">
                    <a href="" className="nav-link text-primary">SIGN IN</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">
                        <span className="h6"><FaIcon icon={faShoppingCart} /></span>
                        <span className="badge badge-info">2</span>
                    </a>
                </li>
            </div>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
        </nav>
    )
}
export default MainNav;
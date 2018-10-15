import React, { Component } from 'react';
import logo from './assets/logo-keyuniverse.png';
import SignRegister from '../SignRegister';
import ModalDefault from '../Modals/ModalDefault';
import NotificationDropdown from './NotificationDropdown';
import { Link } from 'react-router-dom';
import FaIcon from '@fortawesome/react-fontawesome';
import { 
    faShoppingCart,
    faSearch,
    faBell
 } from '@fortawesome/fontawesome-free-solid';



class MainNav extends Component {
    render(){
        const modalSignRegister = {
            id: "sign-register",
            title: " ",
            type: "default",
            content: <SignRegister />,
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-secondary d-flex justify-content-center">
                <div className="col-3">
                    <Link className="navbar-brand" to={"/"}><img src={logo} alt="" /></Link>
                </div>
                {/* {Add Toggle Search Bar in here} */}
                {/* return <input type="text" onKeyPress={this._handleKeyPress} /> */}

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
                    {/* <li className="nav-item ">
                    <span className="nav-link d-flex align-items-center" href="#">
                        <span className="h6 mb-0 mr-2"><FaIcon icon={faSearch} /></span>
                        <span>SEARCH</span>
                    </span>
                </li> */}
                    <li className="nav-item">
                        <Link to={"/search"} className="nav-link">
                            <span className="h6 mb-0 mr-2"><FaIcon icon={faSearch} /></span>
                            SEARCH
                        </Link>
                    </li>
                </ul>
                <div className="navbar-nav col-3 d-flex justify-content-sm-end">
                    {/* <li className="nav-item">
                        <Link to={"/profile/general"} className="nav-link text-primary">SIGN IN</Link>
                    </li> */}
                    <li className="nav-item">
                        <div data-toggle="modal" data-target={`#${modalSignRegister.id}Modal`} className="nav-link text-primary">
                            SIGN IN
                        </div>
                    </li>
                    <NotificationDropdown/>
                    <li className="nav-item">
                        <Link to={'/checkout/cart'} className="nav-link">
                            <span className="h6"><FaIcon icon={faShoppingCart} /></span>
                            <span className="badge badge-info">2</span>
                        </Link>
                    </li>
                </div>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
                <ModalDefault
                    type={modalSignRegister.type}
                    id={modalSignRegister.id}
                    title={modalSignRegister.title}
                    content={modalSignRegister.content}
                    dark
                    option
                />
            </nav>
        )
    }
}
export default MainNav;
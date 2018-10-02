import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import AOS from 'aos';

import {
    activateGeod,
    closeGeod,
} from './redux';

import HomePage from "./pages/HomePage";

import ProfileGeneral from "./pages/Profile/General";
import ProfileOffers from "./pages/Profile/Offers";

import PublicProfile from "./pages/Profile/PublicProfile";
import SearchPage from "./pages/SearchPage";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import CheckoutForm from "./pages/Checkout/CheckoutForm";
import CheckoutSuccess from "./pages/Checkout/CheckoutSuccess";

import MainNav from './components/MainNav';
import Footer from './components/Footer';

const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};

class AppContainer extends Component {
    componentDidMount() {
        AOS.init({
            offset: 50,
            duration: 600,
            easing: 'ease-in-out-sine',
            delay: 100,
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <MainNav/>
                    <Route component={ScrollToTop} />
                    <Route exact path='/' component={HomePage} />
                    <Route path='/profile/general' component={ProfileGeneral} />
                    <Route path='/profile/offers' component={ProfileOffers} />
                    <Route path='/public-profile' component={PublicProfile} />
                    <Route path='/search' component={SearchPage} />
                    <Route path='/product' component={ProductPage} />
                    <Route path='/checkout/cart' component={Checkout} />
                    <Route path='/checkout/form' component={CheckoutForm} />
                    <Route path='/checkout/success' component={CheckoutSuccess} />
                    <Footer/>
                    {/* <Route path="/clinician" render={() => <Dashboard {...{ currentDash: 'clinician' }} />} />
                    <Route path="/doctor" render={() => <Dashboard {...{ currentDash: 'doctor' }} />} /> */}

                    {/* Test Redux */}
                    {/* {this.props.geod.title || 'hello world'}
                    {this.props.geod.title ?
                        <button onClick={this.props.closeGeod}>
                            Exit Geod
                        </button> :
                        <button onClick={() => this.props.activateGeod({ title: 'I am a geo dude!' })}>
                            Click Me!
                        </button>
                    } */}
                </div>
            </Router>
        );
    }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
    geod: state.geod,
});

const mapDispatchToProps = {
    activateGeod,
    closeGeod,
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);

export default App;
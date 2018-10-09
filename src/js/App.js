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
import Purchases from "./pages/Profile/Purchases";
import PurchaseDetail from "./pages/Profile/Purchases/PurchaseDetail";
import MyOffers from "./pages/Profile/Offers";
import NewOffer from "./pages/Profile/Offers/NewOffer";
import OfferDetail from "./pages/Profile/Offers/OfferDetail";

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
                    <Route path='/profile/purchases/my-purchases' component={Purchases} />
                    <Route path='/profile/purchase/:id' component={PurchaseDetail} />
                    <Route path='/profile/offers/my-offers' component={MyOffers} />
                    <Route path='/profile/offers/new' component={NewOffer} />
                    <Route path='/profile/offer/:id' component={OfferDetail} />
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
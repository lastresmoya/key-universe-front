import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import AOS from 'aos';

import {
    activateGeod,
    closeGeod,
} from './redux';

import HomePage from "./pages/HomePage";
import MyProfile from "./pages/Profile/MyProfile";
import PublicProfile from "./pages/Profile/PublicProfile";
import SearchPage from "./pages/SearchPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/Checkout";
import CheckoutFormPage from "./pages/Checkout/CheckoutFormPage";
import CheckoutSuccessPage from "./pages/Checkout/CheckoutSuccessPage";

import NewOffer from "./pages/NewOffer";

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
                    <Route path='/my-profile' component={MyProfile} />
                    <Route path='/public-profile' component={PublicProfile} />
                    <Route path='/search' component={SearchPage} />
                    <Route path='/product' component={ProductPage} />
                    <Route path='/checkout' component={CheckoutPage} />
                    <Route path='/checkout-form' component={CheckoutFormPage} />
                    <Route path='/checkout-success' component={CheckoutSuccessPage} />
                    <Route path='/my-profile-offers-new' component={NewOffer} />
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
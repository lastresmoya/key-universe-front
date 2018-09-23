import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AOS from 'aos';

import {
    activateGeod,
    closeGeod,
} from './redux';

import HomePage from "./pages/HomePage";
import MyProfile from "./pages/MyProfile";
import UserProfile from "./pages/UserProfile";
import SearchPage from "./pages/SearchPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import NewOffer from "./pages/NewOffer";

import MainNav from './components/MainNav';

class AppContainer extends Component {
    componentDidMount() {
        AOS.init({
            offset: 200,
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
                    <Route exact path='/' component={HomePage} />
                    <Route path='/my-profile' component={MyProfile} />
                    <Route path='/user-profile' component={UserProfile} />
                    <Route path='/search' component={SearchPage} />
                    <Route path='/product' component={ProductPage} />
                    <Route path='/cart' component={CartPage} />
                    <Route path='/my-profile/offers/new' component={NewOffer} />
                    
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
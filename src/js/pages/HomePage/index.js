
import React from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../../components/GameCard';
import GamesList from '../../components/GamesList';
import AboutUs from '../../components/AboutUs';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';
import iconGuaranteed from './assets/icon-guaranteed.png';
import iconSecurity from './assets/icon-security.png';

function HomePage(props) {
    return(
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col">
                        Image Goes Here Large

                        Small Image
                        Small Image
                        Small Image
                        {/* <Link to={'/user-profile'}>Link</Link> */}
                        {/* <img className="img-fluid" data-aos="fade" src="https://media.playstation.com/is/image/SCEA/legend-of-korra-listing-thumb-01-ps4-ps3-us-18jun14?$Icon$" alt="" /> */}
                    </div>
                </div>
                <div className="row mt-4 mb-3">
                    <div className="col d-flex align-items-baseline justify-content-between">
                        <h3>Featured</h3>
                        <a href="" className="btn-link"><small>VIEW ALL</small></a>
                    </div>
                </div>
                <div className="row">
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <GamesList />
                    </div>
                    <div className="col-sm-4">
                        <div className="card bg-secondary mb-4 text-center">
                            <div className="card-body px-4 py-5">
                                <img src={iconGuaranteed} alt="" data-aos="fade-down"/>
                                <h5 className="mb-2 mt-3">Guarantee</h5>
                                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non massa turpis. In non bibendum erat. Duis pulvinar vulputate ligula a rhoncus.</small>
                            </div>
                        </div>
                        <div className="card bg-secondary text-center">
                            <div className="card-body px-4 py-5">
                                <img src={iconSecurity} alt="" data-aos="fade-down" />
                                <h5 className="mb-2 mt-3">Security</h5>
                                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non massa turpis. In non bibendum erat. Duis pulvinar vulputate ligula a rhoncus.</small>
                            </div>
                        </div>
                    </div>
                </div>
                <AboutUs/>
                <CallToAction/>

            </div>
            <Footer/>
            {/* <Link to={"/login"}>Login</Link>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <img src={image} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default HomePage;

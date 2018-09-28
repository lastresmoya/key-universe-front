import React from 'react';
import { Link } from 'react-router-dom';

import FaIcon from '@fortawesome/react-fontawesome';
import { 
    faAngleLeft ,
    faMinus, 
    faPlus 
} from '@fortawesome/fontawesome-free-solid';

import thumbLg from './assets/thumb-lg.png';
import thumby1 from './assets/thumb-sm-1.png';
import thumby2 from './assets/thumb-sm-2.png';
import thumby3 from './assets/thumb-sm-3.png';
import thumby4 from './assets/thumb-sm-4.png';
import thumby5 from './assets/thumb-sm-5.png';

import UserAvatar from '../../components/UserAvatar';
import Badges from '../../components/Badges';
import SellersList from '../../components/SellersList';
import ProductFeatures from './ProductFeatures';
import ProductDetails from './ProductDetails';
import SystemRequirements from './SystemRequirements';

function ProductPage(props) {
    return (
        <div>
            <div className="container">
                <div className="row py-4">
                    <div className="col">
                        <Link to={'/'} className="btn-link font-spacing"><small><FaIcon icon={faAngleLeft} /> GO BACK TO THE MAIN PAGE</small></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5">
                        <img src={thumbLg} className="img-fluid shadow-lg mb-4" alt="" data-aos="fade" />
                        <div className="d-flex justify-content-between align-items-center">
                            <img src={thumby1} alt="" className="clickable" />
                            <img src={thumby2} alt="" className="clickable" />
                            <img src={thumby3} alt="" className="clickable" />
                            <img src={thumby4} alt="" className="clickable" />
                            <img src={thumby5} alt="" className="clickable" />
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="row">
                            <div className="col-sm-8">
                                <h1>The Witcher 3: Wild Hunt</h1>
                                <small className="font-weight-light"><i>Windows International Release</i></small>
                                <UserAvatar/>
                                <Badges size="sm"/>
                            </div>
                            <div className="col-sm-4">
                                <p className="h1">€10.70</p>
                                <small>Includes donation for developers studio <strong>€3.00</strong></small>
                                <div className="mb-3 mt-4">
                                    <span className="font-weight-bold">AVAILABLE KEYS</span>
                                    <div className="d-flex align-items-end mb-4 mt-3">
                                        <button className="btn btn-sm btn-outline-light"><FaIcon icon={faMinus}/></button>
                                        <span className="mx-3 d-flex flex-column align-items-center">
                                            <small>QTY</small>
                                            <strong className="h6 m-0">2</strong>
                                        </span>
                                        <button className="btn btn-sm btn-outline-light"><FaIcon icon={faPlus}/></button>
                                    </div>
                                    <button data-aos="fade" className="mt-4 btn btn-block btn-primary btn-gradient font-spacing btn-lg"><small>ADD TO CART</small></button>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <p className="lead">DESCRIPTION</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi turpis, scelerisque in sapien eu, bibendum ultricies ipsum. Etiam urna nunc, vehicula ac mollis vitae, ullamcorper eget felis. Vestibulum dictum at metus id porttitor. Fusce ac blandit nisl. Pellentesque metus leo, sodales at accumsan et, ultrices vel lectus. In tincidun…</p>
                                <a className="btn-link" href="">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-5">  
                        
                        <ProductFeatures/>
                        <ProductDetails/>
                        <SystemRequirements/>
                        

                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-spacing font-weight-normal">CURRENT SELLERS</h4>
                        <p>Look who sells <strong>The Witcher3: Wild Hunt</strong> now</p>
                        <SellersList/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductPage
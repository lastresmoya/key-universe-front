import React from 'react';
import { Link } from 'react-router-dom';

import FaIcon from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/fontawesome-free-solid';

import thumbLg from './assets/thumb-lg.png';
import thumby1 from './assets/thumb-sm-1.png';
import thumby2 from './assets/thumb-sm-2.png';
import thumby3 from './assets/thumb-sm-3.png';
import thumby4 from './assets/thumb-sm-4.png';
import thumby5 from './assets/thumb-sm-5.png';

import UserAvatar from '../../components/UserAvatar';
import Badges from '../../components/Badges';

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
                            <img src={thumby1} alt="" />
                            <img src={thumby2} alt="" />
                            <img src={thumby3} alt="" />
                            <img src={thumby4} alt="" />
                            <img src={thumby5} alt="" />
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5">

                    </div>
                    <div className="col-sm-7">

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductPage
import React from "react";
import { Link } from 'react-router-dom';
import ProfileMain from '../';
import CustomSelect from '../../../components/Forms/CustomSelect';
import GameCard from '../../../components/GameCard';
import Pagination from '../../../components/Navigation/Pagination';

import FaIcon from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid';


function MyOffers(props) {
    return (
        <ProfileMain>
            <h4>My Offers</h4>
            <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                    <a className="nav-link active" href="/">ACTIVE</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">ARCHIVE</a>
                </li>
            </ul>
            <div className="row">
                <div className="col-sm-4 ml-auto">
                    <CustomSelect label="Sort By" opts={["A-Z", "Z-A"]} />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 col-6">
                    <Link to={'/profile/offers/new'} className="game-card">
                        <div className="game-card-top mb-2" >
                            <div className="game-card-link">
                                <span className="card-link-icon"><FaIcon icon={faPlus} /></span>
                                <div>Create <div className="w-100"></div>new offer</div>
                                {/* <div className="lower d-flex align-items-center justify-content-end">
                                    <span className="h5 m-0">
                                        <span className="badge badge-light">Create New Offer</span>
                                    </span>
                                </div> */}
                            </div>
                        </div>
                    </Link>
                </div>
                <GameCard type={'offer'} user detail="2 key(s)"/>
                <GameCard type={'offer'} user detail="5 key(s)"/>
                <GameCard type={'offer'} user detail="6 key(s)"/>
                <GameCard type={'offer'} user detail="8 key(s)"/>
                <GameCard type={'offer'} user detail="5 key(s)"/>
                <GameCard type={'offer'} user detail="3 key(s)"/>
                <GameCard type={'offer'} user detail="1 key(s)"/>
            </div>
            <Pagination/>


        </ProfileMain>
    );
}

export default MyOffers;

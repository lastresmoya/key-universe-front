import React from "react";
import { Link } from 'react-router-dom';
import ProfileMain from '../../';
import BtnLink from '../../../../components/Buttons/BtnLink';
import gameImg from '../../../../components/GameCard/GameCardImg/assets/game-thumbnail.png';
import DescriptionItem from '../../../../components/DescriptionItem';
import KeysDetail from './KeysDetail';

function ProfileDetail(props) {
    return (
        <ProfileMain>
            <div>
                <div className="d-flex align-items-center justify-content-between">
                    <h4>Offer #000292</h4>
                    <Link to={"/profile/offers/my-offers"}>
                        <BtnLink content="Close Offer"/>
                    </Link>
                </div>
                <div className="d-flex align-items-start justify-content-start py-3">

                    <div className="col-sm-3 p-0 mr-3">
                        <img src={gameImg} alt="" className="img-fluid rounded shadow-lg" data-aos="fade" />
                    </div>
                    <div className="w-100 py-2">
                        <DescriptionItem title="Game" desc="The Witcher 3: Wild Hunt" />
                        <DescriptionItem title="Region" desc="International release" />
                        <div className="py-3"></div>
                        <DescriptionItem title="Price" desc="€12.00" />
                        <DescriptionItem title="Donation" desc="€3.00" />
                    </div>
                </div>
                <h5 className="font-weight-normal font-spacing py-3">KEYS:</h5>
                <KeysDetail value="4646-6235-4823-6236" status="In Selling"/>
                <KeysDetail value="4646-6235-4823-6236" status="In Selling"/>
                <KeysDetail value="4646-6235-4823-6236" status="Valid"/>
                <KeysDetail value="4646-6235-4823-6236" status="Invalid"/>
                <KeysDetail value="4646-6235-4823-6236" status="Invalid"/>

                <h5 className="font-weight-normal font-spacing py-3">UPLOADED DOCUMENTS:</h5>
                <p>
                    Proof Invoice 1.png <br/>
                    Proof Invoice for keys 2-3.pdf <br />
                    Proof Invoice for keys 4.pdf <br />
                    Proof Invoice for fallout - new vegas part1.jpg
                </p>


            </div>


        </ProfileMain>
    );
}

export default ProfileDetail;

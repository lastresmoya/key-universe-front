import React from "react";
import { Link } from 'react-router-dom';
import ProfileMain from '../../';
import DescriptionItem from '../../../../components/DescriptionItem';
import Badges from '../../../../components/Badges';
import BtnPrimaryOutline from '../../../../components/Buttons/BtnPrimaryOutline';
import UserAvatar from '../../../../components/Avatars/UserAvatar';
import Breadcrumbs from '../../../../components/Navigation/Breadcrumbs';
import gameImg from '../../../../components/GameCard/GameCardImg/assets/game-thumbnail.png';
import ModalDefault from '../../../../components/Modals/ModalDefault';

function PurchaseDetail(props) {

    const KeysContent = () => {
        return (
            <div className="py-4">
                <div className="d-flex align-items-center justify-content-start py-2">
                    <div className="font-weight-bold">Key 1:</div>
                    <div className="ml-3">3466-2467-4632-6743</div>
                    <div className="ml-auto">
                        <BtnPrimaryOutline content="Report Issue" size={"sm"} />
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-start py-2">
                    <div className="font-weight-bold">Key 2:</div>
                    <div className="ml-3">3466-2467-4632-6743</div>
                    <div className="ml-auto">
                        <BtnPrimaryOutline content="Report Issue" size={"sm"} />
                    </div>
                </div>
            </div>
        )
    }
    const modalKeys = {
        id: "product-keys",
        title: "Keys",
        type: "default",
        content: <KeysContent/>,
        // link: "/profile/offers/my-offers"
    }
    return (
        <ProfileMain>
            <Link to={"/profile/purchases"}>
                <Breadcrumbs content="Go back to my purchases" />
            </Link>
            <h4>Purchase #1001</h4>
            <div className="d-flex align-items-start justify-content-start py-3">
                
                <div className="col-sm-3 p-0 mr-3">
                    <img src={gameImg} alt="" className="img-fluid rounded shadow-lg" data-aos="fade" />
                </div>
                <div className="w-100 py-2">
                    <DescriptionItem title="Game" desc="The Witcher 3: Wild Hunt" />
                    <DescriptionItem title="Region" desc="International release" />
                    <DescriptionItem title="Seller" desc="Captain_Peroxide" />
                    <DescriptionItem title="Date" desc="11/07/2018" />
                    <DescriptionItem title="Price" desc="€12.00" />
                    <DescriptionItem title="Donation" desc="€3.00" />
                </div>
            </div>
            <h5 className="font-weight-normal font-spacing py-3">SOLD BY:</h5>
            <div className="d-flex align-items-center jutify-content-start">
                <UserAvatar size="md"/>
                <div className="ml-4">
                    <i>50 transactions</i>
                    <div className="mt-2">
                        <Badges />
                    </div>
                </div>
            </div>
            
            <div data-toggle="modal" data-target={`#${modalKeys.id}Modal`} className="py-3">
                <BtnPrimaryOutline content="View Product Keys" />
            </div>
            <ModalDefault
                type={modalKeys.type}
                id={modalKeys.id}
                title={modalKeys.title}
                content={modalKeys.content}
                link={modalKeys.link}
            />

        </ProfileMain>
    );
}



export default PurchaseDetail;

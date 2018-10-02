import React from 'react';
import Badges from '../../../components/Badges';
import DescriptionItem from '../../../components/DescriptionItem';
import AvatarImg from '../../../components/Avatars/AvatarImg';
import BtnPrimaryOutline from '../../../components/Buttons/BtnPrimaryOutline';
import ProfileMain from '../';
import FaIcon from '@fortawesome/react-fontawesome';
import { 
    faUsers,
    faLock,
    faEnvelope,
    faSignOutAlt,
 } from '@fortawesome/fontawesome-free-solid';


function General (props) {
    return(
        <ProfileMain>
            <h4>General Info</h4>
            <div className="d-flex align-items-center mt-4">
                <AvatarImg />
                <div className="mx-3">
                    <Badges size="sm" />
                </div>
                <div className="ml-auto">
                    <BtnPrimaryOutline content="EDIT" />
                </div>
            </div>
            <div className="row my-4">
                <div className="col">
                    <DescriptionItem title="User nickname" desc="Raider" />
                    <DescriptionItem title="Full name" desc="http://steamcommunity.com/1234567891011121314…" />
                    <DescriptionItem title="Email" desc="smith-t1325@gmail.com" />
                    <DescriptionItem title="Phone number" desc="(000) 000-0000" />
                </div>
            </div>
            <h4 className="font-spacing font-weight-normal mt-4 mb-3">ACTIONS</h4>
            <p className="font-weight-bold">
                <span className="mr-4"><FaIcon icon={faUsers} /> PUBLIC PROFILE</span>
                <span className="mr-4"><FaIcon icon={faLock} /> CHANGE PASSWORD</span>
            </p>
            <p className="font-weight-bold">
                <span className="mr-4"><FaIcon icon={faEnvelope} /> CHANGE EMAIL</span>
                <span className="mr-4"><FaIcon icon={faSignOutAlt} /> LOGOUT</span>
            </p>
        </ProfileMain>
    )
}

export default General;
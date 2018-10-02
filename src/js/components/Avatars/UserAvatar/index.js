import React from 'react';
import avatar from './assets/avatar.png';
import FaIcon from '@fortawesome/react-fontawesome';
import {
    faGem
} from '@fortawesome/fontawesome-free-solid';


function UserAvatar (props) {
    return(
        <div className="py-1 d-flex justify-content-start align-items-center">
            <img src={avatar} alt="" className="mr-2" />
            <div className="d-flex flex-column">
                <small className="text-white">CAPTAIN_PEROXIDE</small>
                <small className="text-info">
                    <FaIcon icon={faGem} className="mr-1" />
                    <FaIcon icon={faGem} className="mr-1" />
                    <FaIcon icon={faGem} />
                </small>
            </div>
        </div>
    )
    
}

export default UserAvatar;
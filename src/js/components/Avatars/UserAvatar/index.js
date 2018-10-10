import React from 'react';
import AvatarImg from '../AvatarImg';
import FaIcon from '@fortawesome/react-fontawesome';
import {
    faGem
} from '@fortawesome/fontawesome-free-solid';



function UserAvatar ({size}) {
    return(
        <div className="py-1 d-flex justify-content-start align-items-center">
            <div className="mr-3">
                <AvatarImg size={size}/>
            </div>
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
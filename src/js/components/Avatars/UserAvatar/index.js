import React from 'react';
import AvatarImg from '../AvatarImg';
import FaIcon from '@fortawesome/react-fontawesome';
import {
    faGem
} from '@fortawesome/fontawesome-free-solid';



function UserAvatar(props, { size }) {
    const user = props.mainUserData;
    let levelIcons = [],
    i;

    if (user) {
        const level = user.level;

        for (i = 0; i < level; i = i + 1) {
            levelIcons.push(
                <FaIcon icon={faGem} className="mr-1" key={i} />
            );
        };
    }

    return (
        <div className="py-1 d-flex justify-content-start align-items-center">
            <div className="mr-3">
                <AvatarImg size={size} />
            </div>
            <div className="d-flex flex-column">
                <small className="text-white">{user ? user.username : 'DEFAULT_USER'}</small>
                <small className="text-info">
                    {user && 
                        levelIcons
                    }
                </small>
            </div>
        </div>
    )

}

export default UserAvatar;

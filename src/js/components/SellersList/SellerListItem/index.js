import React from 'react';
import Badges from '../../../components/Badges';
import avatarImg from '../../Avatars/AvatarImg/assets/avatar-xs.png';
import FaIcon from '@fortawesome/react-fontawesome';
import {
    faGem
} from '@fortawesome/fontawesome-free-solid';

function SellerListItem(props) {
    const seller = props.sellerInfo;
    const level = seller.user_level;

    let levelIcons = [],
        i;

    for(i = 0; i < level; i = i + 1) {
        levelIcons.push(
            <FaIcon icon={faGem} className="mr-1" key={i}/>
        );
    };

    return (
        <tr data-aos="fade-up">
            <th scope="row">
                <img src={seller.profile_pic} alt="" className="mr-2"/>{seller.username}
                {seller.donation &&
                    <small className="ml-2 d-block">{seller.username + ' is giving away ' + seller.donation_percent +'% to charity with this sale!'}</small>
                }
            </th>
            <td className="text-info">
                {levelIcons}
            </td>
            <td>{seller.user_sold_keys}</td>
            <td>
                <Badges size="sm" badges={seller.badges}/>
            </td>
            <td>
                <span className="h5 m-0">
                    <span className="badge badge-light p-1">€{seller.price}</span>
                </span>
            </td>
        </tr>
    )
}

export default SellerListItem;
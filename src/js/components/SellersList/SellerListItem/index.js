import React from 'react';
import Badges from '../../../components/Badges';
import avatarImg from '../../Avatars/AvatarImg/assets/avatar-xs.png';
import FaIcon from '@fortawesome/react-fontawesome';
import {
    faGem
} from '@fortawesome/fontawesome-free-solid';


function SellerListItem(props) {
    return (
        <tr data-aos="fade-up">
            <th scope="row">
                <img src={avatarImg} alt="" className="mr-2"/>Dale
            </th>
            <td className="text-info">
                <FaIcon icon={faGem} className="mr-1"/>
                <FaIcon icon={faGem} className="mr-1"/>
                <FaIcon icon={faGem} />
            </td>
            <td>59</td>
            <td><Badges size="sm"/></td>
            <td>
                <span className="h5 m-0">
                    <span className="badge badge-light p-1">€30.00</span>
                </span>
            </td>
        </tr>
    )
}

export default SellerListItem;
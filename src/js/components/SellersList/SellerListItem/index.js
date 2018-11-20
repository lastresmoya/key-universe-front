import React from 'react';
import Badges from '../../../components/Badges';
import avatarImg from '../../Avatars/AvatarImg/assets/avatar-xs.png';
import FaIcon from '@fortawesome/react-fontawesome';
import {
    faGem
} from '@fortawesome/fontawesome-free-solid';

function SellerListItem(props) {
    const level = props.level;
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
                <img src={props.image} alt="" className="mr-2"/>{props.name}
            </th>
            <td className="text-info">
                {levelIcons}
            </td>
            <td>{props.soldKeys}</td>
            <td><Badges size="sm"/></td>
            <td>
                <span className="h5 m-0">
                    <span className="badge badge-light p-1">€{props.price}</span>
                </span>
            </td>
        </tr>
    )
}

export default SellerListItem;
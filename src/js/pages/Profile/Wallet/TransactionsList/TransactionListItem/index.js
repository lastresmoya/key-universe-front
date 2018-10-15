import React from 'react';
import avatarImg from '../../../../../components/Avatars/AvatarImg/assets/avatar-xs.png';

function TransactionListItem(props) {
    return (
        <tr data-aos="fade-up">
            <th scope="row">08/07/2018</th>
            <td>€10.00</td>
            <td>
                <img src={avatarImg} alt="" className="mr-2"/>Dale
            </td>
            <td>Dark Souls III</td>
        </tr>
    )
}

export default TransactionListItem;
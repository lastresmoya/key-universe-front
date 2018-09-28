import React from 'react';
import Counter from '../../../components/Counter';
import Badges from '../../../components/Badges';
import UserAvatar from '../../../components/UserAvatar';
import gameThumb from './assets/thumb-order.png';

import FaIcon from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';



function OrderListItem(props) {
    return (
        <div className="order-list-item d-flex justify-content-start align-items-center" data-aos="fade-up">
            <img src={gameThumb} alt=""/>
            <div className="col-3 d-flex flex-column">
                <small><strong>The Witcher 3: Wild Hunt</strong></small>
                <small><i>Action role-playing. Adventure, Fa...</i></small>
            </div>
            <div className="col-2">
                <UserAvatar/>
            </div>
            <div className="col-2">
                <Badges size="sm"/>
            </div>
            <div className="col-auto">
                <div className="px-2"><Counter/></div>
            </div>
            <div className="col-2 text-center">
                <span className="h3 m-0">
                    <span className="badge badge-light p-1 "><small className="font-weight-bold">€30.00</small></span>
                </span>
            </div>
            <div className="ml-auto mr-2">
                <div className="text-white clickable h3 m-0 p-2"><FaIcon icon={faTimes}/></div>
            </div>

        </div>
    )
}

export default OrderListItem;
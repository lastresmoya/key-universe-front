import React, { Component } from 'react';
import gameThumb from './assets/game-thumb.png';

class GameListItem extends Component {
    state = {

    }
    render(){
        return (
            <div className="d-flex align-items-center justify-content-between py-2" data-aos="fade">
                <img src={gameThumb} alt="" />
                <div className="w-50">
                    <h5 className=" m-0">Dark Souls III</h5>
                    <small className="font-weight-light"><i>Action role-playing</i></small>
                </div>
                <span className="h5 m-0">
                    <span className="badge badge-light">€30.00</span>
                </span>
                <small className="text-primary font-spacing mr-2">VIEW DETAILS</small>
            </div>
        )
    }
}

export default GameListItem;
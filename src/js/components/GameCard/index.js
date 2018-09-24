import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import thumb from './assets/game-thumbnail.png';
import avatar from './assets/avatar.png';
import iconGivingGame from './assets/icon-giving-game.png';
import FaIcon from '@fortawesome/react-fontawesome';
import { 
    faApple,
    faWindows,
    faLinux
} from '@fortawesome/fontawesome-free-brands';
import {
    faGem
} from '@fortawesome/fontawesome-free-solid';

class GameCard extends Component {
    state = {
        profileView: 'personal'
    }
    render () {
        return (
            <div className="col-sm-3 col-6">
                <Link to={'/product'} className="game-card">
                    <div className="game-card-top" data-aos="fade-up">
                        <div className="game-card-img">
                            <div className="upper d-flex align-items-center justify-content-end">
                                <span className="badge badge-pill badge-light mr-2"><FaIcon icon={faApple} /></span>
                                <span className="badge badge-pill badge-light mr-2"><FaIcon icon={faWindows} /></span>
                                <span className="badge badge-pill badge-light"><FaIcon icon={faLinux} /></span>
                            </div>
                            <div className="lower d-flex align-items-center justify-content-end">
                                <img src={iconGivingGame} alt="" className="mr-2" />
                                <span className="h5 m-0">
                                    <span className="badge badge-light">€30.00</span>
                                </span>
                            </div>
                            <img src={thumb} alt="" />
                        </div>
                    </div>
                    <div className="game-card-body d-flex justify-content-start align-items-center">
                        <img src={avatar} alt="" className="mr-2" />
                        <div className="d-flex flex-column">
                            <small>CAPTAIN_PEROXIDE</small>
                            <small className="text-info">
                                <FaIcon icon={faGem} className="mr-1" />
                                <FaIcon icon={faGem} className="mr-1" />
                                <FaIcon icon={faGem} />
                            </small>
                        </div>
                    </div>
                    <div className="game-card-footer">
                        <h5>Dark Souls III</h5>
                        <small className="font-style-italic">Action role-playing</small>
                    </div>
                </Link>

            </div>
        )
    }
}

export default GameCard;


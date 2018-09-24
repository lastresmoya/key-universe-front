import React from 'react';
import { Link } from 'react-router-dom';
import thumb from './assets/game-thumbnail.png';
import FaIcon from '@fortawesome/react-fontawesome';
import { 
    faApple,
    faWindows,
    faLinux
} from '@fortawesome/fontawesome-free-brands';


function GameListItem (props) {
    return(
        <div className="col-sm-3 col-6">
            <Link to={'/product'} className="game-card">
                <div className="game-card-top" data-aos="fade">
                    <div className="game-card-img">
                        <div className="upper">
                            <span className="badge badge-pill badge-light"><FaIcon icon={faApple} /></span>
                            <span className="badge badge-pill badge-light"><FaIcon icon={faWindows} /></span>
                            <span className="badge badge-pill badge-light"><FaIcon icon={faLinux} /></span>
                        </div>
                        <div className="lower">
                            <FaIcon icon={faApple} />
                        </div>
                        <img src={thumb} alt="" />
                    </div>
                </div>
                <div className="game-card-body d-flex justify-content-start align-items-center">
                    avatar 
                    <div>
                        <small>CAPTAIN_PEROXIDE</small>
                        Some Icon
                    </div>
                    
                </div>
            </Link>

        </div>
    )
}

export default GameListItem;


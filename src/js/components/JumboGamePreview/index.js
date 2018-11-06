import React from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from '../Avatars/UserAvatar';
import iconGivingGame from './assets/icon-giving-game.png';
import gameThumbLg from './assets/game-thumb-large.png';
import gameThumb1 from './assets/game-thumb-1.png';
import gameThumb2 from './assets/game-thumb-2.png';
import gameThumb3 from './assets/game-thumb-3.png';

function JumboGamePreview (props) {
    return(
        <div className="d-flex align-items-center mt-5 mb-3 w-100">
            <div className="col-9 h-100 d-flex flex-column align-items-center justify-content-between">
                    <div className="game-card jumbo-card">
                        {/*  */}
                        <Link to={'/product'}>

                        <div className="game-card-top mb-2" >
                            <div className="game-card-img">
                                <div className="lower d-flex align-items-center justify-content-between">
                                    <div>
                                        <UserAvatar />
                                        <h2 className="h1 m-0 text-white">Dark Souls III</h2>
                                        <p className="font-weight-light text-white"><i>Action role-playing</i></p>
                                    </div>
                                    <div>
                                        <img src={iconGivingGame} alt="" className="mr-2" />
                                        <span className="h2 m-0">
                                            <span className="badge badge-light">€30.00</span>
                                        </span>
                                    </div>
                                </div>
                                <img src={gameThumbLg} alt="" />
                            </div>
                        </div>
                    </Link>

                    </div>
            </div>
            <div className="col-3 h-100 d-flex flex-column justify-content-between align-items-center">
                <Link to={'/product'}><img src={gameThumb1} alt="" className=" clickable shadow-lg" data-aos="fade" data-aos-delay="200" /></Link>
                <Link to={'/product'}><img src={gameThumb2} alt="" className=" clickable shadow-lg mt-auto mb-auto" data-aos="fade" data-aos-delay="400" /></Link>
                <Link to={'/product'}><img src={gameThumb3} alt="" className=" clickable shadow-lg" data-aos="fade" data-aos-delay="600" /></Link>
            </div>
        </div>
    )
}

export default JumboGamePreview;
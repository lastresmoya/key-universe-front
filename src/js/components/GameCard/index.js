import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from '../Avatars/UserAvatar';
import GameCardImg from './GameCardImg';

class GameCard extends Component {
    state = {
        fadeDelay: Math.ceil((Math.floor(Math.random() * 400) + 0)/100)*100 ,
    }
    render () {
        return (
            <div className="col-sm-3 col-6">
                <Link to={'/product'} className="game-card">
                    <div data-aos="fade" data-aos-delay={this.state.fadeDelay}>
                        <GameCardImg />
                    </div>
                    {this.props.size === "sm" ? null : <UserAvatar/> }
                    <div className="game-card-footer pt-2">
                        <h5 className="m-0">{this.props.title || "Dark Souls III"}</h5>
                        <small className="font-weight-light"><i>{this.props.detail || "Action role-playing"}</i></small>
                    </div>
                </Link>

            </div>
        )
    }
}

export default GameCard;


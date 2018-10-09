import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from '../Avatars/UserAvatar';
import GameCardImg from './GameCardImg';

class GameCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            fadeDelay: Math.ceil((Math.floor(Math.random() * 400) + 0) / 100) * 100,
        }
        this.linkTo = this.linkTo.bind(this);
    }
    
    linkTo(){
        if(this.props.type === "offer"){
            return '/profile/offer/1'
        } else {
            return '/product'
        }
    }
    render () {
        console.log(this.props)
        // cont linkTo = this.props.
        return (
            <div className="col-sm-3 col-6">
                <Link to={this.linkTo()} className="game-card">
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


import React, { Component } from 'react';
import avatarSm from './assets/avatar-sm.png';
import avatarMd from './assets/avatar-md.png';

class AvatarImg extends Component {
    constructor(props){
        super(props);
    }
    
    renderAvatar() {
        // console.log(this.props);
        if (!this.props.size) {
            return <img src={avatarSm} alt="" />
        } else {
            if (this.props.size === "md") {
                return <img src={avatarMd} alt="" /> 
            }
        }
    }
    render(){
        return (
            this.renderAvatar(this.props)
        )
    }
}

export default AvatarImg;
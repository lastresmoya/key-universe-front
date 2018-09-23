import React from 'react';
import { Link } from 'react-router-dom';

function UserProfile (props){
    return(
        <div>
            Public Profile
            <Link to={'/'}>Home</Link>
        </div>
    )
}

export default UserProfile
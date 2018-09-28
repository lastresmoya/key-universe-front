import React from 'react';
import iconRespect from './assets/icon-respect.png';
import iconTrust from './assets/icon-trust.png';
import iconVerified from './assets/icon-verified.png';

function Badges (props) {
    return(
        <div>
            {props.size === "md" && 
                <ul className="list-unstyled">
                    <li className="d-flex align-items-center py-1"><img className="mr-3" src={iconRespect} alt="" />Respected</li>
                    <li className="d-flex align-items-center py-1"><img className="mr-3" src={iconTrust} alt="" />Trusted</li>
                    <li className="d-flex align-items-center py-1"><img className="mr-3" src={iconVerified} alt="" />Verified</li>
                </ul>
            }
            {props.size === "sm" &&
                <ul className="list-inline m-0">
                    <li className="list-inline-item"><img src={iconRespect} alt="" /></li>
                    <li className="list-inline-item"><img src={iconTrust} alt="" /></li>
                    <li className="list-inline-item"><img src={iconVerified} alt="" /></li>
                </ul>
            }
        </div>
    )
}

export default Badges;
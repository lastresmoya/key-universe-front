import React from 'react';
import iconRespect from './assets/icon-respect.png';
import iconTrust from './assets/icon-trust.png';
import iconVerified from './assets/icon-verified.png';

const iconStyle = {
    height: '1.5rem',

}

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
            { props.size === "sm" &&
                <ul className="list-inline m-0">
                    <li className="list-inline-item mr-3"><img src={iconRespect} alt=""style={iconStyle} /></li>
                    <li className="list-inline-item mr-3"><img src={iconTrust} alt="" style={iconStyle}/></li>
                    <li className="list-inline-item"><img src={iconVerified} alt="" style={iconStyle}/></li>
                </ul>
            }
            {!props.size &&
                <ul className="list-inline m-0">
                    <li className="list-inline-item mr-3"><img src={iconRespect} alt="" style={iconStyle}/></li>
                    <li className="list-inline-item mr-3"><img src={iconTrust} alt="" style={iconStyle}/></li>
                    <li className="list-inline-item"><img src={iconVerified} alt="" style={iconStyle}/></li>
                </ul>
            }
        </div>
    )
}

export default Badges;
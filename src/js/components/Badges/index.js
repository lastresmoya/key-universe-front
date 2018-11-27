import React from 'react';
import iconRespect from './assets/icon-respect.png';
import iconTrust from './assets/icon-trust.png';
import iconVerified from './assets/icon-verified.png';

const iconStyle = {
    height: '1.5rem',

}

function Badges (props) {
    const badges = props.badges;
    
    return(
        <div>
            {props.size === "md" && badges &&
                <ul className="list-unstyled">
                {badges.respected &&
                    <li className="d-flex align-items-center py-1"><img className="mr-3" src={iconRespect} alt="" />Respected</li>
                }
                {badges.trusted &&
                    <li className="d-flex align-items-center py-1"><img className="mr-3" src={iconTrust} alt="" />Trusted</li>
                }
                {badges.verified &&
                    <li className="d-flex align-items-center py-1"><img className="mr-3" src={iconVerified} alt="" />Verified</li>
                }
                </ul>
            }
            { props.size === "sm" && badges &&
                <ul className="list-inline m-0">
                    {badges.respected &&
                        <li className="list-inline-item mr-3"><img src={iconRespect} alt=""style={iconStyle} /></li>
                    }
                    {badges.trusted &&
                        <li className="list-inline-item mr-3"><img src={iconTrust} alt="" style={iconStyle}/></li>
                    }
                    {badges.verified &&
                        <li className="list-inline-item"><img src={iconVerified} alt="" style={iconStyle}/></li>
                    }
                </ul>
            }
            {!props.size && badges &&
                <ul className="list-inline m-0">
                    {badges.respected &&
                        <li className="list-inline-item mr-3"><img src={iconRespect} alt="" style={iconStyle}/></li>
                    }
                    {badges.trusted &&
                        <li className="list-inline-item mr-3"><img src={iconTrust} alt="" style={iconStyle}/></li>
                    }
                    {badges.verified &&
                        <li className="list-inline-item"><img src={iconVerified} alt="" style={iconStyle}/></li>
                    }
                </ul>
            }
        </div>
    )
}

export default Badges;
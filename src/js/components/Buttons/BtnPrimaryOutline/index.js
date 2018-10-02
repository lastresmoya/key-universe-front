import React from 'react';

function BtnPrimaryOutline({content}) {
    return (
        <button className="btn btn-outline-primary px-4 font-spacing">
            <small className="font-weight-bold">{content}</small>
        </button>
    )
}

export default BtnPrimaryOutline;
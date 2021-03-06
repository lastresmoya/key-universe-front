import React from 'react';

function BtnPrimary({content}) {
    return (
        <button className="btn px-5 btn-primary btn-gradient font-spacing btn-lg text-uppercase">
            <small>{content}</small>
        </button>

    )
}

export default BtnPrimary;
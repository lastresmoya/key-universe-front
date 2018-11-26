import React from 'react';

function ProductFeatures (props) {
    const features = props.features;
    return(
        <section className="mb-5">
            <ul className="list-unstyled">
                <li className="lead">GAME FEATURES</li>
                <li className="my-3">{features.multiplayer ? 'multiplayer' : 'Single player'}</li>
                <li className="my-3">{features.achievements ? 'Achievements' : ''}</li>
                <li className="my-3">{features.controller ? 'Controller Support' : ''}</li>
                <li className="my-3">{features.cloud ? 'Cloud Saves' : ''}</li>
                <li className="my-3">{features.cloud ? 'Via Steam' : ''}</li>
            </ul>
        </section>
    )
}

export default ProductFeatures;
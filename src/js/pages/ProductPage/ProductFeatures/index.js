import React from 'react';

function ProductFeatures (props) {
    const features = props.features;
    return(
        <section className="mb-5">
            <ul className="list-unstyled">
                <li className="lead">GAME FEATURES</li>
                <li className="my-3">Icon Single Player</li>
                <li className="my-3">Icon Achievements</li>
                <li className="my-3">Icon Controller Support</li>
                <li className="my-3">Icon Cloud Saves</li>
                <li className="my-3">Icon Via Steam</li>
            </ul>
        </section>
    )
}

export default ProductFeatures;
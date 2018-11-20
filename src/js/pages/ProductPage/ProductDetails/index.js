import React from 'react';

function ProductDetails (props) {
    const game = props.details;
    // const sellers = props.sellers;
    // console.log('here!!!! ' + sellers);

    return (
        <section className="mb-5">
            <p className="lead">GAME DETAILS</p>
            <dl className="row">
                <dt className="col-sm-3">Genre:</dt>
                <dd className="col-sm-9">{game.genre}</dd>
                <dt className="col-sm-3">Platforms:</dt>
                <dd className="col-sm-9">{game.platform}</dd>
                <dt className="col-sm-3">Languages:</dt>
                <dd className="col-sm-9">{game.languages}</dd>
                <dt className="col-sm-3">Released:</dt>
                <dd className="col-sm-9">{game.released}</dd>
                <dt className="col-sm-3">Company:</dt>
                <dd className="col-sm-9">{game.company}</dd>
                <dt className="col-sm-3">Rating:</dt>
                <dd className="col-sm-9">{game.rating}</dd>
            </dl>
        </section>
    )
}

export default ProductDetails;
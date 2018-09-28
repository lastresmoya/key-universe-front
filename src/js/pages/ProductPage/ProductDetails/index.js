import React from 'react';

function ProductDetails (props) {
    return (
        <section className="mb-5">
            <p className="lead">GAME DETAILS</p>
            <dl className="row">
                <dt className="col-sm-3">Genre:</dt>
                <dd className="col-sm-9">Role-playing, Adventure, Fantasy</dd>
                <dt className="col-sm-3">Platforms:</dt>
                <dd className="col-sm-9">Windows (7, 8, 10)</dd>
                <dt className="col-sm-3">Languages:</dt>
                <dd className="col-sm-9">Audio and text: Portugués do Brasil, Deutsch, English, francais, olski. Text only: español, Español (AL), magyar, italiano, Türkçe</dd>
                <dt className="col-sm-3">Released:</dt>
                <dd className="col-sm-9">May 19, 2015</dd>
                <dt className="col-sm-3">Company:</dt>
                <dd className="col-sm-9">CD PROJEKT RED / CD PROJEKT RED</dd>
                <dt className="col-sm-3">Rating:</dt>
                <dd className="col-sm-9">PEGI Rating 18+ (with Bad Language, Violence)</dd>
            </dl>
        </section>
    )
}

export default ProductDetails;
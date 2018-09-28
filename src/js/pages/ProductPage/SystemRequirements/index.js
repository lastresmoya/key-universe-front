import React from 'react';

function SystemRequirements(props) {
    return (
        <section className="mb-5">
            <p className="lead">SYSTEM REQUIREMENTS</p>
            <dl className="row">
                <dt className="col-12 mb-3">Minimum system requirements:</dt>
                <dt className="col-sm-3">OS:</dt>
                <dd className="col-sm-9">64-bit Windows 7 or 64-bit Windows 8 (8.1)</dd>
                <dt className="col-sm-3">Processor:</dt>
                <dd className="col-sm-9">Intel CPU Core i5-2500K 3.3 GHz or AMD CPU Phenom II X4 940</dd>
                <dt className="col-sm-3">Memory:</dt>
                <dd className="col-sm-9">RAM 6 GB</dd>
                <dt className="col-sm-3">Graphics:</dt>
                <dd className="col-sm-9">Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870</dd>
                <dt className="col-sm-3">Hard Drive:</dt>
                <dd className="col-sm-9">35 GB of available space</dd>
                <dt className="col-sm-3">DirectX</dt>
                <dd className="col-sm-9">11</dd>
            </dl>
        </section>
    )
}

export default SystemRequirements;
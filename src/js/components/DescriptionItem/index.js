import React from 'react';

function DescriptionItem({title,desc}) {
    return (
        <dl className="row mb-0">
            <dt className="col-3">{title}:</dt>
            <dd className="col-9">{desc}</dd>
        </dl>
    )
}

export default DescriptionItem;
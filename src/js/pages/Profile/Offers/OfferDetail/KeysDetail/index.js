import React from "react";
import DescriptionItem from '../../../../../components/DescriptionItem';

function KeysDetail({value,status}) {
    const renderStatusStyle = () => {

        if(status){
            switch (status) {
                case "In Selling":
                    return "badge-primary";
                case "Valid":
                    return "badge-success";
                case "Invalid":
                    return "badge-danger";
                default:
                    return "badge-secondary";
            }
        } else {
            return "badge-secondary";
        }
        
    }
    return (
        <div>
            <div className="d-flex align-items-start justify-content-between">
                <div className="w-100">
                    <DescriptionItem title={`Key`} desc={value} />
                    <DescriptionItem title={`Buyer`} desc={'Raider'} />
                    <DescriptionItem title={`Date`} desc={'12/07/2018'} />
                </div>
                <div className="col-auto">
                    <span className={`badge badge-pill px-3 ${renderStatusStyle()}`}>{status || "-"}</span>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default KeysDetail;

import React from "react";
import CustomInput from '../../../../../components/Forms/CustomInput';
import CustomSelect from '../../../../../components/Forms/CustomSelect';

function Step1 (props) {
    return (
        <div data-aos="fade">
            <h5 className="font-spacing font-weight-light">STEP 1: GENERAL INFORMATION</h5>
            <p>Choose general game information and key's quantity that you want to sell.</p>
            <div className="py-3">
                <div className="form-row">
                    <div className="col-sm-6">
                        <CustomInput label="Product Name" placeholder="Enter game name" />
                    </div>
                    <div className="col-sm-6">
                        <CustomSelect label="Region" opts={["US", "EU"]} placeholder="Choose game region" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Step1;

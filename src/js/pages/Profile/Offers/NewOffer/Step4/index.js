import React from "react";
import BtnPrimaryOutline from '../../../../../components/Buttons/BtnPrimaryOutline';
import ProgressBar from '../../../../../components/ProgressBar';
import FaIcon from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid';


function Step4(props) {
    return (
        <div data-aos="fade">
            <h5 className="font-spacing font-weight-light">STEP 4: UPLOAD DOCUMENTS</h5>
            <p>We want to be sure that the keys are valid and have been taken legal way. That's why we ask you to upload the Invoices & Proof of Purchase of each of your keys. You can upload png, jpg and pdf files.</p>
            
            <div className="py-3">
                <BtnPrimaryOutline content="UPLOAD DOCUMENT" />
                <div className="d-flex align-items-center mt-3">
                    <div className="w-100">
                        <ProgressBar label="Proof Invoice 1.png" progress={100}/>
                    </div>
                    <div className="p-4 clickable">
                        <span className="h4 m-0"><FaIcon icon={faTrashAlt} /></span>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="w-100">
                        <ProgressBar label="Proof Invoice for keys 2-3.pdf" progress={40} />
                    </div>
                    <div className="p-4 clickable">
                        <span className="h4 m-0"><FaIcon icon={faTrashAlt} /></span>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="w-100">
                        <ProgressBar label="Proof Invoice for keys 4.pdf" progress={24} />
                    </div>
                    <div className="p-4 clickable">
                        <span className="h4 m-0"><FaIcon icon={faTrashAlt} /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Step4;

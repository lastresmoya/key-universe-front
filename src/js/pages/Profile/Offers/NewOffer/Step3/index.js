import React from "react";
import CustomInput from '../../../../../components/Forms/CustomInput';
import BtnPrimaryOutline from '../../../../../components/Buttons/BtnPrimaryOutline';
import FaIcon from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid';


function Step3(props) {
    return (
        <div data-aos="fade">
            <h5 className="font-spacing font-weight-light">STEP 3: WORK WITH THE KEYS</h5>
            <p>Enter the keys below</p>
            <div className="py-3">
                <div className="d-flex align-items-center">
                    <div className="w-100">
                        <CustomInput label="THE KEY" placeholder="7898-8743-0098-8632"/>
                    </div>
                    <div className="mb-3 p-4 clickable">
                        <span className="h4 m-0"><FaIcon icon={faTrashAlt} /></span>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="w-100">
                        <CustomInput label="THE KEY" placeholder="7898-8743-0098-8632" />
                    </div>
                    <div className="mb-3 p-4 clickable">
                        <span className="h4 m-0"><FaIcon icon={faTrashAlt} /></span>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="w-100">
                        <CustomInput label="THE KEY" placeholder="7898-8743-0098-8632" />
                    </div>
                    <div className="mb-3 p-4 clickable">
                        <span className="h4 m-0"><FaIcon icon={faTrashAlt} /></span>
                    </div>
                </div>
                <div>
                    <BtnPrimaryOutline content="ADD NEW KEY"/>
                </div>
            </div>
        </div>
    );
}

export default Step3;

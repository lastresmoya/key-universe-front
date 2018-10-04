import React , { Component } from "react";
import { Link } from 'react-router-dom';
import BtnLink from '../../../../components/Buttons/BtnLink';
import BtnPrimary from '../../../../components/Buttons/BtnPrimary';
import ProfileMain from '../../';
import CheckoutFormModal from '../../../Checkout/_CheckoutFormModal';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

class NewOffer extends Component {
    constructor(props){
        super(props);
        this.state = {
            stepVal: 1,
            currentView: `Step1`,
        }
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);

    }
    prevStep(){
        this.setState({
            stepVal: this.state.stepVal - 1,
            currentView: `Step${this.state.stepVal - 1}`
        })
    }
    nextStep() {    
        // if (this.state.stepVal <= 4){
            this.setState({
                stepVal: this.state.stepVal + 1,
                currentView: `Step${this.state.stepVal + 1}`
            }) 
        // } 
    }
    render(){
        const { stepVal,currentView } = this.state;
        return (
            <ProfileMain>
                <div className="row">
                    <div className="col-sm-8">
                        Steppers
                        <h4 className="mb-4 ">Create new offer</h4>
                        {/* Steps Rendering */}
                        {{
                            Step1: <Step1 />,
                            Step2: <Step2 />,
                            Step3: <Step3 />,
                            Step4: <Step4 />,
                            Step5: <Step5 />,
                            default: <Step1 />
                        }[currentView]}

                        {/* Steps Navigation */}
                        <div className="d-flex align-items-center justify-content-end">
                            {currentView === "Step1" ?
                                <Link to={'/profile/offers/my-offers'} className="px-4">
                                    <BtnLink content="Cancel" />
                                </Link>
                                :
                                <div onClick={() => this.prevStep()} className="px-4">
                                    <BtnLink content="Back" />
                                </div>
                            }
                            {currentView !== "Step5" ?
                                <div onClick={() => this.nextStep()}>
                                    <BtnPrimary content="Next" />
                                </div>
                                :
                                <div>

                                    <div data-toggle="modal" data-target="#checkoutModal">
                                        <BtnPrimary content="Confirm" />
                                    </div>
                                    <CheckoutFormModal />

                                </div>
                            }
                        </div>
                    </div>
                </div>

            </ProfileMain>
        );
    }
}

export default NewOffer;

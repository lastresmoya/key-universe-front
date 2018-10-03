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

    }
    prevStep(step){
        // this.setState({currentStep: step})
    }
    nextStep() {    
        if (this.state.stepVal <= 4){
            this.setState({
                stepVal: this.state.stepVal + 1,
                currentView: `Step${this.state.stepVal + 1}`
            }) 
        } 
    }
    render(){
        const { stepVal,currentView } = this.state;
        console.log(stepVal, currentView)
        return (
            <ProfileMain>
                Steppers
                <h4 className="mb-2">Create new offer</h4> 
                {/* {currentStep === 1 && 
                    <Step1/>
                } */}
                {{
                    Step1: <Step1 /> ,
                    Step2: <Step2 />,
                    Step3: <Step3 />,
                    Step4: <Step4 />,
                    Step5: <Step5 />,
                    default: <Step1 />
                }[currentView]}

                <div>
                    {currentView === "Step1" ?
                        <Link to={'/profile/offers/my-offers'}>
                            <BtnLink content="Cancel" />
                        </Link>
                        :
                        <BtnLink content="Back" />
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
                            <CheckoutFormModal/>

                        </div>
                    }
                </div>

            </ProfileMain>
        );
    }
}

export default NewOffer;

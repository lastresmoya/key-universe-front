import React, {Component} from "react";
import CustomInput from '../../../../../components/Forms/CustomInput';

class Step2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            donate: false,
            donateAmount: 0
        }
        this.toggleDonate = this.toggleDonate.bind(this);
        this.toggleDonationAmount = this.toggleDonationAmount.bind(this);
    }
    toggleDonate() {
        this.setState({donate: !this.state.donate})
        if (!this.state.donate) { 
            this.setState({ donateAmount: 2 }) 
        } else {
            this.setState({ donateAmount: 0 }) 
        }

    }
    toggleDonationAmount(amount){
        this.setState({
            donateAmount: amount
        })
    }
    render(){
        const { donate, donateAmount } = this.state;
        return (
            <div data-aos="fade">
                <h5 className="font-spacing font-weight-light">STEP 2: PRICE GENERATION</h5>
                <p>Here you can enter the price of your offer.</p>
                <div className="py-3">
                    <div className="form-row">
                        <div className="col-sm-6">
                            <CustomInput label="Price, €" placeholder="17.00" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="donateRadio">Donate for this game's developers studio</label>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="donateRadio1" name="donateRadio" className="custom-control-input" onChange={() => this.toggleDonate()} defaultChecked/>
                            <label className="custom-control-label " htmlFor="donateRadio1">
                                No
                            </label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="donateRadio2" name="donateRadio" className="custom-control-input" onChange={()=> this.toggleDonate()}/>
                            <label className="custom-control-label" htmlFor="donateRadio2">Yes</label>
                        </div>
                    </div>
                    { donate && 
                        <div data-aos="fade">
                            <label htmlFor="donationAmount">Choose the amount of donation or enter another amount</label>
                            <div className="d-flex align-items-center">
                               <div className="w-100">
                                    <div className="btn-select mb-3">
                                        <button className={donateAmount === 2 ? "active" : ""} onClick={() => this.toggleDonationAmount(2)}>€2</button>
                                        <button className={donateAmount === 5 ? "active" : ""} onClick={() => this.toggleDonationAmount(5)}>€15</button>
                                        <button className={donateAmount === 10 ? "active" : ""} onClick={() => this.toggleDonationAmount(10)}>€10</button>
                                    </div>
                                </div>
                                <div className="px-4 mb-3">or</div>
                                <div className="w-100">
                                    <CustomInput label="Donation Amount" placeholder="Enter other amount" />
                                </div>
                            </div>
                        </div>
                    }
                    <p>
                        You will earn next amount for each key. The current amount depends on buyer location.
                        
                    </p>
                    <h5>€13.25 - €15.15</h5>
                </div>
            </div>
        );
    }
}

export default Step2;

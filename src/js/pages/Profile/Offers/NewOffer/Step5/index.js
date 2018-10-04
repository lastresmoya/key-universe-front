import React from "react";

function Step5(props) {
    return (
        <div data-aos="fade">
            <h5 className="font-spacing font-weight-light">STEP 5: CHECK ALL INFORMATION</h5>
            <p>When you confirm the offer's creation, you can't edit it anymore. In case you made mistakes you have to close the current offer and create a new one.</p>

            <div className="py-3">
                <div className="card bg-transparent border-light shadow-lg" data-aos="fade" data-aos-delay="200">
                    <div className="card-body">
                        <h6>GENERAL INFORMATION</h6>
                        <p className="pt-2 pb-4">
                            <strong>Game:</strong> Fallout: New Vegas, 2010 <br/>
                            <strong>Region:</strong> International release
                        </p>
                        <h6>PRICE GENERATION</h6>
                        <p className="pt-2 pb-4">
                            <strong>Price:</strong> €17.00 <br />
                            <strong>Donation:</strong> €5.00
                        </p>
                        <h6>WORK WITH THE KEYS</h6>
                        <p className="pt-2 pb-4">
                            <strong>Key 1:</strong> 3592-6463-5623-6731 <br />
                            <strong>Key 2:</strong> 3592-6463-5623-6731 <br />
                            <strong>Key 3:</strong> 3592-6463-5623-6731 
                        </p>
                        <h6>UPLOAD DOCUMENTS</h6>
                        <p className="pt-2 pb-4">
                            Proof Invoice 1.png <br />
                            Proof Invoice for keys 2-3.pdf <br/>
                            Proof Invoice for keys 4.pdf <br />
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Step5;

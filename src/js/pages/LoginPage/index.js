import React from "react";
import SignRegister from '../../components/SignRegister';

function LoginPage(props) {
    return (
        <div>
            <div className="container">
                <div className="row py-5 my-5">
                    <div className="col-sm-5 m-auto">
                        <SignRegister />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;

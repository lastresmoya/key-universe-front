import React from 'react';
import ProfileMain from '../';
import CustomSelect from '../../../components/Forms/CustomSelect';
import GameCard from '../../../components/GameCard';

function Purchases (props) {
    return(
        <ProfileMain>
            <h4>My Purchases</h4>
            <div className="row">
                <div className="col-sm-4 ml-sm-auto">
                    <CustomSelect label="SORT BY" opts={["Newest First"]} />
                </div>
            </div>
            <div className="row">
                <GameCard type={"purchase"} size={4} detail="1 Key"/>
                <GameCard type={"purchase"} size={4} detail="3 Key(s)"/>
                <GameCard type={"purchase"} size={4} detail="1 Key" />
            </div>
        </ProfileMain>
    )
}

export default Purchases 
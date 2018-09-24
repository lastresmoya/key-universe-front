import React from 'react';
import gameThumbLg from './assets/game-thumb-large.png';
import gameThumb1 from './assets/game-thumb-1.png';
import gameThumb2 from './assets/game-thumb-2.png';
import gameThumb3 from './assets/game-thumb-3.png';

function JumboGamePreview (props) {
    return(
        <div className="d-flex align-items-center mt-5 mb-3">
            <div className="col-9">
                <img src={gameThumbLg} alt="" className="clickable img-fluid shadow-lg" data-aos="fade"/>
            </div>
            <div className="col-3 h-100 d-flex flex-column justify-content-between align-items-center">
                <img src={gameThumb1} alt="" className=" clickable shadow-lg"  data-aos="fade" data-aos-delay="200"/>
                <img src={gameThumb2} alt="" className=" clickable shadow-lg mt-auto mb-auto"  data-aos="fade" data-aos-delay="400"/>
                <img src={gameThumb3} alt="" className=" clickable shadow-lg"  data-aos="fade" data-aos-delay="600"/>
            </div>
        </div>
    )
}

export default JumboGamePreview;
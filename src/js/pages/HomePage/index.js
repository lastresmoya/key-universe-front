
import React from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../../components/GameCard';

function HomePage(props) {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">

                        {/* <Link to={'/user-profile'}>Link</Link> */}
                        {/* <img className="img-fluid" data-aos="fade" src="https://media.playstation.com/is/image/SCEA/legend-of-korra-listing-thumb-01-ps4-ps3-us-18jun14?$Icon$" alt="" /> */}
                    </div>
                </div>
                <div className="row mt-4 mb-3">
                    <div className="col d-flex align-items-baseline justify-content-between">
                        <h3>Featured</h3>
                        <a href="" className="btn-link"><small>VIEW ALL</small></a>
                    </div>
                </div>
                <div className="row">
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                </div>
                
            </div>
            {/* <Link to={"/login"}>Login</Link>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <img src={image} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default HomePage;

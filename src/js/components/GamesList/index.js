import React from 'react';
import GameListItem from './GameListItem';

function GamesList (props) {
    return(
        <div>
            <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                    <a className="nav-link active" href="/">BEST SELLING</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">NEW</a>
                </li>
            </ul>
            <GameListItem />
            <GameListItem />
            <GameListItem />
            <GameListItem />
            <GameListItem />
            <GameListItem />
            <GameListItem />
            <GameListItem />
            <GameListItem />
            <GameListItem />
            <GameListItem />


        </div>
    )
}

export default GamesList;
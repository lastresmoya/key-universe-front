import React from 'react';
import SellerListItem from './SellerListItem';
import Pagination from '../Navigation/Pagination';

function SellerList(props) {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">USERNAME</th>
                        <th scope="col">USER LEVEL</th>
                        <th scope="col">SOLD KEYS</th>
                        <th scope="col">BADGES</th>
                        <th scope="col">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    <SellerListItem />
                    <SellerListItem />
                    <SellerListItem />
                    <SellerListItem />
                    <SellerListItem />
                    <SellerListItem />
                    <SellerListItem />
                    <SellerListItem />
                    <SellerListItem />
                </tbody>
            </table>
            <Pagination/>
        </div>
    )
}

export default SellerList;
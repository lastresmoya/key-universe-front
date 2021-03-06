import React from 'react';
import SellerListItem from './SellerListItem';
import Pagination from '../Navigation/Pagination';

function SellerList(props) {
    const currentSellers = props.currentSellers;

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
                    {currentSellers.map(seller => {
                            return (
                                <SellerListItem
                                    sellerInfo={seller}
                                    key={seller.id}
                                />
                            )
                        }) 
                    }
                </tbody>
            </table>
            { currentSellers && currentSellers.length >= 9 &&
                <Pagination/>
            }
            
        </div>
    )
}

export default SellerList;
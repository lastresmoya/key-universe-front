import React from 'react';
import SellerListItem from './SellerListItem';

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
            <nav aria-label="...">
                <ul className="pagination justify-content-center">

                    <li className="page-item disabled" >
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">First</span>
                        </a>
                    </li>
                    <li className="page-item disabled" >
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&lsaquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item active">
                        <a className="page-link" href="#" tabIndex="-1">1</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&rsaquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Last</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SellerList;
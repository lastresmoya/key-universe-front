import React from 'react';
import TransactionListItem from './TransactionListItem';
import Pagination from '../../../../components/Navigation/Pagination';

function TransactionsList(props) {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">DATE</th>
                        <th scope="col">AMOUNT</th>
                        <th scope="col">USERNAME</th>
                        <th scope="col">GAME</th>
                    </tr>
                </thead>
                <tbody>
                    <TransactionListItem />
                    <TransactionListItem />
                    <TransactionListItem />
                    <TransactionListItem />
                    <TransactionListItem />
                    <TransactionListItem />
                    <TransactionListItem />
                    <TransactionListItem />
                    <TransactionListItem />
                </tbody>
            </table>
            <Pagination/>
        </div>
    )
}

export default TransactionsList;
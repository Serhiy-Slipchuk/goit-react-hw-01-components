import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = function(props) {
    const {items} = props;
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>

                {console.log(items)}
                
                {items.map(( { id, type, amount, currency} ) => {
                    return (
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>)
                })}
            
             </tbody>
    </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array
}
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th className={styles.tableHead}>Type</th>
        <th className={styles.tableHead}>Amount</th>
        <th className={styles.tableHead}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr className={styles.item} key={item.id}>
          <td className={styles.itemType}>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionHistory;

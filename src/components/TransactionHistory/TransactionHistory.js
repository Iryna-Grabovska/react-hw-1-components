import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory} border="1">
      <thead>
        <tr className={s.tableTitle}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tableBord}>
        {items.map(({ id, amount, type, currency }) => (
          <tr className={s.tr} key={id}>
            <td className={s.typeTadle}>{type}</td>
            <td className={s.td}>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};

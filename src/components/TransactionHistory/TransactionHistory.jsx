import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <table className={css.transactions}>
      <thead>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tbody}>
        {items.map(({ type, amount, currency, id }) => (
          <tr className={css.trElements} key={id}>
            <td className={css.td}>{type}</td>
            <td className={css.td}>{amount}</td>
            <td className={css.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

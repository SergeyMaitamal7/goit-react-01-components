import css from './Statistics.module.css';
import { getBgColor } from '../../utils/getBgColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics} style={{ color:'white' }}>
      <h2 className={css.title}>{title.toUpperCase()}</h2>
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            style={{ backgroundColor: getBgColor(label) }}
            className={`${css.item} ${css[label]}`}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>{' '}
    </section>
  );
};

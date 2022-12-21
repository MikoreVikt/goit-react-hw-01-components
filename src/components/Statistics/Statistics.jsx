import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>Upload stats</h2>}

            <ul className={css.statList}>
                {stats.map(obj => {
                    return (
                        <li className={css.item} key={obj.id}>
                            <span className={css.label}>{obj.label}</span>
                            <span className={css.percentage}>{obj.percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
}

import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from 'utils/getRandomColor';

export const Statistics = function ( {data, title} ) {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css['stat-list']}>
                {data.map(({id, label, percentage}) => {
                    return <li key={id} className={css.item} style={{backgroundColor: getRandomHexColor()}}>
                                <span className={css.label}>{label}</span>
                                <span className={css.percentage}>{`${percentage} %`}</span>
                            </li>
                })}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })).isRequired,
    title: PropTypes.string.isRequired
}
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { StatisticElement } from 'components/Statistic-element/StatisticElement';
import { getRandomHexColor } from 'utils/getRandomColor';

export const Statistics = function (props) {
    const {data, title} = props;
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statlist}>
                {data.map(({id, label, percentage}) => {
                    return <li key={id} className={css.item} style={{backgroundColor: getRandomHexColor()}}><StatisticElement 
                    id = {id}
                    label = {label}
                    percentage = {percentage}/>
                    </li>
                })}
                
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string,
}
import PropTypes from 'prop-types';
import css from './StatisticElement.module.css';

export const StatisticElement = function(props) {
    const { label, percentage } = props;
    return (
        <>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{`${percentage} %`}</span>
        </>
    );
}

StatisticElement.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
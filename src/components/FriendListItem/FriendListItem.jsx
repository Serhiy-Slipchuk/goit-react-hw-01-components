import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = function({ avatar, name, isOnline }) {
    return (
        <li className={css.item}>
            <span className={`${css.status} ${isOnline ? css.onLine : css.offLine}`}></span>
            <img className={css.avatar} src={avatar} alt={`${name} avatar`} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = function(props) {
    const { avatar, name, isOnline } = props;
    return (
        <>
            {isOnline ? 
            <span className={css.status} data="onLine"></span> : 
            <span className={css.status} data="offLine"></span>}
            <img className={css.avatar} src={avatar} alt={`${name} avatar`} width="48" />
            <p className={css.name}>{name}</p>
        </>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
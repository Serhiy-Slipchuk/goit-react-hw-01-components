// import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';


export const FriendList = function (props) {
    const { friends } =props
    return (
        <ul className={css.friendlist}>
            {friends.map(({ name, avatar, isOnline, id }) => {
                return (
                    <li key={id} className={css.item}>
                        <FriendListItem
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}
                        />

                    </li>
                )
            })}
        </ul>
    )
}

// FriendList.propTypes.shape({
//         avatar: PropTypes.string,
//         name: PropTypes.string.isRequired,
//         isOnline: PropTypes.bool.isRequired,
//         id: PropTypes.number.isRequired,
//       })
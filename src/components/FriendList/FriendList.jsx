import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';


export const FriendList = function (props) {
    const { friends } = props;
    return (
        <ul className={css.friendlist}>
            {friends.map(({ name, avatar, isOnline, id }) => {
                return (
                    <React.Fragment key={id}>
                        <FriendListItem
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}
                        />
                    </React.Fragment>
                )
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired
};
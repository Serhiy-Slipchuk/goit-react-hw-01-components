import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = (props) => {
    const { username, tag, location, avatar, stats: { followers: userFollowers, views, likes } } = props;
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                src={avatar}
                alt={`${username} avatar`}
                className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>{`@${tag}`}</p>
                <p className={css.location}>{location}</p>
            </div>
            <ul className={css.stats}>
                <li>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{userFollowers}</span>
                </li>
                <li>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{views}</span>
                </li>
                <li>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
      })
};
import PropTypes from 'prop-types';

export const Profile = (props) => {
    const { username, tag, location, avatar, stats: { followers: userFollowers, views, likes } } = props;
    return (
        <div className="profile">
            <div className="description">
                <img
                src={avatar}
                alt={`${username} avatar`}
                className="avatar"
                />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>
            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{userFollowers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
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
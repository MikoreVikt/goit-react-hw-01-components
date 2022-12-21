import PropTypes from 'prop-types';
import css from './FriendItem.module.css';

export const FriendItem = ({avatar, name, isOnline}) => {
    return (
        <li className={css.friendItem}>
            <span className={`${css.status} ${isOnline ? css.statusOnline : css.statusOfline}`}></span>
            <img className={css.friendAvatar} src={avatar} alt="user avatar" />
            <p className={css.friendName}>{name}</p>
        </li>
    )
}

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

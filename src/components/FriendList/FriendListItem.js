import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendListItem({ name, avatar, isOnline }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.friendOn : s.friendOff}>{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="70px" />
      <p className={s.friendName}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

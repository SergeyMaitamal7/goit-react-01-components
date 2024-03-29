import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

console.log(css);

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline }) => (
        <FriendListItem
          key={name}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

import css from '../FriendList/FriendList.module.css';
import { RiFlagFill } from 'react-icons/ri';

export function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      <FriendListItem friends={friends} />
    </ul>
  );
}

function FriendListItem({ friends }) {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li
        key={id}
        className={css.item}
        style={{ backgroundColor: isOnline ? '	#F0FFF0' : '	#FFF5EE' }}
      >
        {isOnline ? (
          <span className={css.status} style={{ color: 'green' }}>
            <RiFlagFill />
          </span>
        ) : (
          <span className={css.status} style={{ color: 'red' }}>
            <RiFlagFill />
          </span>
        )}

        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    );
  });
}

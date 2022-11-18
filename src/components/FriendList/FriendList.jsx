import { RiFlagFill } from 'react-icons/ri';

export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(item => (
        <FriendListItem
          id={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li
      key={id}
      className="item"
      style={{ backgroundColor: isOnline ? '	#F0FFF0' : '	#FFF5EE' }}
    >
      {isOnline ? (
        <span className="status" style={{ color: 'green' }}>
          <RiFlagFill />
        </span>
      ) : (
        <span className="status" style={{ color: 'red' }}>
          <RiFlagFill />
        </span>
      )}

      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

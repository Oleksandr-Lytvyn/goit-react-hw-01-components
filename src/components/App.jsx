import { Profile } from './Profile/Profile';
import user from '../JSON/user';
console.log(user);

export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      ava={user.avatar}
      stats={user.stats}
    />
  );
};

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../JSON/user';
import data from '../JSON/data';
console.log(data);

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        ava={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title={null} />
    </>
  );
};

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../JSON/user';
import data from '../JSON/data';
import friends from '../JSON/friends';
import transactions from '../JSON/transactions';

console.log(transactions);
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
      <FriendList friendsArr={friends} />
      <TransactionHistory tansactions={transactions} />
    </>
  );
};

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import PropTypes from 'prop-types';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../JSON/user';
import data from '../JSON/data';
import friends from '../JSON/friends';
import transactions from '../JSON/transactions';
import '../index.css';

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
      <FriendList friends={friends} />
      <TransactionHistory tansactions={transactions} />
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  ava: PropTypes.string,
  stats: PropTypes.object,
};
Statistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
};
FriendList.propTypes = {
  friends: PropTypes.array,
};
TransactionHistory.propTypes = {
  tansactions: PropTypes.array,
};

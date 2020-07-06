import React, { Fragment } from 'react';
import Profile from './components/social-profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friends-list/FriendList';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import transactions from './JSON/transactions.json';
import user from './JSON/user.json';
import statisticalData from './JSON/statistical-data.json';
import friends from './JSON/friends.json';
import './css/body.css';

function App() {
  return (
    <Fragment>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Fragment>
  );
}

export default App;

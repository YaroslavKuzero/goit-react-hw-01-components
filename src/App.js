import React from 'react';

import Profile from './components/social-profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friends-list/FriendList';
import TransactionHistory from './components/transaction-history/TransactionHistory';

import transactions from './data/transactions.json';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';

import './css/body.css';

function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;

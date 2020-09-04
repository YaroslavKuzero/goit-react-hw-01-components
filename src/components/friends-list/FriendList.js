import React from 'react';
import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';

import { friendlist } from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={friendlist}>
    {friends.map(({ id, ...props }) => (
      <FriendListItem key={id} {...props} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

export default FriendList;

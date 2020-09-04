import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const additionclass = isOnline ? s.online : s.offline;
  return (
    <li className={s.item}>
      <span className={classnames(s.status, additionclass)}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: 'https://dummyimage.com/128/999799/fff.png&text=AVA',
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

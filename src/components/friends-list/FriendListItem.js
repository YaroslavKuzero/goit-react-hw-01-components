import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const Span = isOnline => {
  const spanClasses = [styles.status];

  if (isOnline) {
    spanClasses.push(styles.online);
  } else {
    spanClasses.push(styles.offline);
  }
  return <span className={spanClasses.join(' ')}></span>;
};

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    {Span(isOnline)}
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: 'https://dummyimage.com/128/999799/fff.png&text=AVA',
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

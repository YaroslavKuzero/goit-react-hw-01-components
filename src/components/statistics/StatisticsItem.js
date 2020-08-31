import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import backgroundColor from './getRandomBg';

const StatisticsItem = ({ label, percentage }) => (
  <li style={{ backgroundColor: backgroundColor() }} className={s.item}>
    <span className={s.label}>{label}</span>
    <span className={s.percentage}>{percentage}%</span>
  </li>
);

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;

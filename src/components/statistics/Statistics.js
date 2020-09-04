import React from 'react';
import PropTypes from 'prop-types';

import StatisticsItem from './StatisticsItem';

import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const isShowTitle = title;
  return (
    <section className={s.statistics}>
      {isShowTitle && <h2 className={s.title}>{title}</h2>}

      <ul className={s.stat_list}>
        {stats.map(({ id, ...props }) => (
          <StatisticsItem key={id} {...props} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default Statistics;

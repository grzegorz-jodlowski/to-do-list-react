import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


const Card = ({ title }) => <div className={styles.component}>{title}</div>;

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;
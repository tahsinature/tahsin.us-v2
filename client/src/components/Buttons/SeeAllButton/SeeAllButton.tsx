import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './SeeAllButton.module.scss';
import PropTypes from 'prop-types';

const SeeAllButton = (props: any) => {
  const history = useHistory();
  const { path } = props;

  return (
    <button className={[classes.SeeAllButton, 'fw6 green'].join(' ')} onClick={() => history.push(`/list/${path}`)}>
      See All
    </button>
  );
};

SeeAllButton.propTypes = {
  path: PropTypes.string.isRequired,
};

export default SeeAllButton;

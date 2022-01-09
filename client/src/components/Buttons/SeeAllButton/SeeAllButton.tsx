import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import classes from './SeeAllButton.module.scss';
import { ThemeManager } from 'src/App.theme';

const styles = {
  color: {
    light: '#000',
    dark: '#fff',
  },
};

const Button = styled.button<{ currentTheme: typeof ThemeManager.prototype.currentTheme }>`
  color: ${props => styles.color[props.currentTheme]};
`;

const SeeAllButton = (props: any) => {
  const themeManager = new ThemeManager();
  const history = useHistory();
  const { path } = props;

  return (
    <Button currentTheme={themeManager.currentTheme} className={[classes.SeeAllButton, 'fw6 green'].join(' ')} onClick={() => history.push(`/list/${path}`)}>
      See All
    </Button>
  );
};

SeeAllButton.propTypes = {
  path: PropTypes.string.isRequired,
};

export default SeeAllButton;

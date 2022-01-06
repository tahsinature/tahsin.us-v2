import React from 'react';
import { useHistory } from 'react-router-dom';

import classes from './GotoChatButton.module.scss';

const GotoChatButton = () => {
  const history = useHistory();

  return (
    <button className={classes.GotoChatButton} onClick={() => history.push('/chat')}>
      <p>Chat</p>
    </button>
  );
};

export default GotoChatButton;

import React from 'react';
// import { FiMessageCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import classes from './GotoChatButton.module.scss';

const GotoChatButton = (props: any) => {
  const history = useHistory();

  return (
    <button className={classes.GotoChatButton} onClick={() => history.push('/chat')}>
      {/* <FiMessageCircle /> */}
      <p>Chat</p>
    </button>
  );
};

export default GotoChatButton;

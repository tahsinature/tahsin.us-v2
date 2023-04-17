import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import 'react-chat-elements/dist/main.css';
import SendIcon from '@material-ui/icons/Send';
// import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import './Chat.scss';
import classes from './Chat.module.scss';
import { Root, GlobalStyle } from './Chat.theme';
import storeManager from 'src/store/storeManager';
import actions from 'src/actions';
import { IReducers } from 'src/interfaces/reducers';
const { MessageList } = require('react-chat-elements');

const Chat = (props: any) => {
  const chatState = props.chatState as IReducers.IChatReducer;
  const { messages, sendingMsg: isSendingState } = chatState;

  const [input, setInput] = useState('');

  const mapped = messages.map(msg => ({
    position: msg.author === 'admin' ? 'left' : 'right',
    type: 'text',
    text: msg.content,
    date: Date.parse(msg.createdAt),
  }));

  useEffect(() => {
    const list: any = document.querySelector(`.${classes.Middle}`);
    const farFromBottom = list.scrollHeight - list.scrollTop - list.offsetHeight;
    if (farFromBottom < 500) list.scroll(0, list.scrollHeight);
  });

  const handleSendMsg = () => {
    if (input) storeManager.dispatch(actions.chat.sendMsgRequesting(input));
    setInput('');
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') handleSendMsg();
  };

  const noMsgsComponent = (
    <div className={classes.NoMsgsComponent}>
      <div className={classes.NoMsgsComponent_Inner}>
        <p>I am still developing this...</p>
        {/* <p>No messages here yet...</p>
        <p>Send a message or, wait for the owner to ping you.</p> */}
      </div>
    </div>
  );

  return (
    <Root className={classes.Chat}>
      <GlobalStyle />
      <div className={classes.Container}>
        <div className={classes.Top}>
          <p>@tahsinature</p>
        </div>
        <div className={classes.Middle}>{mapped.length ? <MessageList lockable={true} dataSource={mapped} /> : noMsgsComponent}</div>
        <div className={classes.Bottom}>
          <input
            onKeyDown={handleKeyDown}
            disabled={isSendingState}
            className={classes.Input}
            onChange={(e: any) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder={isSendingState ? 'Sending your msg...' : 'Type your text'}
          />
          <div className={classes.RightButton} onClick={handleSendMsg}>
            {isSendingState ? (
              <>
                <p>Loader</p>
              </>
            ) : (
              // <Loader type="Watch" color="#00BFFF" height={30} width={30} />
              <div className={[classes.SendIcon, !input ? classes.RightButtonDisable : ''].join(' ')}>
                <SendIcon />
              </div>
            )}
          </div>
        </div>
      </div>
    </Root>
  );
};

const mapStateToProps = (state: any) => ({
  chatState: state.chatReducer,
});

export default connect(mapStateToProps, null)(Chat);

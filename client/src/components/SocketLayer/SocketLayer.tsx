import React, { useEffect, useState } from 'react';
import PageLoader from '../PageLoader/PageLoader';
import mySocket from '../../mySocket';
import config from '../../config';

const SocketLayer = (props: any) => {
  const [isSocketConnected, setSocketConnected] = useState(false);
  const [message, setMessage] = useState('Establishing Socket Connection');
  const [isDisconnectPageVisible, showDisconnectedPage] = useState(false);

  const establishSocketConnection = async () => {
    mySocket.e.on('disconnect', async () => {
      setSocketConnected(false);
      showDisconnectedPage(true);
    });

    if (config.connectionId) await mySocket.init();

    setSocketConnected(true);
    showDisconnectedPage(false);
  };

  const reconnect = () => {
    if (isSocketConnected) return showDisconnectedPage(false);

    setMessage('Re-Establishing Socket Connection');
    establishSocketConnection();
  };

  useEffect(() => {
    establishSocketConnection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const disconnectionScreen = () => {
    return (
      <div>
        <p>socket disconencted</p>
        <button onClick={reconnect}>try again</button>
      </div>
    );
  };

  const connectionScreen = () => {
    return isSocketConnected ? props.children : <PageLoader message={message} />;
  };

  return isDisconnectPageVisible ? disconnectionScreen() : connectionScreen();
};

export default SocketLayer;

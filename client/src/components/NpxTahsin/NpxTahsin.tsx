import React, { useState, useEffect } from 'react';
import Terminal from '../Terminal/Terminal';

const termLines = [
  {
    text: 'npx tahsin',
    cmd: true,
    delay: 50,
  },
];

const NpxTahsin = () => {
  const [show, toggleShow] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      refresh();
    }, 5000);

    return () => clearInterval(id);
  }, []);

  const refresh = () => {
    toggleShow(false);
    toggleShow(true);
  };

  return (
    <>
      <div>{show && <Terminal lines={termLines} />}</div>
    </>
  );
};

export default NpxTahsin;

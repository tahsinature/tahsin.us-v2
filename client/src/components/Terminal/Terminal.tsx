// @ts-nocheck
import React, { useState } from 'react';
import CLI from 'react-animated-term';
import 'react-animated-term/dist/react-animated-term.css';
import { ThemeManager } from 'src/App.theme';

const Terminal = (props: {
  height?: number;
  lines: {
    text: string;
    cmd: boolean;
    delay?: number;
  }[];
}) => {
  const tm = new ThemeManager();
  const [white, setWhite] = useState(tm.currentTheme === 'dark');

  return (
    <div
      onClick={() => {
        setWhite(!white);
      }}>
      <CLI height={props.height || 100} lines={props.lines} interval={80} white={white} />
    </div>
  );
};

export default Terminal;

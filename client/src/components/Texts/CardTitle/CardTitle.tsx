import React from 'react';
import ScrollingText from 'src/components/ScrollingText/ScrollingText';

import classes from './CardTitle.module.scss';

function CardTitle(props: { title: string; release?: string }) {
  const text = props.release ? `${props.title} (${props.release})` : props.title;
  return (
    <div className={classes.Title}>
      <ScrollingText text={text} />
    </div>
  );
}

export default CardTitle;

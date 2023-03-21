import React, { useState, useRef, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

import './ScrollingText.scss';

export default function ScrollingText(props: { text: string; className?: string }) {
  const parent = useRef(null);
  const text = useRef(null);
  const [shouldScroll, scroll] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (parent.current && text.current) {
      const parentWidth = (parent.current as any).offsetWidth;
      const textWidth = (text.current as any).scrollWidth;

      if (textWidth > parentWidth) {
        scroll(true);
      }
    }
  });

  const textComponent = (
    <p ref={text} className="scrolling-text">
      {props.text}
    </p>
  );

  return (
    <div ref={parent} className={props.className}>
      <Marquee gradient={false} play={shouldScroll} pauseOnHover>
        {textComponent}
      </Marquee>
    </div>
  );
}

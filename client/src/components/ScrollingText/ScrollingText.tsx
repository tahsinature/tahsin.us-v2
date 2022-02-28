import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export default function ScrollingText(props: { text: string }) {
  const parent = useRef(null);
  const text = useRef(null);
  const [key, setKey] = useState(1);
  const [shouldScroll, scroll] = useState(false);

  const scrolling = useSpring(
    shouldScroll
      ? {
          from: { transform: 'translate(0%,0)' },
          to: { transform: 'translate(-80%,0)' },
          config: { duration: 5000 },

          reset: true,
          //reverse: key % 2 == 0,
          onRest: () => {
            setKey(key + 1);
          },
        }
      : {},
  );

  useEffect(() => {
    const parentWidth = (parent.current as any).offsetWidth;
    const textWidth = (text.current as any).scrollWidth;
    if (textWidth > parentWidth) {
      scroll(true);
    }
  }, []);

  return (
    <div ref={parent}>
      <animated.p style={scrolling} ref={text}>
        {props.text}
      </animated.p>
    </div>
  );
}

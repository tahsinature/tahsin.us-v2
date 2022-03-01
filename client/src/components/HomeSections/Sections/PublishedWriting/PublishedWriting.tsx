import React, { useRef, useState } from 'react';
import { DescriptionRounded } from '@material-ui/icons';

import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';
import classes from './PublishedWriting.module.scss';
import data from 'src/api/data';
import ReadMoreButton from 'src/components/HomeSections/Sections/PublishedWriting/ReadMoreButton/ReadMoreButton';
import ScrollingText from 'src/components/ScrollingText/ScrollingText';
import PreLoader from 'src/components/PreLoader/PreLoader';

let intervalId: NodeJS.Timeout;

const PublishedWriting = () => {
  const postsBox = useRef(null);

  const handleClick = (url: string) => {
    const win = window.open(url, '_blank');
    win?.focus();
  };

  const readMore = (scrollDistance: number) => {
    const ele: any = postsBox.current;
    if (ele) {
      if (ele.scrollLeft + ele.clientWidth >= ele.scrollWidth) ele.scroll(0, 0);
      else ele.scroll(ele.scrollLeft + scrollDistance, 0);
    }
  };

  const handleHold = () => {
    intervalId = setInterval(() => {
      readMore(100);
    }, 100);
  };

  const handleCancelHold = () => {
    clearInterval(intervalId);
  };

  const Box = (props: { writing: typeof data.articles[0] }) => {
    const [ready, setReady] = useState(false);
    return (
      <PreLoader className={classes.Box} onClick={() => handleClick(props.writing.url)} isReady={ready}>
        <div className={classes.BoxContent}>
          <div className={classes.ImageContainer}>
            <div className={classes.InnerSkew}>
              <img src={props.writing.thumb} alt="article-thumb" onLoad={() => setReady(true)} />
            </div>
          </div>
          <div className={classes.TextContainer}>
            <div className={classes.TextBox}>
              <ScrollingText text={props.writing.title} />
            </div>
          </div>
        </div>
      </PreLoader>
    );
  };

  return (
    <Section classNames={[classes.PublishedWriting]}>
      <Header title="Published Writing" icon={<DescriptionRounded />} />
      <div className={classes.Boxes} ref={postsBox}>
        {data.articles.map(writing => (
          <Box key={writing.url} writing={writing} />
        ))}
      </div>
      <div className={classes.Buttons}>
        <ReadMoreButton clickHandler={() => readMore(100)} onHoldHandler={handleHold} holdReleaseHandler={handleCancelHold} />
      </div>
    </Section>
  );
};

export default PublishedWriting;

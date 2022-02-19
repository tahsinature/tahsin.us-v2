import React, { useRef } from 'react';
import { DescriptionRounded } from '@material-ui/icons';

import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';
import classes from './PublishedWriting.module.scss';
import data from 'src/api/data';

const PublishedWriting = () => {
  const postsBox = useRef(null);

  const handleClick = (url: string) => {
    const win = window.open(url, '_blank');
    win?.focus();
  };

  const goRight = () => {
    const ele: any = postsBox.current;
    if (ele !== null) ele.scroll(ele.scrollLeft + 100, 0);
  };

  const goLeft = () => {
    const ele: any = postsBox.current;
    if (ele !== null) ele.scroll(ele.scrollLeft - 100, 0);
  };

  return (
    <Section classNames={[classes.PublishedWriting]}>
      <Header title="Published Writing" icon={<DescriptionRounded />} />
      <div className={classes.Boxes} ref={postsBox}>
        {data.articles.map(writing => (
          <div key={writing.url} className={classes.Box} onClick={() => handleClick(writing.url)}>
            <div className={classes.BoxContent}>
              <div className={classes.ImageContainer}>
                <div className={classes.InnerSkew}>
                  <img src={writing.thumb} alt="article-thumb" />
                </div>
              </div>
              <div className={classes.TextContainer}>
                <div className={classes.TextBox}>
                  <p>{writing.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.Buttons}>
        <button onClick={goLeft}>Previous</button>
        <button onClick={goRight}>Next</button>
      </div>
    </Section>
  );
};

export default PublishedWriting;

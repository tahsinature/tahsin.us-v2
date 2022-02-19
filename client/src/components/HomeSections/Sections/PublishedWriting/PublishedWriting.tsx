import React, { useRef } from 'react';
import { DescriptionRounded } from '@material-ui/icons';

import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';
import classes from './PublishedWriting.module.scss';
import data from 'src/api/data';
import ReadMoreButton from 'src/components/HomeSections/Sections/PublishedWriting/ReadMoreButton/ReadMoreButton';

const PublishedWriting = () => {
  const postsBox = useRef(null);

  const handleClick = (url: string) => {
    const win = window.open(url, '_blank');
    win?.focus();
  };

  const readMore = () => {
    const ele: any = postsBox.current;
    if (ele) {
      if (ele.scrollLeft + ele.clientWidth >= ele.scrollWidth) ele.scroll(0, 0);
      else ele.scroll(ele.scrollLeft + 100, 0);
    }
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
        <ReadMoreButton clickHandler={readMore} />
      </div>
    </Section>
  );
};

export default PublishedWriting;

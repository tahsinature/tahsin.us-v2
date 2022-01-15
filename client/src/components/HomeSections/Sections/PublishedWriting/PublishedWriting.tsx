import React from 'react';
import { DescriptionRounded } from '@material-ui/icons';

import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';
import classes from './PublishedWriting.module.scss';
import data from 'src/api/data/index';

const PublishedWriting = () => {
  const handleClick = (url: string) => {
    const win = window.open(url, '_blank');
    win?.focus();
  };

  return (
    <Section classNames={[classes.PublishedWriting]}>
      <Header title="Published Writing" icon={<DescriptionRounded />} />
      <div className={classes.Boxes}>
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
    </Section>
  );
};

export default PublishedWriting;

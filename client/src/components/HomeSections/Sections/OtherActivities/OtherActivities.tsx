import React from 'react';
import Header from '../../../Header/Header';
import Section from '../../../Section/Section';
import { RowingOutlined } from '@material-ui/icons';
import classes from './OtherActivities.module.scss';

const PersonalProjects = () => {
  return (
    <Section>
      <Header title="Other Activities" icon={<RowingOutlined />} />
      <p>
        Photography and travelling are part of my hobbies. Here I will be updating my other activities (out of professional activities) programmatically (eg. movies I've watched, photos I've taken
        etc).
      </p>

      <div className={classes.Cards}>
        <div className={classes.Card}>
          <div className={classes.CardLeft}>
            <h2>Movies & TV Series</h2>
          </div>
          <div className={classes.CardRight}>
            <img src="https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?k=20&m=1191001701&s=612x612&w=0&h=uDszifNzvgeY5QrPwWvocFOUCw8ugViuw-U8LCJ1wu8=" alt="" />
          </div>
        </div>
        <div className={classes.Card}>
          <div className={classes.CardLeft}>
            <h2>Music</h2>
          </div>
          <div className={classes.CardRight}>
            <img src="https://img.static-kl.com/images/media/E95E1F32-A7A4-4FC0-AC0A41A2BC528AE3?aspect_ratio=1:1&min_width=912" alt="" />
          </div>
        </div>
        <div className={classes.Card}>
          <div className={classes.CardLeft}>
            <h2>Photography</h2>
          </div>
          <div className={classes.CardRight}>
            <img src="https://gallery.tahsin.us/uploads/big/273cfc916035a077d9612fbb3258acb7.jpeg" alt="" />
          </div>
        </div>
        <div className={classes.Card}>
          <div className={classes.CardLeft}>
            <h2>Travel</h2>
          </div>
          <div className={classes.CardRight}>
            <img src="https://media-exp1.licdn.com/dms/image/C4D1BAQGGdNo6IlDOCQ/company-background_10000/0/1519801807380?e=2159024400&v=beta&t=VWHuXHsmYAXZB4XQn7H63FLLvHjjMfs6CdxCh3HwcCM" alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PersonalProjects;

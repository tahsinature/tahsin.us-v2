import React from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import { RowingOutlined } from '@material-ui/icons';

import classes from './OtherActivities.module.scss';
import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';
import images from 'src/assets/images';

let history: History;

const activities = [
  {
    name: 'Books',
    image: images.otherActivities.books,
    clickHandler: () => alert('I will add soon.'),
  },
  {
    name: 'Photography',
    image: images.otherActivities.photography,
    clickHandler: () => history.push('/gallery'),
  },
  {
    name: 'Movies & TV Series',
    image: images.otherActivities.movies,
    clickHandler: () => alert('I will add soon.'),
  },
  {
    name: 'Music',
    image: images.otherActivities.music,
    clickHandler: () => alert('I will add soon.'),
  },
  {
    name: 'Travel',
    image: images.otherActivities.travel,
    clickHandler: () => history.push('/travels'),
  },
];

const OtherActivities = () => {
  history = useHistory();

  return (
    <Section>
      <Header title="Other Activities" icon={<RowingOutlined />} />
      <p>
        When I am away from my keyboard, you can either find me playing with my camera or flipping pages near my bookshelf or on the couch chilling with Netflix. If you can't, you can be pretty much
        sure: I am on a long trip somewhere natural.
      </p>

      <div className={classes.Cards}>
        {activities.map(activity => (
          <div key={activity.name} onClick={activity.clickHandler} className={classes.Card}>
            <div className={classes.CardLeft}>
              <h4>{activity.name}</h4>
            </div>
            <div className={classes.CardRight}>
              <img src={activity.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default OtherActivities;

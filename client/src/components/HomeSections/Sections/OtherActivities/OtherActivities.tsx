import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import { RowingOutlined } from '@material-ui/icons';

import classes from './OtherActivities.module.scss';
import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';
import images from 'src/assets/images';
import PreLoader from 'src/components/PreLoader/PreLoader';

let history: History;
const addSoon = () => {
  alert('I will add soon.');
};

const activities = [
  {
    name: 'Books',
    image: images.otherActivities.books,
    clickHandler: () => history.push('/books'),
  },
  {
    name: 'Photography',
    image: images.otherActivities.photography,
    clickHandler: () => history.push('/gallery'),
  },
  {
    name: 'Movies & TV Series',
    image: images.otherActivities.movies,
    clickHandler: () => history.push('/movies'),
  },
  {
    name: 'Music',
    image: images.otherActivities.music,
    clickHandler: addSoon,
  },
  {
    name: 'Travel',
    image: images.otherActivities.travel,
    clickHandler: addSoon,
  },
];

const Card = (props: { activity: typeof activities[0] }) => {
  const [isReady, setReady] = useState(false);
  return (
    <PreLoader isReady={isReady} className={classes.Card} onClick={() => isReady && props.activity.clickHandler()}>
      <div className={classes.CardLeft}>
        <h4>{props.activity.name}</h4>
      </div>
      <div className={classes.CardRight}>
        <img onLoad={() => setReady(true)} src={props.activity.image} alt="" />
      </div>
    </PreLoader>
  );
};

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
          <Card key={activity.name} activity={activity} />
        ))}
      </div>
    </Section>
  );
};

export default OtherActivities;

import React from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import Header from '../../../Header/Header';
import Section from '../../../Section/Section';
import { RowingOutlined } from '@material-ui/icons';
import classes from './OtherActivities.module.scss';

let history: History;

const activities = [
  {
    name: 'Books',
    image: 'https://thecopybot.com/wp-content/uploads/2011/07/book-business-coffee-324129-1024x683.jpg',
    clickHandler: () => alert('I will add soon.'),
  },
  {
    name: 'Photography',
    image: 'https://gallery.tahsin.us/uploads/big/273cfc916035a077d9612fbb3258acb7.jpeg',
    clickHandler: () => history.push('/gallery'),
  },
  {
    name: 'Movies & TV Series',
    image: 'https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?k=20&m=1191001701&s=612x612&w=0&h=uDszifNzvgeY5QrPwWvocFOUCw8ugViuw-U8LCJ1wu8=',
    clickHandler: () => alert('I will add soon.'),
  },
  {
    name: 'Music',
    image: 'https://img.static-kl.com/images/media/E95E1F32-A7A4-4FC0-AC0A41A2BC528AE3?aspect_ratio=1:1&min_width=912',
    clickHandler: () => alert('I will add soon.'),
  },
  {
    name: 'Travel',
    image: 'https://media-exp1.licdn.com/dms/image/C4D1BAQGGdNo6IlDOCQ/company-background_10000/0/1519801807380?e=2159024400&v=beta&t=VWHuXHsmYAXZB4XQn7H63FLLvHjjMfs6CdxCh3HwcCM',
    clickHandler: () => alert('I will add soon.'),
  },
];

const PersonalProjects = () => {
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

export default PersonalProjects;

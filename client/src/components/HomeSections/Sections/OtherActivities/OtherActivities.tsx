import React from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import { RowingOutlined } from '@material-ui/icons';

import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';
import images from 'src/assets/images';
import Cards from 'src/components/Cards/Cards';

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
    name: 'My Listenings',
    image: images.otherActivities.listenings,
    clickHandler: () => history.push('/listenings'),
  },
  {
    name: 'Movies & TV Series',
    image: images.otherActivities.movies,
    clickHandler: () => history.push('/movies'),
  },
  {
    name: 'Travel',
    image: images.otherActivities.travel,
    clickHandler: addSoon,
  },
];

const OtherActivities = () => {
  history = useHistory();

  return (
    <Section>
      <Header title="Other Activities" icon={<RowingOutlined />} />
      <p>
        When I am away from my keyboard, you can either find me playing with my camera or flipping pages near my bookshelf. If you can't, you can be pretty much sure: I am on a long trip somewhere
        natural.
      </p>

      <Cards data={activities} />
    </Section>
  );
};

export default OtherActivities;

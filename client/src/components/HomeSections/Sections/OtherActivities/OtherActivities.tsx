import React from 'react';
import Header from '../../../Header/Header';
import Section from '../../../Section/Section';
import { RowingOutlined } from '@material-ui/icons';

const PersonalProjects = () => {
  return (
    <Section>
      <Header title="Other Activities" icon={<RowingOutlined />} />
      <p>
        Photography and travelling are part of my hobbies. Here I will be updating my other activities (out of professional activities) programmatically (eg. movies I've watched, photos I've taken
        etc).
      </p>
    </Section>
  );
};

export default PersonalProjects;

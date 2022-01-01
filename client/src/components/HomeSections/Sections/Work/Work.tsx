import React from 'react';
import Header from '../../../Header/Header';
import Section from '../../../Section/Section';
import { WorkRounded as WorkIcon } from '@material-ui/icons';

const Work = () => {
  return (
    <Section>
      <Header title="Work" icon={<WorkIcon />} />
      <p>Work History</p>
    </Section>
  );
};

export default Work;

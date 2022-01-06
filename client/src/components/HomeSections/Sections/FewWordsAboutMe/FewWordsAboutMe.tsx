import React from 'react';
import moment from 'moment';
import { Person } from '@material-ui/icons';

import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';

const FewWordsAboutMe = () => {
  return (
    <Section>
      <Header title="About Me" icon={<Person />}></Header>
      <p style={{ textAlign: 'justify' }}>
        I am a solutions-oriented person who enjoys being challenged and engaged with projects that require me to work outside my comfort and knowledge set & a passionate and pragmatic programmer with{' '}
        {moment.duration(moment().diff(moment().set('year', 2018).startOf('year'))).humanize()} of professional experience, specializing in microservices & full-stack development using modern & robust
        technologies. Sometimes I work on things I find interesting, or things I think other people might find interesting. It’s nice when those things overlap.
      </p>
    </Section>
  );
};

export default FewWordsAboutMe;

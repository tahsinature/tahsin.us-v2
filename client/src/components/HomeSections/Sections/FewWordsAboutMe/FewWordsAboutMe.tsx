import React from 'react';
import moment from 'moment';
import Header from '../../../Header/Header';
import Section from '../../../Section/Section';

const FewWordsAboutMe = () => {
  return (
    <Section>
      <Header>Few words about myself</Header>
      <p style={{ textAlign: 'justify' }}>
        I'm a Jakarta based Software Engineer. A passionate and pragmatic programmer with {moment.duration(moment().diff(moment().set('year', 2018).startOf('year'))).humanize()} of professional
        experience, specializing in microservices & full-stack development using modern & robust technologies. Sometimes I work on things I find interesting, or things I think other people might find
        interesting. It’s nice when those things overlap.
      </p>
    </Section>
  );
};

export default FewWordsAboutMe;

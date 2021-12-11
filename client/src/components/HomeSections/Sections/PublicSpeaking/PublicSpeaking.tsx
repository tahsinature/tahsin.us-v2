import React from 'react';
import Header from '../../../Header/Header';
import Section from '../../../Section/Section';

const PublicSpeaking = () => {
  return (
    <Section>
      <Header>Public Speaking</Header>
      <ul>
        <li>
          <a className="fw6 green no-underline underline-hover" href="https://google.com/">
            Rocketing the Node.js Community Beyond the Edge
          </a>{' '}
          at{' '}
          <a className="fw6 green no-underline underline-hover" href="https://google.com/">
            EmpireNode
          </a>{' '}
          2016
        </li>
      </ul>
    </Section>
  );
};

export default PublicSpeaking;

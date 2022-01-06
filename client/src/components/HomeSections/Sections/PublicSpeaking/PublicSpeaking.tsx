import React from 'react';

import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';

const PublicSpeaking = () => {
  return (
    <Section>
      <Header title="Public Speaking" />
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

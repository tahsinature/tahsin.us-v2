import React from 'react';
import { AssessmentRounded } from '@material-ui/icons';

import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';
import data from 'src/api/data';

const MyContributions = () => {
  return (
    <Section>
      <Header title="Projects" icon={<AssessmentRounded />} />
      <ul>
        {data.contribution.map(ele => (
          <li key={ele.title}>
            <p>
              <a className="fw6 green no-underline underline-hover" href={ele.url} target="_blank" rel="noreferrer">
                {ele.title}
              </a>
              : {ele.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default MyContributions;

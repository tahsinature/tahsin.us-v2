import React from 'react';
import Header from '../../../Header/Header';
import Section from '../../../Section/Section';
import { AssessmentRounded } from '@material-ui/icons';

const data = [
  {
    title: 'sequelize-utility',
    description: `I created a utility lib over Sequelize (a very very popular ORM for relational DB) to ease some of daily actions over databases.`,
    url: 'https://www.npmjs.com/package/sequelize-utility',
  },
  {
    title: 'grpc-logger',
    description: `Getting log from gRPC call is quite tricky (specially without a framework). So I created this lib to abstract all those complexity.`,
    url: 'https://www.npmjs.com/package/grpc-logger',
  },
  {
    title: 'vue-store',
    description: `A fully featured marketplace where you can sell your used stuffs in a convenient way.`,
    url: 'https://vue-store-tahsin.firebaseapp.com/about',
  },
  {
    title: 'epidemic-stat',
    description: `At the initial stage of COVID-19 pandemic, it was little bit tough to see the stat of the pendemic. I created an Android & iOS app to observe the stat conveniently.`,
    url: 'https://tahsinature.medium.com/why-i-built-a-toy-app-epidemic-stat-5ca254d654b0',
  },
  {
    title: 'cross-tools',
    description: `I cross-platformed some fundamental tools that developers need day to day basis.`,
    url: 'https://github.com/tahsinature/cross-tools',
  },
];

const PersonalProjects = () => {
  return (
    <Section>
      <Header title="Projects" icon={<AssessmentRounded />} />
      <ul>
        {data.map(ele => (
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

export default PersonalProjects;

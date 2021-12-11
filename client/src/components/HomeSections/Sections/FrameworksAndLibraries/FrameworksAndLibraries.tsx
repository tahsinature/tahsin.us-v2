import React from 'react';
import Header from '../../../Header/Header';

const data = [
  {
    title: 'Express.js',
    description: `I am using Express since 2018. Love this freamework for it's robust set of features.`,
    url: 'https://expressjs.com/',
  },
  {
    title: 'Flask',
    description: `Using Flask for few days now. It was the tool helped me a lot to learn Python more deeper.`,
    url: 'https://flask.palletsprojects.com/',
  },
  {
    title: 'React',
    description: `Even though Vue.js was my first framework to learn, but I gotta say, I Love React and it's features incl. Unique Abstraction Layer.`,
    url: 'https://reactjs.org/',
  },
  {
    title: 'React Native',
    description: `This is the only tool I use for mobile developement (Althouh, it's just my hobby. I am not a professional mobile developer.`,
    url: 'https://reactnative.dev/',
  },
  {
    title: 'Vue.js',
    description: `If I go for complex applications, Vue.js will be my first choice over Angular. (Just my preference)`,
    url: 'https://vuejs.org/',
  },
  {
    title: 'Angular',
    description: `I learned it from my curiosity. Yeah, it helped me to grasp many concepts.`,
    url: 'https://angular.io/',
  },
];

const FrameworksAndLibraries = () => {
  return (
    <section className="lh-copy">
      <Header>Frameworks & Libraries</Header>
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
    </section>
  );
};

export default FrameworksAndLibraries;

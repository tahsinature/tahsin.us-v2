import React from 'react';
import Header from '../../../Header/Header';
import Section from '../../../Section/Section';
import classes from './ProgrammingLanguages.module.scss';
import { Code } from '@material-ui/icons';

const languages = [
  { _id: '1', name: 'Go', logo: 'https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fgo-programming-language.png?alt=media&token=9439e5b7-90ca-45f9-81cb-c045bc5f52fc' },
  { _id: '2', name: 'Typescript', logo: 'https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Ftypescript-logo.png?alt=media&token=30c62c24-0b1a-4e98-96ff-13e79caae01b' },
  { _id: '3', name: 'Java', logo: 'https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fjava-logo.png?alt=media&token=0fe32e7e-1294-41b9-8aec-0d6c7469edd7' },
  { _id: '4', name: 'Python', logo: 'https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fpython-logo.png?alt=media&token=06ad65d8-c53e-4f4d-89c9-61fcf7b269d8' },
  { _id: '5', name: 'Javascript', logo: 'https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fjavascript-logo.png?alt=media&token=d0f713f8-02f8-4fbc-9349-a10419352ef8' },
  { _id: '6', name: 'Bash', logo: 'https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fbash-logo.png?alt=media&token=16c7e05c-47e3-41b7-8c18-1a8f4437a29c' },
];

const ProgrammingLanguages = () => {
  return (
    <Section classNames={[classes.ProgrammingLanguages]}>
      <Header title="Programming Languages I Work With" icon={<Code />} />
      <p>All the technologies, frameworks and tools I use mostly are based on the following languages:</p>
      <br />
      <ul>
        {languages.map(ele => (
          <li key={ele._id}>
            <img src={ele.logo} alt="" />
            <p>{ele.name}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default ProgrammingLanguages;

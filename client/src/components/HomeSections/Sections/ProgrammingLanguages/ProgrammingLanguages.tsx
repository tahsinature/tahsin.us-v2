import React, { useState } from 'react';
import Header from '../../../Header/Header';
import Section from '../../../Section/Section';
import classes from './ProgrammingLanguages.module.scss';
import { Code } from '@material-ui/icons';
import Terminal from '../../../Terminal/Terminal';

const languages = [
  {
    _id: '1',
    name: 'Go',
    logo: 'https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fgo-programming-language.png?alt=media&token=9439e5b7-90ca-45f9-81cb-c045bc5f52fc',
    presentation: [
      {
        cmd: true,
        delay: 2,
        text: `main.go
package main
import "fmt"

func main() {
  fmt.Println("hi mom")
}`,
      },
      { cmd: false, text: '> hi mom' },
    ],
  },
  {
    _id: '2',
    name: 'Typescript',
    logo: 'https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Ftypescript-logo.png?alt=media&token=30c62c24-0b1a-4e98-96ff-13e79caae01b',
    presentation: [
      {
        cmd: true,
        delay: 2,
        text: `index.ts
console.log("hi mom")`,
      },
      { cmd: false, text: '> hi mom' },
    ],
  },
  {
    _id: '3',
    name: 'Java',
    logo: 'https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fjava-logo.png?alt=media&token=0fe32e7e-1294-41b9-8aec-0d6c7469edd7',
    presentation: [
      {
        cmd: true,
        delay: 2,
        text: `HelloWorld.java
package us.tahsin.java;

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("hi mom"); 
    }
}`,
      },
      { cmd: false, text: '> hi mom' },
    ],
  },
  {
    _id: '4',
    name: 'Python',
    logo: 'https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fpython-logo.png?alt=media&token=06ad65d8-c53e-4f4d-89c9-61fcf7b269d8',
    presentation: [
      {
        cmd: true,
        delay: 2,
        text: `app.py
print("hi mom")`,
      },
      { cmd: false, text: '> hi mom' },
    ],
  },
  {
    _id: '5',
    name: 'Javascript',
    logo: 'https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fjavascript-logo.png?alt=media&token=d0f713f8-02f8-4fbc-9349-a10419352ef8',
    presentation: [
      {
        cmd: true,
        delay: 2,
        text: `index.js
console.log("hi mom")`,
      },
      { cmd: false, text: '> hi mom' },
    ],
  },
  {
    _id: '6',
    name: 'Bash',
    logo: 'https://firebasestorage.googleapis.com/v0/b/global-daf32.appspot.com/o/me%2Fbash-logo.png?alt=media&token=16c7e05c-47e3-41b7-8c18-1a8f4437a29c',
    presentation: [
      {
        cmd: true,
        delay: 2,
        text: `hello-world.sh
#!/usr/bin/env bash
echo "hi mom"`,
      },
      { cmd: false, text: '> hi mom' },
    ],
  },
];

const ProgrammingLanguages = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [show, setShow] = useState(true);

  return (
    <Section classNames={[classes.ProgrammingLanguages]}>
      <Header title="Programming Languages I Work With" icon={<Code />} />
      <p>All the technologies, frameworks and tools I use mostly are based on the following languages:</p>
      <br />
      <div className={classes.Main}>
        <div className={classes.Holder}>
          {languages.map(language => (
            <div
              onClick={() => {
                setShow(false);
                setTimeout(() => {
                  setSelectedLanguage(language);
                  setShow(true);
                }, 1);
              }}
              key={language._id}
              className={classes.Single}>
              <div className={classes.LogoBox}>
                <img src={language.logo} alt="" />
              </div>
              <div className={classes.DetailBox}>
                <p>{language.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={classes.Monitor}>{show && <Terminal height={300} lines={selectedLanguage.presentation} />}</div>
      </div>
    </Section>
  );
};

export default ProgrammingLanguages;

import React, { useState } from 'react';
import { Code } from '@material-ui/icons';

import classes from './ProgrammingLanguages.module.scss';
import colors from 'src/constants/colors';
import Header from 'src/components/Header/Header';
import Section from 'src/components/Section/Section';
import Terminal from 'src/components/Terminal/Terminal';
import images from 'src/assets/images';

const languages = [
  {
    _id: '1',
    name: 'Go',
    logo: images.logogs.programmingLanguages.go,
    presentation: [
      {
        cmd: true,
        delay: 2,
        text: `main.go
package main
import "fmt"

func main() {
  fmt.Println("hi mom!")
}`,
      },
      { cmd: false, text: '> hi mom!' },
    ],
  },
  {
    _id: '2',
    name: 'Typescript',
    logo: images.logogs.programmingLanguages.typescript,
    presentation: [
      {
        cmd: true,
        delay: 2,
        text: `index.ts
console.log("hi mom!")`,
      },
      { cmd: false, text: '> hi mom!' },
    ],
  },
  {
    _id: '3',
    name: 'Java',
    logo: images.logogs.programmingLanguages.java,
    presentation: [
      {
        cmd: true,
        delay: 2,
        text: `HelloWorld.java
package us.tahsin.java;

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("hi mom!"); 
    }
}`,
      },
      { cmd: false, text: '> hi mom!' },
    ],
  },
  {
    _id: '4',
    name: 'Python',
    logo: images.logogs.programmingLanguages.python,
    presentation: [
      {
        cmd: true,
        delay: 2,
        text: `app.py
print("hi mom!")`,
      },
      { cmd: false, text: '> hi mom!' },
    ],
  },
  {
    _id: '5',
    name: 'Javascript',
    logo: images.logogs.programmingLanguages.javascript,
    presentation: [
      {
        cmd: true,
        delay: 2,
        text: `index.js
console.log("hi mom!")`,
      },
      { cmd: false, text: '> hi mom!' },
    ],
  },
  {
    _id: '6',
    name: 'Bash',
    logo: images.logogs.programmingLanguages.bash,
    presentation: [
      {
        cmd: true,
        delay: 2,
        text: `hello-world.sh
#!/usr/bin/env bash
echo "hi mom!"`,
      },
      { cmd: false, text: '> hi mom!' },
    ],
  },
];

const ProgrammingLanguages = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [show, setShow] = useState(true);

  const activeStyle = {
    borderColor: colors.common.primaryGreenishColor,
    color: colors.common.primaryGreenishColor,
  };

  const terminalHeight = 250;

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShow(false);
  //   }, 15000);
  // })

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
              style={language === selectedLanguage ? activeStyle : {}}
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

        <div style={{ height: `${terminalHeight + 2}px` }} className={classes.Monitor}>
          {show && <Terminal height={terminalHeight} lines={selectedLanguage.presentation} />}
        </div>
      </div>
    </Section>
  );
};

export default ProgrammingLanguages;

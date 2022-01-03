import React, { useState, useEffect } from 'react';
import Header from '../../../Header/Header';
import Section from '../../../Section/Section';
import classes from './HumanLanguages.module.scss';
import { Translate } from '@material-ui/icons';
import Typist from 'react-typist';

const languages = [
  { _id: '1', name: 'English', subOnLang: 'I am pretty fluent in English.' },
  { _id: '2', name: 'Bengali', subOnLang: 'আমি একজন স্থানীয় বাংলাভাষী।', subOnEng: 'I am a native speaker of Bengali.' },
  { _id: '3', name: 'Bahasa Indonesia', subOnLang: 'Saya berbicara Bahasa Indonesia dengan beberapa kesulitan.', subOnEng: 'I speak Bahasa Indonesia with some difficulty.' },
  { _id: '4', name: 'Rohingyan', subOnLang: 'ကျွန်ုပ်တွင် ရိုဟင်ဂျာဘာသာစကားကို ကျွမ်းကျင်စွာ တတ်မြောက်ပါသည်။', subOnEng: 'I have native fluency in Rohingya Language.' },
  { _id: '5', name: 'Arabic', subOnLang: 'أتعلم العربية حاليًا على دوولينجو.', subOnEng: 'I am currently learning Arabic on Duolingo.' },
  { _id: '6', name: 'Spanish', subOnLang: 'También sé un poco de español.', subOnEng: 'I know a bit of Spanish as well.' },
];

const HumanLanguages = () => {
  const [activeLangIndex, setLang] = useState(0);
  const [show, toggle] = useState(true);
  const nextLang = activeLangIndex === languages.length - 1 ? 0 : activeLangIndex + 1;
  let currentTimeout: NodeJS.Timeout;

  useEffect(() => {
    return () => {
      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }
    };
  });

  return (
    <Section classNames={[classes.HumanLanguages]}>
      <Header title="Human Languages I Can Speak" icon={<Translate />} />
      <div className={classes.Display}>
        {show && (
          <Typist
            avgTypingDelay={30}
            cursor={{ show: false }}
            onTypingDone={() => {
              currentTimeout = setTimeout(() => {
                toggle(false);
                setLang(nextLang);
                toggle(true);
              }, 2000);
            }}>
            <h2>{languages[activeLangIndex].subOnLang}</h2>
            <Typist.Delay ms={1000} />
            <p>
              <i>{languages[activeLangIndex].subOnEng}</i>
            </p>
          </Typist>
        )}
      </div>

      <div className={classes.Line}>
        {languages.map((ele, index) => (
          <div
            className={classes.LineSingleLang}
            key={ele._id}
            onClick={() => {
              clearTimeout(currentTimeout);

              toggle(false);
              setLang(index);
              setTimeout(() => toggle(true), 1);
            }}>
            <p className={activeLangIndex === index ? classes.Active : ''}>{ele.name}</p>
            {index === languages.length - 1 ? null : <span>/</span>}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default HumanLanguages;
